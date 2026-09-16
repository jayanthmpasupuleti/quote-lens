import React from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import { BottomTabBarProps } from 'expo-router/build/react-navigation/bottom-tabs';
import { Colors, Radii, Shadows } from '@/theme';
import { AppText } from '@/components/ui';
import { TabIcon } from '@/components/common/TabIcon';

/**
 * Custom floating liquid glass bottom navigation bar with a prominent central scan action
 * perfectly recreating the reference design's tactile, floating bar.
 */
export const CustomBottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.floatingWrapper} pointerEvents="box-none">
      <View style={styles.barContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const routeName = route.name; // 'index' | 'quotes' | 'scan' | 'settings'

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          // Special Prominent Central Scan Button
          if (routeName === 'scan') {
            return (
              <View key={route.key} style={styles.scanSlot} pointerEvents="box-none">
                <Pressable
                  onPress={onPress}
                  accessibilityRole="button"
                  accessibilityLabel="Scan Quote"
                  accessibilityState={{ selected: isFocused }}
                  style={({ pressed }) => [
                    styles.scanButton,
                    pressed && styles.scanButtonPressed,
                  ]}
                >
                  <View style={styles.scanInnerOrb}>
                    <TabIcon name="scan" focused={true} color="#FFFFFF" size={24} />
                  </View>
                </Pressable>
              </View>
            );
          }

          // Regular Tab Items (Home, Quotes, Settings)
          const getIconName = (): 'home' | 'quotes' | 'settings' => {
            if (routeName === 'index') return 'home';
            if (routeName === 'quotes') return 'quotes';
            return 'settings';
          };

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const color = isFocused ? Colors.primaryText : Colors.secondaryText;

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityLabel={String(label)}
              accessibilityState={{ selected: isFocused }}
              style={styles.tabItem}
            >
              <TabIcon
                name={getIconName()}
                focused={isFocused}
                color={color}
                size={22}
              />
              <AppText
                variant="label"
                color={color}
                style={[
                  styles.tabLabel,
                  isFocused ? styles.tabLabelFocused : null,
                ]}
              >
                {String(label)}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingWrapper: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 24 : 16,
    left: 20,
    right: 20,
    alignItems: 'center',
    zIndex: 999,
  },
  barContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: Radii.extraLarge,
    paddingVertical: 8,
    paddingHorizontal: 12,
    ...Shadows.elevated,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    gap: 3,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
  },
  tabLabelFocused: {
    fontWeight: '700',
  },
  scanSlot: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  scanButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.darkPrimaryCTA,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    ...Shadows.hero,
  },
  scanInnerOrb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButtonPressed: {
    transform: [{ scale: 0.94 }],
    opacity: 0.9,
  },
});

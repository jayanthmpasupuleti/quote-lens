import React from 'react';
import { View, StyleSheet, ColorValue } from 'react-native';
import { Colors } from '@/theme';

export interface TabIconProps {
  name: 'home' | 'quotes' | 'scan' | 'settings';
  focused: boolean;
  color?: ColorValue | string;
  size?: number;
}

/**
 * Clean vector-like icon renderer using lightweight native primitives
 * Keeps the bundle lean, robust across iOS/Android, and avoids external icon issues.
 */
export const TabIcon: React.FC<TabIconProps> = ({
  name,
  focused,
  color = Colors.primaryText,
  size = 24,
}) => {
  const iconColor = (typeof color === 'string' ? color : Colors.primaryText) as string;

  switch (name) {
    case 'home':
      return (
        <View style={[styles.iconBox, { width: size, height: size }]}>
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 9,
              borderRightWidth: 9,
              borderBottomWidth: 8,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: iconColor,
            }}
          />
          <View
            style={{
              width: 14,
              height: 10,
              backgroundColor: focused ? iconColor : 'transparent',
              borderWidth: 2,
              borderTopWidth: 0,
              borderColor: iconColor,
              borderBottomLeftRadius: 2,
              borderBottomRightRadius: 2,
            }}
          />
        </View>
      );
    case 'quotes':
      return (
        <View style={[styles.iconBox, { width: size, height: size }]}>
          <View
            style={{
              width: 15,
              height: 19,
              borderRadius: 3,
              borderWidth: 2,
              borderColor: iconColor,
              padding: 2,
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <View style={{ height: 1.5, width: 7, backgroundColor: iconColor, borderRadius: 1 }} />
            <View style={{ height: 1.5, width: 7, backgroundColor: iconColor, borderRadius: 1 }} />
            <View style={{ height: 1.5, width: 4, backgroundColor: iconColor, borderRadius: 1 }} />
          </View>
        </View>
      );
    case 'scan':
      return (
        <View style={[styles.iconBox, { width: size, height: size }]}>
          <View
            style={{
              width: 20,
              height: 16,
              borderRadius: 4,
              borderWidth: 2,
              borderColor: iconColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: focused ? iconColor : 'transparent',
                borderWidth: 1.5,
                borderColor: iconColor,
              }}
            />
          </View>
        </View>
      );
    case 'settings':
      return (
        <View style={[styles.iconBox, { width: size, height: size }]}>
          <View
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              borderWidth: 2.5,
              borderColor: iconColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: iconColor,
              }}
            />
          </View>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {
  Pressable,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  AccessibilityRole,
} from 'react-native';
import { Colors, Radii, Spacing, Shadows } from '@/theme';
import { AppText } from './AppText';

export interface PrimaryCTAProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

/**
 * Large premium dark/glass hero card for "Scan a Quote",
 * matching the central hero CTA in the reference design.
 */
export const PrimaryCTA: React.FC<PrimaryCTAProps> = ({
  title,
  onPress,
  style,
  accessibilityLabel,
  accessibilityHint,
}) => {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole={'button' as AccessibilityRole}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        style,
      ]}
    >
      {/* Background ambient gradient simulation inside dark card */}
      <View style={styles.topLightHighlight} pointerEvents="none" />
      <View style={styles.blueGlowUnderlay} pointerEvents="none" />

      {/* Central Glass Orb with Camera Icon */}
      <View style={styles.orbContainer}>
        <View style={styles.outerGlow}>
          <View style={styles.glassOrb}>
            {/* Minimal SVG-free camera icon inside glass orb */}
            <View style={styles.cameraIcon}>
              <View style={styles.cameraFlash} />
              <View style={styles.cameraBody}>
                <View style={styles.cameraLens} />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Action Title with Right Arrow */}
      <View style={styles.titleRow}>
        <AppText variant="title" color={Colors.surface} style={styles.titleText}>
          {title}
        </AppText>
        <View style={styles.arrowCircle}>
          <AppText variant="body" color={Colors.surface} style={styles.arrowText}>
            →
          </AppText>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkPrimaryCTA,
    borderRadius: Radii.extraLarge,
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.14)',
    ...Shadows.hero,
  },
  topLightHighlight: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
  },
  blueGlowUnderlay: {
    position: 'absolute',
    top: -20,
    width: 200,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(59, 130, 246, 0.22)',
  },
  orbContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  outerGlow: {
    padding: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  glassOrb: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.28)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraFlash: {
    width: 8,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 1.5,
    borderTopRightRadius: 1.5,
    marginBottom: 1,
    marginLeft: -8,
  },
  cameraBody: {
    width: 26,
    height: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraLens: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleText: {
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  arrowCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
  },
  pressed: {
    transform: [{ scale: 0.985 }],
    opacity: 0.94,
  },
});

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export interface AmbientBackgroundProps {
  children: React.ReactNode;
}

/**
 * Creates a subtle, calm Apple-like ambient lighting effect behind the screen.
 * Layered translucent orbs give a "light passing through glass" glow without
 * loud, saturated gradients.
 */
export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Ambient Top Glow Orbs */}
      <View style={styles.topLightOrb} pointerEvents="none" />
      <View style={styles.rightGlowOrb} pointerEvents="none" />
      <View style={styles.centerSubtleGlow} pointerEvents="none" />

      {/* Actual View Content */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    position: 'relative',
  },
  topLightOrb: {
    position: 'absolute',
    top: -90,
    left: -60,
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.9,
    borderRadius: (SCREEN_WIDTH * 0.9) / 2,
    backgroundColor: Colors.ambient.blueOrb,
    opacity: 0.5,
    transform: [{ scaleX: 1.2 }],
  },
  rightGlowOrb: {
    position: 'absolute',
    top: 60,
    right: -80,
    width: SCREEN_WIDTH * 0.75,
    height: SCREEN_WIDTH * 0.75,
    borderRadius: (SCREEN_WIDTH * 0.75) / 2,
    backgroundColor: Colors.ambient.purpleOrb,
    opacity: 0.4,
  },
  centerSubtleGlow: {
    position: 'absolute',
    top: SCREEN_WIDTH * 0.8,
    left: 20,
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.6,
    borderRadius: (SCREEN_WIDTH * 0.6) / 2,
    backgroundColor: 'rgba(238, 242, 255, 0.4)',
    opacity: 0.35,
  },
  content: {
    flex: 1,
  },
});

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii } from '@/theme';

export interface IconOrbProps {
  children: React.ReactNode;
  size?: number;
  style?: ViewStyle;
  variant?: 'glass' | 'dark' | 'soft';
}

export const IconOrb: React.FC<IconOrbProps> = ({
  children,
  size = 48,
  style,
  variant = 'glass',
}) => {
  const variantStyle = {
    glass: styles.glassOrb,
    dark: styles.darkOrb,
    soft: styles.softOrb,
  }[variant];

  return (
    <View
      style={[
        styles.baseOrb,
        { width: size, height: size, borderRadius: size / 2 },
        variantStyle,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  baseOrb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  glassOrb: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.45)',
  },
  darkOrb: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  softOrb: {
    backgroundColor: '#EEF2F6',
    borderWidth: 1,
    borderColor: Colors.border,
  },
});

import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Pressable,
  AccessibilityRole,
} from 'react-native';
import { Colors, Radii, Spacing, Shadows } from '@/theme';

export interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  variant?: 'surface' | 'glass' | 'elevated' | 'subtle';
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  variant = 'surface',
}) => {
  const variantStyles = {
    surface: styles.surfaceCard,
    glass: styles.glassCard,
    elevated: styles.elevatedCard,
    subtle: styles.subtleCard,
  }[variant];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole={'button' as AccessibilityRole}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        style={({ pressed }) => [
          styles.baseCard,
          variantStyles,
          pressed && styles.pressed,
          style,
        ]}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View style={[styles.baseCard, variantStyles, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  baseCard: {
    borderRadius: Radii.card,
    padding: Spacing.cardPadding,
  },
  surfaceCard: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.subtle,
  },
  glassCard: {
    backgroundColor: Colors.glassSurface,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    ...Shadows.glass,
  },
  elevatedCard: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.subtleBorder,
    ...Shadows.elevated,
  },
  subtleCard: {
    backgroundColor: '#F3F5F9',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.992 }],
  },
});

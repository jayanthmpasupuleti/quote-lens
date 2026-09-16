import React from 'react';
import {
  Pressable,
  StyleSheet,
  ViewStyle,
  AccessibilityRole,
} from 'react-native';
import { Colors, Radii } from '@/theme';

export interface IconButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  accessibilityLabel: string;
  accessibilityHint?: string;
  size?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onPress,
  disabled = false,
  style,
  accessibilityLabel,
  accessibilityHint,
  size = 44,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole={'button' as AccessibilityRole}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={({ pressed }) => [
        styles.button,
        { width: size, height: size, borderRadius: size / 2 },
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  pressed: {
    backgroundColor: Colors.pressed,
  },
  disabled: {
    opacity: 0.4,
  },
});

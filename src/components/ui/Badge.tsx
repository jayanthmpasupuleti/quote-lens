import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Radii, Spacing } from '@/theme';
import { AppText } from './AppText';

export interface BadgeProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  backgroundColor = '#F0F1F3',
  textColor = '#474D57',
  borderColor,
  style,
}) => {
  return (
    <View
      style={[
        styles.badge,
        { backgroundColor },
        borderColor ? { borderWidth: 1, borderColor } : null,
        style,
      ]}
    >
      <AppText variant="label" color={textColor} style={styles.text}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: Spacing.xs,
    paddingVertical: 3,
    borderRadius: Radii.small,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 11,
    lineHeight: 14,
  },
});

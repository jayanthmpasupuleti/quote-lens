import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '@/theme';
import { AppText } from './AppText';

export type StatusLevel = 'clear' | 'ask' | 'review' | 'info';

export interface StatusBadgeProps {
  level: StatusLevel;
  count?: number;
  label?: string;
  style?: ViewStyle;
}

/**
 * Clean status indicator pill with colored dot and translucent tint
 * Matches reference: "3 items need attention", "1 item needs attention", "All clear"
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  level,
  count,
  label,
  style,
}) => {
  const getBadgeConfig = () => {
    switch (level) {
      case 'clear':
        return {
          textColor: Colors.semantic.clear,
          bgColor: Colors.semanticSubtle.clear,
          dotColor: Colors.semantic.clear,
          defaultLabel: 'All clear',
        };
      case 'review':
        return {
          textColor: Colors.semantic.review,
          bgColor: Colors.semanticSubtle.review,
          dotColor: Colors.semantic.review,
          defaultLabel: count === 1 ? '1 item needs attention' : `${count ?? ''} items need attention`,
        };
      case 'ask':
        return {
          textColor: Colors.semantic.ask,
          bgColor: Colors.semanticSubtle.ask,
          dotColor: Colors.semantic.ask,
          defaultLabel: count === 1 ? '1 item needs attention' : `${count ?? ''} items need attention`,
        };
      case 'info':
      default:
        return {
          textColor: Colors.semantic.info,
          bgColor: Colors.semanticSubtle.info,
          dotColor: Colors.semantic.info,
          defaultLabel: 'Info',
        };
    }
  };

  const config = getBadgeConfig();
  const displayLabel = label || config.defaultLabel;

  return (
    <View style={[styles.badge, { backgroundColor: config.bgColor }, style]}>
      <View style={[styles.dot, { backgroundColor: config.dotColor }]} />
      <AppText
        variant="label"
        color={config.textColor}
        style={styles.text}
      >
        {displayLabel}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xs + 2,
    paddingVertical: 3.5,
    borderRadius: Radii.pill,
    alignSelf: 'flex-start',
    gap: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  text: {
    fontSize: 11.5,
    fontWeight: '600',
  },
});

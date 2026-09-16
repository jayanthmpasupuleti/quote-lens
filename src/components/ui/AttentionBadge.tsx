import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '@/theme';
import { AppText } from './AppText';

export interface AttentionBadgeProps {
  count: number;
  style?: ViewStyle;
}

export const AttentionBadge: React.FC<AttentionBadgeProps> = ({ count, style }) => {
  if (count <= 0) {
    return (
      <View style={[styles.container, styles.clearContainer, style]}>
        <View style={[styles.dot, { backgroundColor: Colors.semantic.clear }]} />
        <AppText variant="label" color={Colors.semantic.clear} style={styles.text}>
          All clear
        </AppText>
      </View>
    );
  }

  // Use review (red/coral) or ask (amber) depending on count
  const isHighAttention = count >= 3;
  const badgeColor = isHighAttention ? Colors.semantic.review : Colors.semantic.ask;
  const badgeBg = isHighAttention ? Colors.semanticSubtle.review : Colors.semanticSubtle.ask;
  const label = count === 1 ? '1 item needs attention' : `${count} items need attention`;

  return (
    <View style={[styles.container, { backgroundColor: badgeBg }, style]}>
      <View style={[styles.dot, { backgroundColor: badgeColor }]} />
      <AppText variant="label" color={badgeColor} style={styles.text}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xs,
    paddingVertical: 4,
    borderRadius: Radii.small,
    alignSelf: 'flex-start',
  },
  clearContainer: {
    backgroundColor: Colors.semanticSubtle.clear,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});

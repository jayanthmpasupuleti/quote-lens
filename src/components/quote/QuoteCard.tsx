import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '@/theme';
import { Quote } from '@/types/quote';
import { formatINR } from '@/utils/currency';
import { AppText, Card, StatusBadge } from '../ui';

export interface QuoteCardProps {
  quote: Quote;
  onPress?: () => void;
  style?: ViewStyle;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, onPress, style }) => {
  // Select category icon representation
  const renderCategoryIcon = () => {
    return (
      <View style={styles.iconOrb}>
        <View style={styles.iconDoc}>
          <View style={styles.iconLine} />
          <View style={styles.iconLine} />
        </View>
      </View>
    );
  };

  const statusLevel =
    quote.attentionCount === 0
      ? 'clear'
      : quote.attentionCount >= 3
      ? 'review'
      : 'ask';

  return (
    <Card
      variant="surface"
      onPress={onPress}
      style={[styles.card, style]}
      accessibilityLabel={`Quote from ${quote.vendor.name}, ${quote.category}, total ${formatINR(quote.totalAmount)}`}
    >
      <View style={styles.mainRow}>
        {/* Left icon orb */}
        {renderCategoryIcon()}

        {/* Middle Vendor & Category */}
        <View style={styles.middleColumn}>
          <AppText variant="section" color={Colors.primaryText} numberOfLines={1} style={styles.vendorName}>
            {quote.vendor.name}
          </AppText>
          <AppText variant="caption" color={Colors.secondaryText} numberOfLines={1} style={styles.categoryText}>
            {quote.category}
          </AppText>

          {/* Attention indicator */}
          <View style={styles.statusRow}>
            <StatusBadge level={statusLevel} count={quote.attentionCount} />
            <AppText variant="caption" color={Colors.tertiaryText} style={styles.dateText}>
              • {quote.date}
            </AppText>
          </View>
        </View>

        {/* Right Total & Chevron */}
        <View style={styles.rightColumn}>
          <AppText variant="title" color={Colors.primaryText} style={styles.amount}>
            {formatINR(quote.totalAmount)}
          </AppText>
          <AppText variant="body" color={Colors.tertiaryText} style={styles.chevron}>
            ›
          </AppText>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 14,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.xs + 2,
    backgroundColor: Colors.surface,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconOrb: {
    width: 44,
    height: 44,
    borderRadius: Radii.medium,
    backgroundColor: '#F3F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm + 2,
  },
  iconDoc: {
    width: 18,
    height: 22,
    borderWidth: 1.5,
    borderColor: '#4A5568',
    borderRadius: 3,
    padding: 3,
    justifyContent: 'center',
    gap: 3,
  },
  iconLine: {
    height: 1.5,
    backgroundColor: '#4A5568',
    borderRadius: 1,
    width: '100%',
  },
  middleColumn: {
    flex: 1,
    marginRight: Spacing.xs,
  },
  vendorName: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 2,
  },
  categoryText: {
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 6,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  dateText: {
    fontSize: 11.5,
  },
  rightColumn: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: Spacing.xs,
  },
  amount: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
  },
  chevron: {
    fontSize: 18,
    lineHeight: 18,
    marginTop: 2,
  },
});

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Spacing } from '@/theme';
import { Quote } from '@/types/quote';
import { formatINR } from '@/utils/currency';
import { formatRelativeDate } from '@/utils/dates';
import { AppText, Card, Badge, AttentionBadge } from '../ui';

export interface QuoteCardProps {
  quote: Quote;
  onPress?: () => void;
  style?: ViewStyle;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, onPress, style }) => {
  return (
    <Card
      onPress={onPress}
      style={[styles.card, style]}
      accessibilityLabel={`Quote from ${quote.vendor.name}, ${quote.category}, total ${formatINR(quote.totalAmount)}`}
    >
      <View style={styles.topRow}>
        <View style={styles.vendorInfo}>
          <AppText variant="section" numberOfLines={1} color={Colors.primaryText}>
            {quote.vendor.name}
          </AppText>
          <View style={styles.categoryRow}>
            <Badge label={quote.category} style={styles.categoryBadge} />
            <AppText variant="caption" color={Colors.secondaryText}>
              • {formatRelativeDate(quote.date)}
            </AppText>
          </View>
        </View>
        <AppText variant="title" color={Colors.primaryText} style={styles.amount}>
          {formatINR(quote.totalAmount)}
        </AppText>
      </View>

      <View style={styles.bottomRow}>
        <AttentionBadge count={quote.attentionCount} />
        {quote.itemsCount ? (
          <AppText variant="caption" color={Colors.secondaryText}>
            {quote.itemsCount} items
          </AppText>
        ) : null}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: Spacing.sm,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
  },
  vendorInfo: {
    flex: 1,
    marginRight: Spacing.md,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 6,
  },
  categoryBadge: {
    backgroundColor: '#F3F4F6',
  },
  amount: {
    fontWeight: '700',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
  },
});

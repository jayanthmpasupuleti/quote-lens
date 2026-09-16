import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import { formatINR } from '@/utils/currency';
import {
  Screen,
  AppText,
  Card,
  AttentionBadge,
  Badge,
  Divider,
  PrimaryButton,
} from '@/components/ui';

export default function QuoteDetailScreen() {
  const router = useRouter();
  const { quoteId } = useLocalSearchParams<{ quoteId: string }>();

  const quote = MOCK_QUOTES.find((q) => q.id === quoteId) || MOCK_QUOTES[0];

  const handleOpenAnalysis = () => {
    router.push({
      pathname: '/analysis/[quoteId]',
      params: { quoteId: quote.id },
    });
  };

  return (
    <Screen scrollable>
      {/* Header Info */}
      <View style={styles.header}>
        <View style={styles.topRow}>
          <Badge label={quote.category} />
          <AppText variant="caption" color={Colors.secondaryText}>
            {quote.date}
          </AppText>
        </View>

        <AppText variant="largeTitle" color={Colors.primaryText} style={styles.vendorName}>
          {quote.vendor.name}
        </AppText>
        {quote.vendor.location && (
          <AppText variant="caption" color={Colors.secondaryText}>
            📍 {quote.vendor.location}
          </AppText>
        )}

        <View style={styles.totalBox}>
          <AppText variant="caption" color={Colors.secondaryText}>
            TOTAL QUOTE AMOUNT
          </AppText>
          <AppText variant="display" color={Colors.primaryText} style={styles.totalAmount}>
            {formatINR(quote.totalAmount)}
          </AppText>
        </View>

        <AttentionBadge count={quote.attentionCount} style={styles.attentionBadge} />
      </View>

      {/* Analysis CTA Banner */}
      <Card style={styles.analysisCard}>
        <AppText variant="section" color={Colors.primaryText} style={styles.ctaTitle}>
          Smart Breakdown Available
        </AppText>
        <AppText variant="body" color={Colors.secondaryText} style={styles.ctaText}>
          We found {quote.attentionCount} {quote.attentionCount === 1 ? 'item' : 'items'} that you may want to question before approving this quote.
        </AppText>
        <PrimaryButton
          title="View Full Analysis"
          onPress={handleOpenAnalysis}
          style={styles.ctaButton}
        />
      </Card>

      {/* Line Items List */}
      {quote.lineItems && quote.lineItems.length > 0 && (
        <View style={styles.itemsSection}>
          <AppText variant="section" color={Colors.primaryText} style={styles.sectionHeader}>
            Line Items ({quote.lineItems.length})
          </AppText>

          {quote.lineItems.map((item, index) => (
            <Card
              key={item.id}
              style={styles.itemCard}
              onPress={() =>
                router.push({
                  pathname: '/analysis/item/[itemId]',
                  params: { itemId: item.id },
                })
              }
            >
              <View style={styles.itemTop}>
                <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.itemName}>
                  {item.name}
                </AppText>
                <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.itemPrice}>
                  {formatINR(item.totalPrice)}
                </AppText>
              </View>

              {item.attention && item.attention.level !== 'clear' && (
                <View style={styles.itemAttention}>
                  <AppText
                    variant="caption"
                    color={
                      item.attention.level === 'review'
                        ? Colors.semantic.review
                        : Colors.semantic.ask
                    }
                  >
                    ⚠️ {item.attention.title}
                  </AppText>
                </View>
              )}
            </Card>
          ))}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: Spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  vendorName: {
    marginTop: 2,
    marginBottom: 2,
  },
  totalBox: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.xs,
  },
  totalAmount: {
    marginTop: 2,
  },
  attentionBadge: {
    marginTop: Spacing.xs,
  },
  analysisCard: {
    marginVertical: Spacing.lg,
    padding: Spacing.lg,
    backgroundColor: Colors.surface,
  },
  ctaTitle: {
    marginBottom: 4,
  },
  ctaText: {
    marginBottom: Spacing.md,
    lineHeight: 22,
  },
  ctaButton: {
    width: '100%',
  },
  itemsSection: {
    marginBottom: Spacing.xl,
  },
  sectionHeader: {
    marginBottom: Spacing.sm,
  },
  itemCard: {
    marginBottom: Spacing.xs,
    padding: Spacing.md,
  },
  itemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemName: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  itemPrice: {
    fontWeight: '600',
  },
  itemAttention: {
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.border,
  },
});

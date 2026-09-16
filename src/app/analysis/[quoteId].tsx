import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import { formatINR } from '@/utils/currency';
import {
  Screen,
  AppText,
  Card,
  AttentionBadge,
  Badge,
  PrimaryButton,
} from '@/components/ui';

export default function QuoteAnalysisScreen() {
  const router = useRouter();
  const { quoteId } = useLocalSearchParams<{ quoteId: string }>();

  const quote = MOCK_QUOTES.find((q) => q.id === quoteId) || MOCK_QUOTES[0];
  const itemsWithAttention = quote.lineItems?.filter((i) => i.attention && i.attention.level !== 'clear') || [];

  return (
    <Screen scrollable>
      {/* Overview */}
      <View style={styles.header}>
        <AppText variant="caption" color={Colors.secondaryText}>
          ANALYSIS FOR {quote.vendor.name.toUpperCase()}
        </AppText>
        <AppText variant="largeTitle" color={Colors.primaryText} style={styles.title}>
          Summary Findings
        </AppText>
        <AttentionBadge count={quote.attentionCount} style={styles.attention} />
      </View>

      {/* Flagged Items Section */}
      <View style={styles.section}>
        <AppText variant="section" color={Colors.primaryText} style={styles.sectionTitle}>
          Items Needing Attention ({itemsWithAttention.length})
        </AppText>

        {itemsWithAttention.map((item) => (
          <Card
            key={item.id}
            style={styles.flaggedCard}
            onPress={() =>
              router.push({
                pathname: '/analysis/item/[itemId]',
                params: { itemId: item.id },
              })
            }
          >
            <View style={styles.cardHeader}>
              <Badge
                label={item.attention?.level === 'review' ? 'REVIEW NEEDED' : 'QUESTION RECOMMENDED'}
                backgroundColor={
                  item.attention?.level === 'review'
                    ? Colors.semanticSubtle.review
                    : Colors.semanticSubtle.ask
                }
                textColor={
                  item.attention?.level === 'review'
                    ? Colors.semantic.review
                    : Colors.semantic.ask
                }
              />
              <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.price}>
                {formatINR(item.totalPrice)}
              </AppText>
            </View>

            <AppText variant="section" color={Colors.primaryText} style={styles.itemName}>
              {item.name}
            </AppText>

            <AppText variant="body" color={Colors.secondaryText} style={styles.itemDesc}>
              {item.attention?.description}
            </AppText>

            {item.attention?.suggestedQuestion && (
              <View style={styles.questionBox}>
                <AppText variant="label" color={Colors.primaryText} style={styles.askTag}>
                  RECOMMENDED QUESTION:
                </AppText>
                <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.questionText}>
                  "{item.attention.suggestedQuestion}"
                </AppText>
              </View>
            )}
          </Card>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  title: {
    marginTop: 4,
    marginBottom: Spacing.xs,
  },
  attention: {
    marginTop: Spacing.xs,
  },
  section: {
    marginBottom: Spacing.massive,
  },
  sectionTitle: {
    marginBottom: Spacing.md,
  },
  flaggedCard: {
    marginBottom: Spacing.md,
    padding: Spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  price: {
    fontWeight: '700',
  },
  itemName: {
    marginBottom: 4,
  },
  itemDesc: {
    lineHeight: 22,
    marginBottom: Spacing.sm,
  },
  questionBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: Radii.medium,
    padding: Spacing.sm,
    borderLeftWidth: 3,
    borderLeftColor: Colors.semantic.ask,
  },
  askTag: {
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  questionText: {
    fontStyle: 'italic',
    lineHeight: 20,
  },
});

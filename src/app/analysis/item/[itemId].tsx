import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import { formatINR } from '@/utils/currency';
import { Screen, AppText, Card, Badge, PrimaryButton } from '@/components/ui';

export default function ItemDetailModal() {
  const router = useRouter();
  const { itemId } = useLocalSearchParams<{ itemId: string }>();

  // Find line item across mock quotes
  let foundItem = null;
  for (const quote of MOCK_QUOTES) {
    const item = quote.lineItems?.find((li) => li.id === itemId);
    if (item) {
      foundItem = item;
      break;
    }
  }

  const item = foundItem || MOCK_QUOTES[0].lineItems![1];

  return (
    <Screen scrollable edges={['bottom']}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          {item.attention && (
            <Badge
              label={item.attention.level === 'review' ? 'REVIEW NEEDED' : 'QUESTION RECOMMENDED'}
              backgroundColor={
                item.attention.level === 'review'
                  ? Colors.semanticSubtle.review
                  : Colors.semanticSubtle.ask
              }
              textColor={
                item.attention.level === 'review'
                  ? Colors.semantic.review
                  : Colors.semantic.ask
              }
              style={styles.badge}
            />
          )}

          <AppText variant="largeTitle" color={Colors.primaryText} style={styles.itemName}>
            {item.name}
          </AppText>

          <View style={styles.priceRow}>
            <AppText variant="caption" color={Colors.secondaryText}>
              QUOTED COST
            </AppText>
            <AppText variant="title" color={Colors.primaryText} style={styles.price}>
              {formatINR(item.totalPrice)}
            </AppText>
          </View>
        </View>

        {item.attention && (
          <Card style={styles.insightCard}>
            <AppText variant="section" color={Colors.primaryText} style={styles.insightTitle}>
              {item.attention.title}
            </AppText>
            <AppText variant="body" color={Colors.secondaryText} style={styles.insightDesc}>
              {item.attention.description}
            </AppText>

            {item.attention.suggestedQuestion && (
              <View style={styles.questionContainer}>
                <AppText variant="label" color={Colors.secondaryText} style={styles.questionLabel}>
                  WHAT TO SAY TO YOUR VENDOR:
                </AppText>
                <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.questionText}>
                  "{item.attention.suggestedQuestion}"
                </AppText>
              </View>
            )}
          </Card>
        )}

        <View style={styles.actions}>
          <PrimaryButton
            title="Done"
            onPress={() => router.back()}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.md,
  },
  topSection: {
    marginBottom: Spacing.lg,
  },
  badge: {
    marginBottom: Spacing.sm,
  },
  itemName: {
    marginBottom: Spacing.md,
  },
  priceRow: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: Radii.medium,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  price: {
    marginTop: 2,
    fontWeight: '700',
  },
  insightCard: {
    marginBottom: Spacing.xl,
    padding: Spacing.lg,
  },
  insightTitle: {
    marginBottom: Spacing.xs,
  },
  insightDesc: {
    lineHeight: 22,
    marginBottom: Spacing.md,
  },
  questionContainer: {
    backgroundColor: '#F9FAFB',
    padding: Spacing.md,
    borderRadius: Radii.medium,
    borderLeftWidth: 3,
    borderLeftColor: Colors.semantic.ask,
  },
  questionLabel: {
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  questionText: {
    lineHeight: 22,
    fontStyle: 'italic',
  },
  actions: {
    marginTop: Spacing.sm,
  },
});

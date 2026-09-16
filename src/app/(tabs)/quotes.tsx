import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import { Screen, AppText, EmptyState } from '@/components/ui';
import { QuoteCard } from '@/components/quote';

export default function QuotesScreen() {
  const router = useRouter();
  const [quotes, setQuotes] = useState(MOCK_QUOTES);

  const handleQuotePress = (quoteId: string) => {
    router.push({
      pathname: '/quotes/[quoteId]',
      params: { quoteId },
    });
  };

  const handleScanPress = () => {
    router.push('/(tabs)/scan');
  };

  // Ability to toggle empty state for testing/demo purposes
  const toggleMockData = () => {
    setQuotes((prev) => (prev.length > 0 ? [] : MOCK_QUOTES));
  };

  return (
    <Screen scrollable>
      {/* Screen Title Bar */}
      <View style={styles.header}>
        <View>
          <AppText variant="largeTitle" color={Colors.primaryText}>
            Quotes
          </AppText>
          <AppText variant="caption" color={Colors.secondaryText}>
            {quotes.length} {quotes.length === 1 ? 'quote' : 'quotes'} analyzed
          </AppText>
        </View>

        {/* Demo toggle for empty state validation */}
        <Pressable
          onPress={toggleMockData}
          accessibilityRole="button"
          accessibilityLabel="Toggle demo empty state"
          style={styles.demoToggle}
        >
          <AppText variant="label" color={Colors.semantic.info}>
            {quotes.length > 0 ? 'Demo Empty' : 'Show Mock'}
          </AppText>
        </Pressable>
      </View>

      {quotes.length === 0 ? (
        <EmptyState
          title="No quotes yet"
          description="Scan a service quotation or repair bill to see an instant line-by-line breakdown."
          actionTitle="Scan Your First Quote"
          onAction={handleScanPress}
          style={styles.emptyContainer}
        />
      ) : (
        <View style={styles.list}>
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              onPress={() => handleQuotePress(quote.id)}
            />
          ))}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  demoToggle: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: Colors.semanticSubtle.info,
    borderRadius: 6,
  },
  list: {
    gap: Spacing.xs,
  },
  emptyContainer: {
    marginTop: Spacing.massive,
  },
});

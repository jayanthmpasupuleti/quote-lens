import React, { useState } from 'react';
import { View, StyleSheet, Pressable, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import { Screen, AppText, EmptyState } from '@/components/ui';
import { QuoteCard } from '@/components/quote';

type FilterTab = 'all' | 'attention' | 'completed';

export default function QuotesScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
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

  // Filter quotes based on selected pill
  const filteredQuotes = quotes.filter((q) => {
    if (activeFilter === 'attention') return q.attentionCount > 0;
    if (activeFilter === 'completed') return q.attentionCount === 0;
    return true;
  });

  return (
    <Screen scrollable withAmbientBackground>
      {/* Top Title Bar with Search Icon */}
      <View style={styles.header}>
        <AppText variant="largeTitle" color={Colors.primaryText} style={styles.title}>
          Your Quotes
        </AppText>
        <View style={styles.searchIconOrb}>
          <AppText variant="body" color={Colors.secondaryText}>
            🔍
          </AppText>
        </View>
      </View>

      {/* Segmented Filter Pills */}
      <View style={styles.filterRow}>
        <Pressable
          onPress={() => setActiveFilter('all')}
          style={[
            styles.filterPill,
            activeFilter === 'all' && styles.filterPillActive,
          ]}
        >
          <AppText
            variant="caption"
            color={activeFilter === 'all' ? '#FFFFFF' : Colors.secondaryText}
            style={styles.filterText}
          >
            All
          </AppText>
        </Pressable>

        <Pressable
          onPress={() => setActiveFilter('attention')}
          style={[
            styles.filterPill,
            activeFilter === 'attention' && styles.filterPillActive,
          ]}
        >
          <AppText
            variant="caption"
            color={activeFilter === 'attention' ? '#FFFFFF' : Colors.secondaryText}
            style={styles.filterText}
          >
            Needs Attention
          </AppText>
        </Pressable>

        <Pressable
          onPress={() => setActiveFilter('completed')}
          style={[
            styles.filterPill,
            activeFilter === 'completed' && styles.filterPillActive,
          ]}
        >
          <AppText
            variant="caption"
            color={activeFilter === 'completed' ? '#FFFFFF' : Colors.secondaryText}
            style={styles.filterText}
          >
            Completed
          </AppText>
        </Pressable>
      </View>

      {/* Quote Cards List */}
      {filteredQuotes.length === 0 ? (
        <EmptyState
          title="No quotes in this filter"
          description="Try selecting another category or scan a new service quote to get started."
          actionTitle="Scan a Quote"
          onAction={handleScanPress}
          style={styles.emptyContainer}
        />
      ) : (
        <View style={styles.list}>
          {filteredQuotes.map((quote) => (
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
    alignItems: 'center',
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.md,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  searchIconOrb: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.glassSurfaceHigh,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: Spacing.md,
  },
  filterPill: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: Radii.pill,
    backgroundColor: '#EBEFF5',
  },
  filterPillActive: {
    backgroundColor: Colors.darkPrimaryCTA,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
  },
  list: {
    gap: Spacing.xs,
  },
  emptyContainer: {
    marginTop: Spacing.xxl,
  },
});

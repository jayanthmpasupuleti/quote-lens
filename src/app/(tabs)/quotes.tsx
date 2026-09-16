import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import { Screen, AppText } from '@/components/ui';
import { StitchHeader } from '@/components/common/StitchHeader';
import { StitchQuoteRow } from '@/components/quote/StitchQuoteRow';

type FilterTab = 'all' | 'attention' | 'clear';

const EXTENDED_MOCK_QUOTES = [
  ...MOCK_QUOTES,
  {
    id: 'quote-5',
    vendor: {
      name: 'Apex Dental Care',
      location: 'Indiranagar, Bengaluru',
    },
    category: 'Root Canal & Ceramic Cr...',
    currency: 'INR',
    totalAmount: 18500,
    attentionCount: 2,
    date: 'Oct 12 · Healthcare',
    itemsCount: 4,
    notes: 'Material premium +28%',
  },
  {
    id: 'quote-6',
    vendor: {
      name: 'GreenShield Roofing',
      location: 'Koramangala, Bengaluru',
    },
    category: 'Gutter Replacement',
    currency: 'INR',
    totalAmount: 34000,
    attentionCount: 1,
    date: 'Aug 22 · Contractor',
    itemsCount: 5,
    notes: 'Overlapping disposal fee',
  },
];

export default function QuotesScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuotePress = (quoteId: string) => {
    router.push({
      pathname: '/quotes/[quoteId]',
      params: { quoteId },
    });
  };

  const filteredQuotes = EXTENDED_MOCK_QUOTES.filter((q) => {
    if (searchQuery.trim().length > 0) {
      const matchVendor = q.vendor.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = q.category.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchVendor && !matchCategory) return false;
    }
    if (activeFilter === 'attention') return q.attentionCount > 0;
    if (activeFilter === 'clear') return q.attentionCount === 0;
    return true;
  });

  const attentionCount = EXTENDED_MOCK_QUOTES.filter((q) => q.attentionCount > 0).length;
  const clearCount = EXTENDED_MOCK_QUOTES.filter((q) => q.attentionCount === 0).length;

  return (
    <View style={styles.screenWrapper}>
      {/* Stitch Top Header */}
      <StitchHeader title="Quotes" />

      <Screen scrollable withAmbientBackground={false} contentContainerStyle={styles.container}>
        {/* Top Header Section */}
        <View style={styles.topSection}>
          <View style={styles.diagnosticRow}>
            <AppText variant="labelSm" color={Colors.secondary} style={styles.vaultTag}>
              DIAGNOSTIC VAULT
            </AppText>
            <View style={styles.aiCalibratedBadge}>
              <View style={styles.shieldMini} />
              <AppText variant="labelSm" color={Colors.secondaryText}>
                AI Calibrated
              </AppText>
            </View>
          </View>

          <AppText variant="display" color={Colors.primaryText} style={styles.mainTitle}>
            {EXTENDED_MOCK_QUOTES.length} audited estimates
          </AppText>

          {/* Search Input Bar */}
          <View style={styles.searchBar}>
            <AppText variant="bodySm" color={Colors.tertiaryText}>
              🔍
            </AppText>
            <TextInput
              placeholder="Search by vendor, vehicle, or date..."
              placeholderTextColor={Colors.tertiaryText}
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInput}
            />
          </View>

          {/* Segmented Filter Control */}
          <View style={styles.segmentContainer}>
            <Pressable
              onPress={() => setActiveFilter('all')}
              style={[
                styles.segmentItem,
                activeFilter === 'all' && styles.segmentItemActive,
              ]}
            >
              <AppText
                variant="bodySm"
                color={activeFilter === 'all' ? Colors.primaryText : Colors.secondaryText}
                style={styles.segmentText}
              >
                All ({EXTENDED_MOCK_QUOTES.length})
              </AppText>
            </Pressable>

            <Pressable
              onPress={() => setActiveFilter('attention')}
              style={[
                styles.segmentItem,
                activeFilter === 'attention' && styles.segmentItemActive,
              ]}
            >
              <AppText
                variant="bodySm"
                color={activeFilter === 'attention' ? Colors.semantic.review : Colors.secondaryText}
                style={styles.segmentText}
              >
                Needs Attention ({attentionCount})
              </AppText>
            </Pressable>

            <Pressable
              onPress={() => setActiveFilter('clear')}
              style={[
                styles.segmentItem,
                activeFilter === 'clear' && styles.segmentItemActive,
              ]}
            >
              <AppText
                variant="bodySm"
                color={activeFilter === 'clear' ? Colors.semantic.clear : Colors.secondaryText}
                style={styles.segmentText}
              >
                All Clear ({clearCount})
              </AppText>
            </Pressable>
          </View>
        </View>

        {/* Ledger Rows Card */}
        <View style={styles.ledgerCard}>
          {filteredQuotes.map((quote, idx) => (
            <StitchQuoteRow
              key={quote.id}
              quote={quote}
              subtitle={
                quote.id === 'quote-1'
                  ? 'Sedan 40,000 km Service · 2 days ago'
                  : quote.id === 'quote-2'
                  ? 'AC Compressor & Refrigerant · 5 days ago'
                  : undefined
              }
              markupRisk={quote.notes?.includes('markup') || quote.notes?.includes('premium') ? quote.notes : undefined}
              onPress={() => handleQuotePress(quote.id)}
              isLast={idx === filteredQuotes.length - 1}
            />
          ))}
        </View>

        {/* Discrepancies Summary Callout Banner */}
        <View style={styles.summaryCallout}>
          <View style={styles.sparkleIcon}>
            <AppText variant="body" color={Colors.secondary}>
              📈
            </AppText>
          </View>
          <View style={styles.calloutTexts}>
            <AppText variant="titleMd" color={Colors.primaryText} style={styles.calloutTitle}>
              Total Discrepancies Caught
            </AppText>
            <AppText variant="bodySm" color={Colors.secondaryText}>
              Potential savings across audits:{' '}
              <AppText variant="labelMd" color={Colors.primaryText}>
                ₹8,750
              </AppText>
            </AppText>
          </View>
        </View>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 110,
  },
  topSection: {
    paddingTop: 6,
    marginBottom: 14,
  },
  diagnosticRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  vaultTag: {
    letterSpacing: 0.8,
  },
  aiCalibratedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.surfaceContainer,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radii.pill,
  },
  shieldMini: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0D9488',
  },
  mainTitle: {
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 8,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 13.5,
    color: Colors.primaryText,
    padding: 0,
  },
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.surfaceContainer,
    borderRadius: Radii.medium,
    padding: 3,
  },
  segmentItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: Radii.small,
  },
  segmentItemActive: {
    backgroundColor: Colors.surfaceContainerLowest,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  segmentText: {
    fontSize: 12,
    fontWeight: '600',
  },
  ledgerCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 16,
  },
  summaryCallout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.large,
    padding: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.04)',
  },
  sparkleIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.secondaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutTexts: {
    flex: 1,
  },
  calloutTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import { Screen, AppText } from '@/components/ui';
import { StitchHeader } from '@/components/common/StitchHeader';
import { StitchScanCard } from '@/components/ui/StitchScanCard';
import { StitchQuoteRow } from '@/components/quote/StitchQuoteRow';

export default function HomeScreen() {
  const router = useRouter();

  const handleScanPress = () => {
    router.push('/(tabs)/scan');
  };

  const handleUploadPress = () => {
    router.push('/(tabs)/scan');
  };

  const handleTrySamplePress = () => {
    router.push({
      pathname: '/quotes/[quoteId]',
      params: { quoteId: 'quote-1' },
    });
  };

  const handleQuotePress = (quoteId: string) => {
    router.push({
      pathname: '/quotes/[quoteId]',
      params: { quoteId },
    });
  };

  const recentQuotes = MOCK_QUOTES.slice(0, 3);

  return (
    <View style={styles.screenWrapper}>
      {/* Stitch Top Header */}
      <StitchHeader title="Home" />

      <Screen scrollable withAmbientBackground={false} contentContainerStyle={styles.container}>
        {/* Top Editorial Context Header */}
        <View style={styles.contextHeader}>
          <View style={styles.dateBadgeRow}>
            <AppText variant="labelSm" color={Colors.secondaryText} style={styles.dateLabel}>
              THURSDAY, OCT 24
            </AppText>
            <View style={styles.engineBadge}>
              <View style={styles.enginePulseDot} />
              <AppText variant="labelSm" color={Colors.secondaryText}>
                Auditor Engine v2.4
              </AppText>
            </View>
          </View>

          <AppText variant="display" color={Colors.primaryText} style={styles.headline}>
            Understand before you approve.
          </AppText>
          <AppText variant="bodyMd" color={Colors.secondaryText} style={styles.supportCopy}>
            Snap a quote and find out what deserves your attention.
          </AppText>
        </View>

        {/* Hardware-inspired Tactile Scan Card */}
        <StitchScanCard
          onScanPress={handleScanPress}
          onUploadPdfPress={handleUploadPress}
          onTrySamplePress={handleTrySamplePress}
        />

        {/* Recent Quotes Ledger Section */}
        <View style={styles.ledgerSection}>
          <View style={styles.ledgerHeader}>
            <AppText variant="labelMd" color={Colors.secondaryText} style={styles.ledgerTitle}>
              RECENT QUOTES
            </AppText>
            <AppText variant="labelSm" color={Colors.outline}>
              {recentQuotes.length} audited
            </AppText>
          </View>

          {/* Editorial Inset Rows Container */}
          <View style={styles.ledgerCard}>
            {recentQuotes.map((quote, idx) => (
              <StitchQuoteRow
                key={quote.id}
                quote={quote}
                onPress={() => handleQuotePress(quote.id)}
                isLast={idx === recentQuotes.length - 1}
              />
            ))}
          </View>
        </View>

        {/* Auditor Guarantee Banner */}
        <View style={styles.guaranteeBanner}>
          <View style={styles.shieldIcon}>
            <AppText variant="caption" color={Colors.secondary}>
              🛡️
            </AppText>
          </View>
          <AppText variant="bodySm" color={Colors.secondaryText} style={styles.guaranteeText}>
            QuoteLens automatically verifies fair market rates, identifies hidden labor charges, and checks for warranty omissions across contractor estimates.
          </AppText>
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
  contextHeader: {
    paddingTop: 8,
  },
  dateBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dateLabel: {
    letterSpacing: 0.8,
  },
  engineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: Colors.surfaceContainer,
    borderRadius: Radii.pill,
  },
  enginePulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.secondary,
  },
  headline: {
    marginBottom: 6,
  },
  supportCopy: {
    lineHeight: 20,
    maxWidth: '92%',
  },
  ledgerSection: {
    marginTop: 8,
    marginBottom: 16,
  },
  ledgerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 8,
    paddingHorizontal: 2,
  },
  ledgerTitle: {
    fontWeight: '700',
  },
  ledgerCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  guaranteeBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.large,
    padding: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.04)',
  },
  shieldIcon: {
    marginTop: 2,
  },
  guaranteeText: {
    flex: 1,
    lineHeight: 18,
    fontSize: 12,
  },
});

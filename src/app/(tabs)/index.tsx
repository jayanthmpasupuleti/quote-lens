import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import {
  Screen,
  AppText,
  PrimaryButton,
  SecondaryButton,
  SectionHeader,
  Card,
} from '@/components/ui';
import { QuoteCard } from '@/components/quote';

export default function HomeScreen() {
  const router = useRouter();

  const handleScanPress = () => {
    router.push('/(tabs)/scan');
  };

  const handleUploadPress = () => {
    router.push('/(tabs)/scan');
  };

  const handleQuotePress = (quoteId: string) => {
    router.push({
      pathname: '/quotes/[quoteId]',
      params: { quoteId },
    });
  };

  const handleViewAllQuotes = () => {
    router.push('/(tabs)/quotes');
  };

  const recentQuotes = MOCK_QUOTES.slice(0, 3);

  return (
    <Screen scrollable>
      {/* Brand Header */}
      <View style={styles.header}>
        <View>
          <AppText variant="label" color={Colors.secondaryText} style={styles.brandSubtitle}>
            QUOTELENS
          </AppText>
          <AppText variant="title" color={Colors.primaryText}>
            Good afternoon 👋
          </AppText>
        </View>
      </View>

      {/* Hero Banner Card */}
      <Card style={styles.heroCard}>
        <View style={styles.heroBadge}>
          <AppText variant="label" color={Colors.semantic.info}>
            SMART SERVICE ANALYSIS
          </AppText>
        </View>
        <AppText variant="largeTitle" color={Colors.primaryText} style={styles.heroHeadline}>
          Understand before you approve.
        </AppText>
        <AppText variant="body" color={Colors.secondaryText} style={styles.heroSupport}>
          Snap a quote and find out what deserves your attention.
        </AppText>

        <View style={styles.actionRow}>
          <PrimaryButton
            title="Scan a Quote"
            onPress={handleScanPress}
            style={styles.primaryAction}
            accessibilityHint="Navigates to quote scanner"
          />
          <SecondaryButton
            title="Upload a PDF"
            onPress={handleUploadPress}
            style={styles.secondaryAction}
            accessibilityHint="Uploads a PDF quotation file"
          />
        </View>
      </Card>

      {/* Recent Quotes Section */}
      <View style={styles.section}>
        <SectionHeader
          title="Recent Quotes"
          actionText="View all"
          onActionPress={handleViewAllQuotes}
        />
        {recentQuotes.map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote}
            onPress={() => handleQuotePress(quote.id)}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  brandSubtitle: {
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  heroCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.xl,
    marginBottom: Spacing.xxl,
  },
  heroBadge: {
    marginBottom: Spacing.xs,
  },
  heroHeadline: {
    marginBottom: Spacing.xs,
  },
  heroSupport: {
    marginBottom: Spacing.xl,
  },
  actionRow: {
    flexDirection: 'column',
    gap: Spacing.xs,
  },
  primaryAction: {
    width: '100%',
  },
  secondaryAction: {
    width: '100%',
  },
  section: {
    marginTop: Spacing.xs,
  },
});

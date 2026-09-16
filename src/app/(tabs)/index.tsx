import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import {
  Screen,
  AppText,
  PrimaryCTA,
  SecondaryAction,
  SectionHeader,
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

  const handleViewAllQuotes = () => {
    router.push('/(tabs)/quotes');
  };

  const recentQuotes = MOCK_QUOTES.slice(0, 3);

  return (
    <Screen scrollable withAmbientBackground>
      {/* Small Greeting & Header Bar */}
      <View style={styles.header}>
        <View>
          <AppText variant="caption" color={Colors.secondaryText} style={styles.greeting}>
            Good afternoon 👋
          </AppText>
          <AppText variant="largeTitle" color={Colors.primaryText} style={styles.headline}>
            Understand{'\n'}before you approve.
          </AppText>
          <AppText variant="body" color={Colors.secondaryText} style={styles.supportCopy}>
            Snap a quote and find out what deserves your attention.
          </AppText>
        </View>

        {/* User profile avatar pill */}
        <View style={styles.avatarButton}>
          <AppText variant="caption" color={Colors.secondaryText}>
            👤
          </AppText>
        </View>
      </View>

      {/* Hero Action: Large Premium Dark Liquid Glass Scan Card */}
      <View style={styles.heroSection}>
        <PrimaryCTA
          title="Scan a Quote"
          onPress={handleScanPress}
          accessibilityHint="Scans a physical or printed quotation"
        />

        {/* Split Secondary Actions: Upload PDF & Try a Sample */}
        <View style={styles.secondaryRow}>
          <SecondaryAction
            title="Upload PDF"
            iconName="upload"
            onPress={handleUploadPress}
            accessibilityHint="Uploads a PDF quotation file"
          />
          <SecondaryAction
            title="Try a Sample"
            iconName="sample"
            onPress={handleTrySamplePress}
            accessibilityHint="Inspects an example quotation"
          />
        </View>
      </View>

      {/* Recent Quotes Section */}
      <View style={styles.section}>
        <SectionHeader
          title="Recent Quotes"
          actionText="See all"
          onActionPress={handleViewAllQuotes}
          style={styles.sectionHeader}
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
    alignItems: 'flex-start',
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.md,
  },
  greeting: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    color: '#4B5563',
  },
  headline: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: -0.4,
  },
  supportCopy: {
    fontSize: 14.5,
    lineHeight: 20,
    maxWidth: 290,
    color: Colors.secondaryText,
  },
  avatarButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.glassSurfaceHigh,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  heroSection: {
    marginVertical: Spacing.md,
    gap: Spacing.sm,
  },
  secondaryRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  section: {
    marginTop: Spacing.lg,
  },
  sectionHeader: {
    marginBottom: Spacing.sm + 2,
  },
});

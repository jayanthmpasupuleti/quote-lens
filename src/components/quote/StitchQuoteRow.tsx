import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Colors, Radii } from '@/theme';
import { Quote } from '@/types/quote';
import { formatINR } from '@/utils/currency';
import { AppText } from '../ui/AppText';

export interface StitchQuoteRowProps {
  quote: Quote;
  onPress?: () => void;
  subtitle?: string;
  markupRisk?: string;
  isLast?: boolean;
}

/**
 * Editorial Inset Row from Stitch:
 * Left: Vendor Name + arrow, Category · Date, and Semantic Pill
 * Right: Headline Price (Newsreader font) + Item Count or Markup tag
 */
export const StitchQuoteRow: React.FC<StitchQuoteRowProps> = ({
  quote,
  onPress,
  subtitle,
  markupRisk,
  isLast = false,
}) => {
  const getPillData = () => {
    if (quote.attentionCount === 0) {
      return {
        bg: Colors.semanticPill.clearBg,
        text: Colors.semanticPill.clearText,
        dot: Colors.semanticPill.clearDot,
        label: 'All clear',
      };
    }
    if (quote.attentionCount >= 3) {
      return {
        bg: Colors.semanticPill.reviewBg,
        text: Colors.semanticPill.reviewText,
        dot: Colors.semanticPill.reviewDot,
        label: `${quote.attentionCount} need attention`,
      };
    }
    return {
      bg: Colors.semanticPill.askBg,
      text: Colors.semanticPill.askText,
      dot: Colors.semanticPill.askDot,
      label: `${quote.attentionCount} need attention`,
    };
  };

  const pill = getPillData();

  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
        accessibilityRole="button"
        accessibilityLabel={`Quote from ${quote.vendor.name}, ${formatINR(quote.totalAmount)}`}
      >
        <View style={styles.leftCol}>
          <View style={styles.vendorRow}>
            <AppText variant="titleMd" color={Colors.primaryText} style={styles.vendorName}>
              {quote.vendor.name}
            </AppText>
            <AppText variant="caption" color={Colors.tertiaryText} style={styles.arrowIcon}>
              →
            </AppText>
          </View>

          <AppText variant="bodySm" color={Colors.secondaryText} style={styles.categoryLine}>
            {subtitle || `${quote.category} · ${quote.date}`}
          </AppText>

          {/* Semantic Status Pill */}
          <View style={[styles.pillContainer, { backgroundColor: pill.bg }]}>
            <View style={[styles.pillDot, { backgroundColor: pill.dot }]} />
            <AppText variant="labelSm" color={pill.text} style={styles.pillText}>
              {pill.label}
            </AppText>
          </View>
        </View>

        <View style={styles.rightCol}>
          <AppText variant="headlineMd" color={Colors.primaryText} style={styles.amount}>
            {formatINR(quote.totalAmount)}
          </AppText>
          {markupRisk ? (
            <AppText variant="labelSm" color={Colors.semantic.review} style={styles.markupText}>
              {markupRisk}
            </AppText>
          ) : (
            <AppText variant="labelSm" color={Colors.tertiaryText} style={styles.itemsCount}>
              {quote.itemsCount || 8} items
            </AppText>
          )}
        </View>
      </Pressable>
      {!isLast && <View style={styles.divider} />}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: Colors.surfaceContainerLowest,
  },
  rowPressed: {
    backgroundColor: Colors.surfaceContainerLow,
  },
  leftCol: {
    flex: 1,
    marginRight: 12,
  },
  vendorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  vendorName: {
    fontWeight: '700',
  },
  arrowIcon: {
    fontSize: 13,
    color: '#94A3B8',
  },
  categoryLine: {
    fontSize: 12.5,
    marginBottom: 6,
  },
  pillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radii.pill,
    gap: 5,
  },
  pillDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  pillText: {
    fontSize: 11,
    fontWeight: '600',
  },
  rightCol: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  amount: {
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  itemsCount: {
    marginTop: 2,
  },
  markupText: {
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.surfaceContainer,
    marginHorizontal: 16,
  },
});

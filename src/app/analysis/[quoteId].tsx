import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import { formatINR } from '@/utils/currency';
import { Screen, AppText } from '@/components/ui';

export default function QuoteAnalysisScreen() {
  const router = useRouter();
  const { quoteId } = useLocalSearchParams<{ quoteId: string }>();

  const quote = MOCK_QUOTES.find((q) => q.id === quoteId) || MOCK_QUOTES[0];

  return (
    <View style={styles.screenWrapper}>
      {/* Top App Bar */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <AppText variant="titleLg" color={Colors.primaryText}>
            ‹
          </AppText>
          <AppText variant="titleMd" color={Colors.primaryText}>
            Quote Audit Detail
          </AppText>
        </Pressable>
        <View style={styles.headerSearchButton}>
          <AppText variant="bodySm" color={Colors.primaryText}>
            🔍
          </AppText>
        </View>
      </View>

      <Screen scrollable withAmbientBackground={false} contentContainerStyle={styles.container}>
        {/* Verification Status Banner */}
        <View style={styles.auditMetaRow}>
          <View style={styles.verifiedBadge}>
            <View style={styles.blueDot} />
            <AppText variant="labelSm" color={Colors.secondary}>
              VERIFIED OCR AUDIT
            </AppText>
          </View>
          <AppText variant="labelSm" color={Colors.secondaryText}>
            Estimate #QT-9921 · OCT 22
          </AppText>
        </View>

        {/* Vendor Header */}
        <View style={styles.vendorHeader}>
          <AppText variant="headlineLg" color={Colors.primaryText} style={styles.vendorTitle}>
            {quote.vendor.name}
          </AppText>
          <AppText variant="bodySm" color={Colors.secondaryText}>
            Comprehensive 40,000 km Service · Sedan Class B
          </AppText>
        </View>

        {/* Amount & Attention Pill */}
        <View style={styles.amountRow}>
          <View>
            <AppText variant="labelSm" color={Colors.secondaryText}>
              ESTIMATED TOTAL
            </AppText>
            <View style={styles.priceWithCurrency}>
              <AppText variant="display" color={Colors.primaryText} style={styles.priceNumber}>
                {formatINR(quote.totalAmount)}
              </AppText>
              <AppText variant="labelSm" color={Colors.tertiaryText} style={styles.currencyTag}>
                INR
              </AppText>
            </View>
          </View>

          <View style={styles.attentionPill}>
            <AppText variant="labelSm" color="#DC2626">
              ! {quote.attentionCount} need attention
            </AppText>
            <AppText variant="labelSm" color={Colors.tertiaryText}>
              8 audited line items
            </AppText>
          </View>
        </View>

        {/* Diagnostic Composition Bar (Red, Orange, Green) */}
        <View style={styles.compositionCard}>
          <View style={styles.compositionHeader}>
            <AppText variant="labelSm" color={Colors.secondaryText}>
              Diagnostic Composition
            </AppText>
            <AppText variant="labelSm" color={Colors.semantic.clear}>
              62.5% Clear
            </AppText>
          </View>

          <View style={styles.multiColorBar}>
            <View style={[styles.barSegment, { flex: 0.25, backgroundColor: '#EF4444' }]} />
            <View style={[styles.barSegment, { flex: 0.25, backgroundColor: '#F59E0B' }]} />
            <View style={[styles.barSegment, { flex: 0.5, backgroundColor: '#10B981' }]} />
          </View>

          <View style={styles.compositionLegend}>
            <AppText variant="labelSm" color="#DC2626">
              ■ 1 Review (₹7,200)
            </AppText>
            <AppText variant="labelSm" color="#D97706">
              ■ 2 Ask (₹5,900)
            </AppText>
            <AppText variant="labelSm" color="#059669">
              ■ 5 Clear (₹11,750)
            </AppText>
          </View>
        </View>

        {/* Source Invoice OCR Scan Link */}
        <View style={styles.sourceOcrCard}>
          <View style={styles.ocrThumb}>
            <AppText variant="caption" color={Colors.secondary}>
              📄
            </AppText>
          </View>
          <View style={styles.ocrTexts}>
            <AppText variant="titleMd" color={Colors.primaryText}>
              Source Invoice OCR
            </AppText>
            <AppText variant="bodySm" color={Colors.secondaryText}>
              Page 1 of 1 · Parsed via QuoteLens OCR
            </AppText>
          </View>
          <View style={styles.viewScanBtn}>
            <AppText variant="labelSm" color={Colors.primaryText}>
              View Scan
            </AppText>
          </View>
        </View>

        {/* Itemized Audit Section */}
        <View style={styles.itemizedSectionHeader}>
          <AppText variant="titleMd" color={Colors.primaryText}>
            Itemized Audit
          </AppText>
          <AppText variant="labelSm" color={Colors.outline}>
            STRICT OEM SCHEMA
          </AppText>
        </View>

        {/* Card 1: Review Needed */}
        <Pressable
          onPress={() =>
            router.push({
              pathname: '/analysis/item/[itemId]',
              params: { itemId: 'li-1' },
            })
          }
          style={styles.auditItemCard}
        >
          <View style={styles.itemCardHeader}>
            <View style={styles.reviewFlag}>
              <AppText variant="labelSm" color="#DC2626">
                ! REVIEW · Line 04
              </AppText>
            </View>
            <View style={styles.itemPriceCol}>
              <AppText variant="titleLg" color={Colors.primaryText} style={styles.itemPrice}>
                ₹7,200
              </AppText>
              <AppText variant="labelSm" color={Colors.tertiaryText}>
                Parts & Labor
              </AppText>
            </View>
          </View>

          <AppText variant="titleLg" color={Colors.primaryText} style={styles.itemName}>
            Brake Assembly (Front & Rear)
          </AppText>

          <View style={styles.alertBox}>
            <AppText variant="bodySm" color={Colors.secondaryText}>
              ⚠️ The quote doesn't specify the manufacturer, OEM status, or part number. High markup risk detected.
            </AppText>
          </View>

          <View style={styles.tapActionBanner}>
            <AppText variant="labelSm" color="#B91C1C">
              Tap to view 3 questions to ask →
            </AppText>
          </View>
        </Pressable>

        {/* Card 2: Question Recommended */}
        <Pressable
          onPress={() =>
            router.push({
              pathname: '/analysis/item/[itemId]',
              params: { itemId: 'li-2' },
            })
          }
          style={styles.auditItemCard}
        >
          <View style={styles.itemCardHeader}>
            <View style={styles.askFlag}>
              <AppText variant="labelSm" color="#D97706">
                ? ASK · Line 06
              </AppText>
            </View>
            <View style={styles.itemPriceCol}>
              <AppText variant="titleLg" color={Colors.primaryText} style={styles.itemPrice}>
                ₹3,500
              </AppText>
              <AppText variant="labelSm" color={Colors.tertiaryText}>
                Add-on Labor
              </AppText>
            </View>
          </View>

          <AppText variant="titleLg" color={Colors.primaryText} style={styles.itemName}>
            Labor - Engine Decarb & Flush
          </AppText>

          <View style={styles.alertBox}>
            <AppText variant="bodySm" color={Colors.secondaryText}>
              ℹ️ The quote doesn't clearly explain what labor includes or if routine maintenance overlaps with standard service schedule.
            </AppText>
          </View>

          <View style={[styles.tapActionBanner, { backgroundColor: '#FEF3C7' }]}>
            <AppText variant="labelSm" color="#92400E">
              Ask if standard service covers this →
            </AppText>
          </View>
        </Pressable>

        {/* Card 3: Clear Item */}
        <View style={styles.auditItemCard}>
          <View style={styles.itemCardHeader}>
            <View style={styles.clearFlag}>
              <AppText variant="labelSm" color="#166534">
                ✓ CLEAR · Line 01
              </AppText>
            </View>
            <View style={styles.itemPriceCol}>
              <AppText variant="titleLg" color={Colors.primaryText} style={styles.itemPrice}>
                ₹3,200
              </AppText>
              <AppText variant="labelSm" color={Colors.tertiaryText}>
                ₹800 / Liter
              </AppText>
            </View>
          </View>

          <AppText variant="titleLg" color={Colors.primaryText} style={styles.itemName}>
            Engine Oil (Synthetic 5W-30, 4.2L)
          </AppText>

          <View style={[styles.alertBox, { backgroundColor: '#F0FDF4' }]}>
            <AppText variant="bodySm" color="#166534">
              ✓ Description, volume, viscosity grade, and brand match OEM specifications completely.
            </AppText>
          </View>
        </View>

        {/* Dealership Info Badge */}
        <View style={styles.dealershipBadge}>
          <View style={styles.locationPinOrb}>
            <AppText variant="caption" color="#FFFFFF">
              📍
            </AppText>
          </View>
          <View style={styles.dealershipTexts}>
            <AppText variant="titleMd" color={Colors.primaryText}>
              ABC Motors Service Bay #4
            </AppText>
            <AppText variant="bodySm" color={Colors.secondaryText}>
              GSTIN verified · Authorized multi-brand repair
            </AppText>
          </View>
        </View>

        {/* Dual Bottom Action Footer */}
        <View style={styles.actionFooterRow}>
          <View style={styles.secondaryFooterBtn}>
            <AppText variant="titleMd" color={Colors.primaryText}>
              📋 Question Sheet
            </AppText>
          </View>
          <View style={styles.primaryFooterBtn}>
            <AppText variant="titleMd" color="#FFFFFF">
              📤 Share Summary
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
  header: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: Colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  headerSearchButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 40,
  },
  auditMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.surfaceContainer,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radii.pill,
  },
  blueDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.secondary,
  },
  vendorHeader: {
    marginBottom: 12,
  },
  vendorTitle: {
    fontSize: 24,
    marginBottom: 2,
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
  },
  priceWithCurrency: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    marginTop: 2,
  },
  priceNumber: {
    fontSize: 28,
    fontWeight: '700',
  },
  currencyTag: {
    fontWeight: '600',
  },
  attentionPill: {
    alignItems: 'flex-end',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: Radii.medium,
    gap: 2,
  },
  compositionCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
  },
  compositionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  multiColorBar: {
    flexDirection: 'row',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  barSegment: {
    height: '100%',
  },
  compositionLegend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sourceOcrCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.large,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.04)',
    marginBottom: 16,
    gap: 10,
  },
  ocrThumb: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ocrTexts: {
    flex: 1,
  },
  viewScanBtn: {
    backgroundColor: Colors.surfaceContainer,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: Radii.small,
  },
  itemizedSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 10,
  },
  auditItemCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
  },
  itemCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  reviewFlag: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radii.pill,
  },
  askFlag: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radii.pill,
  },
  clearFlag: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radii.pill,
  },
  itemPriceCol: {
    alignItems: 'flex-end',
  },
  itemPrice: {
    fontWeight: '700',
  },
  itemName: {
    marginBottom: 8,
  },
  alertBox: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.medium,
    padding: 10,
    marginBottom: 8,
  },
  tapActionBanner: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: Radii.medium,
    alignItems: 'center',
  },
  dealershipBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.large,
    padding: 14,
    gap: 12,
    marginVertical: 8,
  },
  locationPinOrb: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dealershipTexts: {
    flex: 1,
  },
  actionFooterRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
    marginBottom: 20,
  },
  secondaryFooterBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 14,
    borderRadius: Radii.medium,
  },
  primaryFooterBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: Radii.medium,
  },
});

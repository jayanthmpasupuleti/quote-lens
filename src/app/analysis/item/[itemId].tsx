import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { MOCK_QUOTES } from '@/constants/mockData';
import { formatINR } from '@/utils/currency';
import { Screen, AppText } from '@/components/ui';

export default function ItemDetailModal() {
  const router = useRouter();
  const { itemId } = useLocalSearchParams<{ itemId: string }>();

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
        <View style={styles.headerRightActions}>
          <View style={styles.headerIconBtn}>
            <AppText variant="caption" color={Colors.primaryText}>
              🔖
            </AppText>
          </View>
          <View style={styles.headerIconBtn}>
            <AppText variant="caption" color={Colors.primaryText}>
              📤
            </AppText>
          </View>
        </View>
      </View>

      <Screen scrollable withAmbientBackground={false} contentContainerStyle={styles.container}>
        {/* Audit Diagnostic Tag */}
        <AppText variant="labelSm" color={Colors.outline} style={styles.diagnosticTag}>
          AUDIT DIAGNOSTIC · [LI-04] #QT-9921
        </AppText>

        {/* Item Title & Review Flag Card */}
        <View style={styles.heroCard}>
          <View style={styles.cardHeaderRow}>
            <AppText variant="labelSm" color={Colors.secondary}>
              LINE 04 OF 08
            </AppText>
            <View style={styles.reviewFlag}>
              <AppText variant="labelSm" color="#DC2626">
                ! REVIEW FLAG
              </AppText>
            </View>
          </View>

          <AppText variant="display" color={Colors.primaryText} style={styles.itemName}>
            {item.name}
          </AppText>
          <AppText variant="bodySm" color={Colors.secondaryText} style={styles.vendorSub}>
            Parts & Labor · ABC Motors Estimate #QT-9921
          </AppText>

          {/* Amount Box */}
          <View style={styles.amountBox}>
            <View>
              <AppText variant="labelSm" color={Colors.tertiaryText}>
                QUOTED AMOUNT
              </AppText>
              <AppText variant="display" color={Colors.primaryText} style={styles.amountText}>
                {formatINR(item.totalPrice)}
              </AppText>
            </View>
            <View style={styles.markupRiskTag}>
              <AppText variant="labelSm" color="#DC2626">
                MARKUP RISK
              </AppText>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                Unitemized Bundled Tier
              </AppText>
            </View>
          </View>
        </View>

        {/* OCR Verified Extraction Box */}
        <View style={styles.ocrBox}>
          <View style={styles.ocrHeader}>
            <AppText variant="labelSm" color={Colors.secondary}>
              ⛶ OCR VERIFIED EXTRACTION
            </AppText>
            <AppText variant="labelSm" color={Colors.outline}>
              Confidence: 98.4%
            </AppText>
          </View>
          <View style={styles.ocrContentSnippet}>
            <AppText variant="labelSm" color={Colors.secondaryText}>
              04. BRAKE ASSY FR/RR REPLACEMENT COM...{'\n'}
              Qty: 1 SET | Rate: ₹7,200.00
            </AppText>
          </View>
        </View>

        {/* Section: Why this needs attention */}
        <View style={styles.attentionSection}>
          <View style={styles.attentionTitleRow}>
            <AppText variant="titleMd" color="#DC2626">
              ⚠️
            </AppText>
            <AppText variant="titleMd" color={Colors.primaryText} style={styles.sectionTitle}>
              Why this needs attention
            </AppText>
          </View>
          <AppText variant="bodySm" color={Colors.secondaryText} style={styles.reasonBody}>
            The quote doesn't specify the manufacturer, OEM status, or specific part number. High markup risk detected with unspecified generic components.
          </AppText>

          <View style={styles.benchmarkNote}>
            <AppText variant="bodySm" color={Colors.secondaryText} style={styles.benchmarkText}>
              💡 Workshop estimates in this region typically show a 40–55% price discrepancy between third-party unbranded friction liners and authorized OEM parts.
            </AppText>
          </View>
        </View>

        {/* Section: Missing Information */}
        <View style={styles.missingSection}>
          <View style={styles.missingHeaderRow}>
            <View style={styles.missingTitleLeft}>
              <AppText variant="titleMd" color={Colors.secondary}>
                📋
              </AppText>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Missing Information
              </AppText>
            </View>
            <View style={styles.omissionBadge}>
              <AppText variant="labelSm" color="#DC2626">
                4 Omissions
              </AppText>
            </View>
          </View>

          <View style={styles.missingList}>
            <View style={styles.missingItem}>
              <View style={styles.missingItemRow}>
                <AppText variant="titleMd" color={Colors.primaryText}>
                  Manufacturer
                </AppText>
                <View style={styles.unspecifiedTag}>
                  <AppText variant="labelSm" color="#DC2626">
                    • Unspecified
                  </AppText>
                </View>
              </View>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                OEM vs aftermarket origin is undisclosed.
              </AppText>
            </View>

            <View style={styles.missingDivider} />

            <View style={styles.missingItem}>
              <View style={styles.missingItemRow}>
                <AppText variant="titleMd" color={Colors.primaryText}>
                  Part Number
                </AppText>
                <View style={styles.unspecifiedTag}>
                  <AppText variant="labelSm" color="#DC2626">
                    • Missing
                  </AppText>
                </View>
              </View>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                No manufacturer catalog reference or VIN match.
              </AppText>
            </View>

            <View style={styles.missingDivider} />

            <View style={styles.missingItem}>
              <View style={styles.missingItemRow}>
                <AppText variant="titleMd" color={Colors.primaryText}>
                  Warranty Coverage
                </AppText>
                <View style={[styles.unspecifiedTag, { backgroundColor: Colors.surfaceContainer }]}>
                  <AppText variant="labelSm" color={Colors.secondaryText}>
                    NOT DOCUMENTED
                  </AppText>
                </View>
              </View>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                No replacement guarantee stated on service slip.
              </AppText>
            </View>
          </View>
        </View>

        {/* Section: Questions to Ask Contractor */}
        <View style={styles.questionsSection}>
          <View style={styles.questionsHeaderRow}>
            <View style={styles.questionsLeft}>
              <AppText variant="titleMd" color={Colors.secondary}>
                💬
              </AppText>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Questions to Ask Contractor
              </AppText>
            </View>
            <AppText variant="labelSm" color={Colors.outline}>
              TAP TO COPY
            </AppText>
          </View>

          {/* Question 1 */}
          <View style={styles.questionCard}>
            <View style={styles.questionCardTop}>
              <AppText variant="titleMd" color={Colors.primaryText} style={styles.questionQuote}>
                "Which exact brand and part number will be installed?"
              </AppText>
              <Pressable
                onPress={() => Alert.alert('Copied', 'Question copied to clipboard.')}
                style={styles.copyBtn}
              >
                <AppText variant="labelSm" color={Colors.secondaryText}>
                  📋 Copy
                </AppText>
              </Pressable>
            </View>
            <AppText variant="bodySm" color={Colors.secondaryText} style={styles.rationaleText}>
              <AppText variant="labelSm" color={Colors.primaryText}>
                Rationale:{' '}
              </AppText>
              Ensures you are not paying OEM rates for generic aftermarket friction pads.
            </AppText>
          </View>

          {/* Question 2 */}
          <View style={styles.questionCard}>
            <View style={styles.questionCardTop}>
              <AppText variant="titleMd" color={Colors.primaryText} style={styles.questionQuote}>
                "Does this ₹7,200 total include rotor resurfacing and labor, or just pads?"
              </AppText>
              <Pressable
                onPress={() => Alert.alert('Copied', 'Question copied to clipboard.')}
                style={styles.copyBtn}
              >
                <AppText variant="labelSm" color={Colors.secondaryText}>
                  📋 Copy
                </AppText>
              </Pressable>
            </View>
            <AppText variant="bodySm" color={Colors.secondaryText} style={styles.rationaleText}>
              <AppText variant="labelSm" color={Colors.primaryText}>
                Rationale:{' '}
              </AppText>
              Prevents surprise additional labor charges during vehicle collection.
            </AppText>
          </View>
        </View>

        {/* Market Baseline Callout */}
        <View style={styles.baselineCallout}>
          <View style={styles.baselineIcon}>
            <AppText variant="body" color={Colors.secondary}>
              📊
            </AppText>
          </View>
          <View style={styles.baselineTexts}>
            <AppText variant="titleMd" color={Colors.primaryText}>
              Market Baseline
            </AppText>
            <AppText variant="bodySm" color={Colors.secondaryText}>
              Regional fair price: ₹4,800 – ₹5,900
            </AppText>
          </View>
          <AppText variant="labelSm" color="#DC2626" style={styles.overAvg}>
            +26% over avg
          </AppText>
        </View>

        {/* Dual Actions */}
        <View style={styles.actionFooterRow}>
          <Pressable
            onPress={() => Alert.alert('Copied', 'All questions copied.')}
            style={styles.secondaryFooterBtn}
          >
            <AppText variant="titleMd" color={Colors.primaryText}>
              📋 Copy All
            </AppText>
          </Pressable>
          <Pressable
            onPress={() => router.back()}
            style={styles.primaryFooterBtn}
          >
            <AppText variant="titleMd" color="#FFFFFF">
              ✓ Mark Clarified
            </AppText>
          </Pressable>
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
  headerRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerIconBtn: {
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
  diagnosticTag: {
    marginBottom: 8,
    letterSpacing: 0.6,
  },
  heroCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewFlag: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radii.pill,
  },
  itemName: {
    fontSize: 26,
    marginBottom: 4,
  },
  vendorSub: {
    marginBottom: 14,
  },
  amountBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.medium,
    padding: 14,
  },
  amountText: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 2,
  },
  markupRiskTag: {
    alignItems: 'flex-end',
    gap: 2,
  },
  ocrBox: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
  },
  ocrHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  ocrContentSnippet: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.medium,
    padding: 10,
  },
  attentionSection: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
  },
  attentionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: '700',
  },
  reasonBody: {
    lineHeight: 20,
    marginBottom: 12,
  },
  benchmarkNote: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.medium,
    padding: 12,
  },
  benchmarkText: {
    lineHeight: 19,
    fontSize: 12.5,
  },
  missingSection: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
  },
  missingHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  missingTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  omissionBadge: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radii.pill,
  },
  missingList: {
    gap: 10,
  },
  missingItem: {
    gap: 2,
  },
  missingItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unspecifiedTag: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: Radii.pill,
  },
  missingDivider: {
    height: 1,
    backgroundColor: Colors.surfaceContainer,
  },
  questionsSection: {
    marginBottom: 12,
  },
  questionsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 10,
    paddingHorizontal: 2,
  },
  questionsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  questionCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 10,
  },
  questionCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  questionQuote: {
    flex: 1,
    fontWeight: '600',
    lineHeight: 22,
  },
  copyBtn: {
    backgroundColor: Colors.surfaceContainer,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radii.small,
  },
  rationaleText: {
    lineHeight: 18,
    fontSize: 12.5,
  },
  baselineCallout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.large,
    padding: 14,
    gap: 10,
    marginBottom: 16,
  },
  baselineIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baselineTexts: {
    flex: 1,
  },
  overAvg: {
    fontWeight: '700',
  },
  actionFooterRow: {
    flexDirection: 'row',
    gap: 10,
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

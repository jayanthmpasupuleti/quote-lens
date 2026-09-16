import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Switch, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { APP_CONFIG } from '@/constants/config';
import { Screen, AppText } from '@/components/ui';
import { StitchHeader } from '@/components/common/StitchHeader';

export default function SettingsScreen() {
  const router = useRouter();

  // Settings state toggles matching Stitch design
  const [autoDetectVague, setAutoDetectVague] = useState(true);
  const [highlightFlushes, setHighlightFlushes] = useState(true);
  const [autoPurgeScans, setAutoPurgeScans] = useState(true);

  const handleAction = (title: string) => {
    Alert.alert(title, `${title} preference setting.`);
  };

  return (
    <View style={styles.screenWrapper}>
      {/* Stitch Top Header */}
      <StitchHeader title="Settings" />

      <Screen scrollable withAmbientBackground={false} contentContainerStyle={styles.container}>
        {/* Diagnostic Core Hero Card */}
        <View style={styles.coreCard}>
          <View style={styles.coreLeft}>
            <View style={styles.shieldOrb}>
              <AppText variant="titleLg" color={Colors.secondary}>
                🛡️
              </AppText>
            </View>
            <View>
              <AppText variant="titleMd" color={Colors.primaryText} style={styles.coreTitle}>
                Diagnostic Core
              </AppText>
              <View style={styles.calibratedRow}>
                <View style={styles.tealDot} />
                <AppText variant="labelSm" color="#0D9488">
                  OEM Engine Calibrated (India)
                </AppText>
              </View>
            </View>
          </View>

          <View style={styles.versionPill}>
            <AppText variant="labelSm" color={Colors.secondaryText}>
              INR · v2.4
            </AppText>
          </View>
        </View>

        {/* Section 1: AUDIT ENGINE PREFERENCES */}
        <View style={styles.sectionHeaderRow}>
          <AppText variant="labelSm" color={Colors.secondaryText} style={styles.sectionHeading}>
            AUDIT ENGINE PREFERENCES
          </AppText>
          <AppText variant="labelSm" color={Colors.secondary} style={styles.modeTag}>
            Precision Mode
          </AppText>
        </View>

        <View style={styles.groupedCard}>
          {/* Default Currency */}
          <Pressable
            onPress={() => handleAction('Default Currency')}
            style={styles.settingRow}
          >
            <View style={styles.settingIcon}>
              <AppText variant="caption" color={Colors.primaryText}>
                ₹
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Default Currency
              </AppText>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                Standard pricing unit for quotes
              </AppText>
            </View>
            <View style={styles.rightChevronRow}>
              <AppText variant="labelMd" color={Colors.secondary}>
                INR (₹)
              </AppText>
              <AppText variant="caption" color={Colors.tertiaryText}>
                ›
              </AppText>
            </View>
          </Pressable>

          <View style={styles.rowDivider} />

          {/* Audit Strictness */}
          <Pressable
            onPress={() => handleAction('Audit Strictness')}
            style={styles.settingRow}
          >
            <View style={styles.settingIcon}>
              <AppText variant="caption" color={Colors.primaryText}>
                ⚖️
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Audit Strictness
              </AppText>
              <AppText variant="bodySm" color={Colors.secondaryText} numberOfLines={1}>
                OEM ambiguities & unverified labor
              </AppText>
            </View>
            <View style={styles.rightChevronRow}>
              <View style={styles.highBadge}>
                <AppText variant="labelSm" color="#DC2626">
                  • High
                </AppText>
              </View>
              <AppText variant="caption" color={Colors.tertiaryText}>
                ›
              </AppText>
            </View>
          </Pressable>

          <View style={styles.rowDivider} />

          {/* Auto-Detect Vague Charges */}
          <View style={styles.settingRow}>
            <View style={styles.settingIcon}>
              <AppText variant="caption" color={Colors.primaryText}>
                📋
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Auto-Detect Vague Charges
              </AppText>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                Flags "misc shop supplies", "sundries"
              </AppText>
            </View>
            <Switch
              value={autoDetectVague}
              onValueChange={setAutoDetectVague}
              trackColor={{ false: Colors.surfaceContainerHigh, true: Colors.secondary }}
            />
          </View>

          <View style={styles.rowDivider} />

          {/* Highlight Add-on Flushes */}
          <View style={styles.settingRow}>
            <View style={styles.settingIcon}>
              <AppText variant="caption" color={Colors.primaryText}>
                💧
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Highlight Add-on Flushes
              </AppText>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                Catches injector, engine & AC flushes
              </AppText>
            </View>
            <Switch
              value={highlightFlushes}
              onValueChange={setHighlightFlushes}
              trackColor={{ false: Colors.surfaceContainerHigh, true: Colors.secondary }}
            />
          </View>
        </View>

        {/* Section 2: STORAGE & PRIVACY */}
        <View style={styles.sectionHeaderRow}>
          <AppText variant="labelSm" color={Colors.secondaryText} style={styles.sectionHeading}>
            STORAGE & PRIVACY
          </AppText>
        </View>

        <View style={styles.groupedCard}>
          {/* On-Device OCR Engine */}
          <View style={styles.settingRow}>
            <View style={[styles.settingIcon, { backgroundColor: Colors.primaryContainer }]}>
              <AppText variant="caption" color="#FFFFFF">
                🔒
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <View style={styles.neuralTagRow}>
                <AppText variant="titleMd" color={Colors.primaryText}>
                  On-Device OCR Engine
                </AppText>
                <View style={styles.neuralPill}>
                  <AppText variant="labelSm" color={Colors.secondaryText}>
                    Neural
                  </AppText>
                </View>
              </View>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                Isolated via Secure Enclave
              </AppText>
            </View>
            <View style={styles.activePill}>
              <View style={styles.blueDotMini} />
              <AppText variant="labelSm" color={Colors.secondary}>
                ACTIVE
              </AppText>
            </View>
          </View>

          <View style={styles.rowDivider} />

          {/* Auto-Purge Scans */}
          <View style={styles.settingRow}>
            <View style={styles.settingIcon}>
              <AppText variant="caption" color={Colors.primaryText}>
                🗑️
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Auto-Purge Scans
              </AppText>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                Permanently deletes cached images after 30 days
              </AppText>
            </View>
            <Switch
              value={autoPurgeScans}
              onValueChange={setAutoPurgeScans}
              trackColor={{ false: Colors.surfaceContainerHigh, true: Colors.secondary }}
            />
          </View>
        </View>

        {/* Section 3: ABOUT & SUPPORT */}
        <View style={styles.sectionHeaderRow}>
          <AppText variant="labelSm" color={Colors.secondaryText} style={styles.sectionHeading}>
            ABOUT & SUPPORT
          </AppText>
        </View>

        <View style={styles.groupedCard}>
          <Pressable onPress={() => handleAction('How QuoteLens Audits Work')} style={styles.settingRow}>
            <View style={styles.settingIcon}>
              <AppText variant="caption" color={Colors.primaryText}>
                📖
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <AppText variant="titleMd" color={Colors.primaryText}>
                How QuoteLens Audits Work
              </AppText>
              <AppText variant="bodySm" color={Colors.secondaryText}>
                Methodology & OEM reference benchmarks
              </AppText>
            </View>
            <AppText variant="caption" color={Colors.tertiaryText}>
              ›
            </AppText>
          </Pressable>

          <View style={styles.rowDivider} />

          <Pressable onPress={() => handleAction('Privacy Policy')} style={styles.settingRow}>
            <View style={styles.settingIcon}>
              <AppText variant="caption" color={Colors.primaryText}>
                🛡️
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Privacy Policy
              </AppText>
            </View>
            <AppText variant="caption" color={Colors.tertiaryText}>
              ›
            </AppText>
          </Pressable>

          <View style={styles.rowDivider} />

          <Pressable onPress={() => handleAction('Terms of Service')} style={styles.settingRow}>
            <View style={styles.settingIcon}>
              <AppText variant="caption" color={Colors.primaryText}>
                📜
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Terms of Service
              </AppText>
            </View>
            <AppText variant="caption" color={Colors.tertiaryText}>
              ›
            </AppText>
          </Pressable>

          <View style={styles.rowDivider} />

          <View style={styles.settingRow}>
            <View style={styles.settingIcon}>
              <AppText variant="caption" color={Colors.primaryText}>
                ℹ️
              </AppText>
            </View>
            <View style={styles.settingTextCol}>
              <AppText variant="titleMd" color={Colors.primaryText}>
                Version
              </AppText>
            </View>
            <AppText variant="labelSm" color={Colors.tertiaryText}>
              QuoteLens v2.4 (Build 468)
            </AppText>
          </View>
        </View>

        {/* Sync Audit Rulebook Bar */}
        <View style={styles.syncCard}>
          <View style={styles.syncTextCol}>
            <AppText variant="titleMd" color={Colors.primaryText}>
              Audit Rulebook Cache
            </AppText>
            <AppText variant="bodySm" color={Colors.secondaryText}>
              Last synced 2 hours ago with OEM Registry
            </AppText>
          </View>
          <Pressable
            onPress={() => Alert.alert('Synced', 'Audit rules up to date.')}
            style={styles.syncButton}
            accessibilityRole="button"
            accessibilityLabel="Sync Rulebook"
          >
            <AppText variant="labelMd" color="#FFFFFF">
              ⚡ Sync
            </AppText>
          </Pressable>
        </View>

        {/* Unfair Charges Blocked Callout Card */}
        <View style={styles.blockedCallout}>
          <View style={styles.blueShieldOrb}>
            <AppText variant="body" color="#FFFFFF">
              🛡️
            </AppText>
          </View>
          <View style={styles.blockedTexts}>
            <AppText variant="titleMd" color={Colors.primaryText} style={styles.blockedTitle}>
              14 Unfair Charges Blocked
            </AppText>
            <AppText variant="bodySm" color={Colors.secondaryText}>
              QuoteLens saved your fleet ₹18,450 this quarter across 6 dealership work orders.
            </AppText>
          </View>
        </View>

        {/* Bottom Air-Gapped Footer */}
        <View style={styles.footerBrand}>
          <AppText variant="labelSm" color={Colors.secondary} style={styles.footerBrandName}>
            ⛶ QuoteLens
          </AppText>
          <AppText variant="bodySm" color={Colors.secondaryText}>
            QuoteLens • Know before you pay
          </AppText>
          <AppText variant="labelSm" color={Colors.outline} style={styles.footerSecurity}>
            ENCRYPTED • ZERO TRACKERS • AIR-GAPPED OCR
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
    paddingBottom: 120,
  },
  coreCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  coreLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  shieldOrb: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.secondaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coreTitle: {
    fontWeight: '700',
    marginBottom: 2,
  },
  calibratedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  tealDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0D9488',
  },
  versionPill: {
    backgroundColor: Colors.surfaceContainer,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radii.pill,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 8,
    paddingHorizontal: 2,
  },
  sectionHeading: {
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  modeTag: {
    fontWeight: '600',
  },
  groupedCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 12,
  },
  settingIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingTextCol: {
    flex: 1,
  },
  rightChevronRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  highBadge: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radii.pill,
  },
  neuralTagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  neuralPill: {
    backgroundColor: Colors.surfaceContainer,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  activePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.surfaceContainer,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radii.pill,
  },
  blueDotMini: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.secondary,
  },
  rowDivider: {
    height: 1,
    backgroundColor: Colors.surfaceContainer,
    marginLeft: 58,
  },
  syncCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radii.large,
    padding: 14,
    marginTop: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  syncTextCol: {
    flex: 1,
    marginRight: 10,
  },
  syncButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: Radii.medium,
  },
  blockedCallout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.large,
    padding: 14,
    gap: 12,
    marginTop: 14,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.04)',
  },
  blueShieldOrb: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockedTexts: {
    flex: 1,
  },
  blockedTitle: {
    fontWeight: '700',
    marginBottom: 2,
  },
  footerBrand: {
    alignItems: 'center',
    paddingVertical: 24,
    gap: 4,
  },
  footerBrandName: {
    fontWeight: '700',
    fontSize: 14,
  },
  footerSecurity: {
    fontSize: 9.5,
    letterSpacing: 0.6,
    marginTop: 4,
  },
});

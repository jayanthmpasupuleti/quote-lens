import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { Screen, AppText } from '@/components/ui';
import { StitchHeader } from '@/components/common/StitchHeader';

export default function ScanScreen() {
  const router = useRouter();

  const handleOpenCamera = () => {
    router.push('/capture/camera');
  };

  const handleChoosePhotos = () => {
    router.push('/capture/review');
  };

  return (
    <View style={styles.screenWrapper}>
      {/* Stitch Top Header */}
      <StitchHeader
        title="Scan"
        showBack={false}
        rightAction={
          <View style={styles.headerSearchButton}>
            <AppText variant="caption" color={Colors.primaryText}>
              🔍
            </AppText>
          </View>
        }
      />

      <Screen scrollable withAmbientBackground={false} contentContainerStyle={styles.container}>
        {/* Status Pills */}
        <View style={styles.statusPillsRow}>
          <View style={styles.iconPill}>
            <AppText variant="caption" color={Colors.primaryText}>
              ⚡
            </AppText>
          </View>

          <View style={styles.autoCaptureBadge}>
            <View style={styles.blueDot} />
            <AppText variant="labelSm" color={Colors.secondaryText}>
              AUTO CAPTURE: ACTIVE
            </AppText>
          </View>

          <Pressable
            onPress={() => router.push('/(tabs)')}
            style={styles.iconPill}
            accessibilityRole="button"
            accessibilityLabel="Close scan"
          >
            <AppText variant="bodySm" color={Colors.secondaryText}>
              ✕
            </AppText>
          </Pressable>
        </View>

        {/* Headlines */}
        <View style={styles.titleSection}>
          <AppText variant="display" color={Colors.primaryText} align="center" style={styles.headline}>
            Scan a quote
          </AppText>
          <AppText variant="bodyMd" color={Colors.secondaryText} align="center" style={styles.subtitle}>
            Make sure the whole quote is visible and readable.
          </AppText>
        </View>

        {/* The Viewfinder Document Plate from Stitch */}
        <View style={styles.viewfinderCard}>
          {/* Top badges inside viewfinder */}
          <View style={styles.viewfinderTopBadges}>
            <View style={styles.estimateBadge}>
              <AppText variant="labelSm" color={Colors.secondary} style={styles.docIconMini}>
                📄
              </AppText>
              <AppText variant="labelSm" color={Colors.primaryText}>
                ABC MOTORS ESTIMATE
              </AppText>
            </View>

            <View style={styles.ocrBadge}>
              <AppText variant="labelSm" color={Colors.secondary}>
                98.4% OCR
              </AppText>
            </View>
          </View>

          {/* Document Preview Surface */}
          <View style={styles.documentSheet}>
            {/* White document sheet */}
            <View style={styles.mockInvoiceHeader}>
              <AppText variant="titleMd" color="#1E293B" style={styles.mockTitle}>
                ABC Motors
              </AppText>
              <AppText variant="labelSm" color="#64748B">
                AUTOMOTIVE REPAIR INVOICE
              </AppText>
            </View>

            <View style={styles.mockTable}>
              <View style={styles.mockTableRow}>
                <View style={[styles.mockBar, { width: '45%' }]} />
                <View style={[styles.mockBar, { width: '20%' }]} />
              </View>
              <View style={styles.mockTableRow}>
                <View style={[styles.mockBar, { width: '60%' }]} />
                <View style={[styles.mockBar, { width: '20%' }]} />
              </View>
              <View style={styles.mockTableRow}>
                <View style={[styles.mockBar, { width: '40%' }]} />
                <View style={[styles.mockBar, { width: '20%' }]} />
              </View>
            </View>

            {/* Blue bounding edge scanner box with corner pins */}
            <View style={styles.boundingScanBox}>
              <View style={[styles.cornerPin, styles.pinTL]} />
              <View style={[styles.cornerPin, styles.pinTR]} />
              <View style={[styles.cornerPin, styles.pinBL]} />
              <View style={[styles.cornerPin, styles.pinBR]} />

              <View style={styles.scannerCrosshair}>
                <AppText variant="titleMd" color="#FFFFFF">
                  ⛶
                </AppText>
              </View>
            </View>
          </View>

          {/* Bottom bracket markers */}
          <View style={styles.bracketBL} />
          <View style={styles.bracketBR} />
        </View>

        {/* Detecting edges pill */}
        <View style={styles.detectingPill}>
          <View style={styles.blueDot} />
          <AppText variant="labelSm" color={Colors.secondaryText}>
            Hold steady · Detecting edges...
          </AppText>
        </View>

        {/* Shutter Hub & Bottom Controls */}
        <View style={styles.shutterRow}>
          <Pressable
            onPress={handleChoosePhotos}
            style={styles.sideShutterBtn}
            accessibilityRole="button"
            accessibilityLabel="Open photos library"
          >
            <View style={styles.sideOrb}>
              <AppText variant="body" color={Colors.primaryText}>
                🖼️
              </AppText>
            </View>
            <AppText variant="labelSm" color={Colors.secondaryText}>
              Photos
            </AppText>
          </Pressable>

          {/* Central Camera Shutter Button */}
          <Pressable
            onPress={handleOpenCamera}
            style={({ pressed }) => [
              styles.centralShutterOuter,
              pressed && styles.shutterPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Capture quote"
          >
            <View style={styles.centralShutterInner}>
              <View style={styles.shutterIconCenter}>
                <View style={styles.shutterFocusFrame} />
              </View>
            </View>
          </Pressable>

          <View style={styles.sideShutterBtn}>
            <View style={styles.sideOrb}>
              <AppText variant="body" color={Colors.primaryText}>
                ⚙️
              </AppText>
            </View>
            <AppText variant="labelSm" color={Colors.secondaryText}>
              Auto
            </AppText>
          </View>
        </View>

        {/* Privacy Note */}
        <View style={styles.privacyRow}>
          <AppText variant="labelSm" color={Colors.outline}>
            🔒 QuoteLens Private On-Device Processing
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
    alignItems: 'center',
  },
  headerSearchButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusPillsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconPill: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  autoCaptureBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: Colors.surfaceContainer,
    borderRadius: Radii.pill,
  },
  blueDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.secondary,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headline: {
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13.5,
    maxWidth: 280,
  },
  viewfinderCard: {
    width: '100%',
    height: 340,
    backgroundColor: '#3E2723', // wood grain desk simulator
    borderRadius: Radii.large,
    padding: 12,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  viewfinderTopBadges: {
    position: 'absolute',
    top: 10,
    left: 12,
    right: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  estimateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radii.pill,
  },
  docIconMini: {
    fontSize: 10,
  },
  ocrBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radii.pill,
  },
  documentSheet: {
    width: '86%',
    height: '84%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 16,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  mockInvoiceHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingBottom: 8,
    marginBottom: 10,
  },
  mockTitle: {
    fontWeight: '700',
    fontSize: 15,
  },
  mockTable: {
    gap: 8,
    marginTop: 6,
  },
  mockTableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mockBar: {
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
  },
  boundingScanBox: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    bottom: 12,
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderStyle: 'dashed',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cornerPin: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  pinTL: { top: -5, left: -5 },
  pinTR: { top: -5, right: -5 },
  pinBL: { bottom: -5, left: -5 },
  pinBR: { bottom: -5, right: -5 },
  scannerCrosshair: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(29, 78, 216, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bracketBL: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    width: 14,
    height: 14,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#FFFFFF',
  },
  bracketBR: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 14,
    height: 14,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
  },
  detectingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.surfaceContainer,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radii.pill,
    marginVertical: 16,
  },
  shutterRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  sideShutterBtn: {
    alignItems: 'center',
    gap: 4,
  },
  sideOrb: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centralShutterOuter: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: Colors.secondaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centralShutterInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterIconCenter: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterFocusFrame: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 3,
  },
  shutterPressed: {
    transform: [{ scale: 0.94 }],
  },
  privacyRow: {
    marginTop: 14,
  },
});

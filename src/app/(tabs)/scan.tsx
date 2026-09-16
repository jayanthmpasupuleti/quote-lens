import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import {
  Screen,
  AppText,
  PrimaryButton,
  SecondaryButton,
  Card,
} from '@/components/ui';

export default function ScanScreen() {
  const router = useRouter();

  const handleOpenCamera = () => {
    // Non-functional placeholder for Milestone 1
    router.push('/capture/camera');
  };

  const handleChoosePhotos = () => {
    // Non-functional placeholder for Milestone 1
    router.push('/capture/review');
  };

  return (
    <Screen scrollable contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        {/* Visual Target Frame Placeholder */}
        <View style={styles.viewfinderContainer}>
          <View style={styles.viewfinderBox}>
            <View style={[styles.corner, styles.cornerTL]} />
            <View style={[styles.corner, styles.cornerTR]} />
            <View style={[styles.corner, styles.cornerBL]} />
            <View style={[styles.corner, styles.cornerBR]} />

            <View style={styles.innerDocIcon}>
              <View style={styles.docLine1} />
              <View style={styles.docLine2} />
              <View style={styles.docLine3} />
            </View>
          </View>
        </View>

        <AppText variant="largeTitle" color={Colors.primaryText} align="center" style={styles.headline}>
          Scan a quote
        </AppText>
        <AppText
          variant="body"
          color={Colors.secondaryText}
          align="center"
          style={styles.supportingText}
        >
          Take a clear photo of your quote and we'll break it down for you.
        </AppText>
      </View>

      {/* Guidance Cards */}
      <View style={styles.guidanceSection}>
        <Card style={styles.guideCard}>
          <AppText variant="section" color={Colors.primaryText} style={styles.guideTitle}>
            Tips for best results
          </AppText>
          <View style={styles.bulletItem}>
            <AppText variant="body" color={Colors.semantic.clear} style={styles.bulletPoint}>
              ✓
            </AppText>
            <AppText variant="caption" color={Colors.secondaryText} style={styles.bulletText}>
              Ensure all itemized prices and totals are clearly visible
            </AppText>
          </View>
          <View style={styles.bulletItem}>
            <AppText variant="body" color={Colors.semantic.clear} style={styles.bulletPoint}>
              ✓
            </AppText>
            <AppText variant="caption" color={Colors.secondaryText} style={styles.bulletText}>
              Flatten paper documents and avoid harsh shadows
            </AppText>
          </View>
          <View style={styles.bulletItem}>
            <AppText variant="body" color={Colors.semantic.clear} style={styles.bulletPoint}>
              ✓
            </AppText>
            <AppText variant="caption" color={Colors.secondaryText} style={styles.bulletText}>
              PDF quotation files and screenshots are also supported
            </AppText>
          </View>
        </Card>
      </View>

      {/* Actions */}
      <View style={styles.actionsSection}>
        <PrimaryButton
          title="Open Camera"
          onPress={handleOpenCamera}
          style={styles.actionButton}
          accessibilityHint="Launches camera scanner"
        />
        <SecondaryButton
          title="Choose from Photos"
          onPress={handleChoosePhotos}
          style={styles.actionButton}
          accessibilityHint="Opens photo library"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: Spacing.xl,
  },
  topSection: {
    alignItems: 'center',
    paddingTop: Spacing.lg,
  },
  viewfinderContainer: {
    marginBottom: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewfinderBox: {
    width: 140,
    height: 170,
    borderRadius: Radii.large,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderColor: Colors.primaryText,
  },
  cornerTL: {
    top: 10,
    left: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  cornerTR: {
    top: 10,
    right: 10,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  cornerBL: {
    bottom: 10,
    left: 10,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  cornerBR: {
    bottom: 10,
    right: 10,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  innerDocIcon: {
    width: 60,
    gap: 8,
  },
  docLine1: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    width: '100%',
  },
  docLine2: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    width: '75%',
  },
  docLine3: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    width: '50%',
  },
  headline: {
    marginBottom: Spacing.xs,
  },
  supportingText: {
    maxWidth: 300,
  },
  guidanceSection: {
    marginVertical: Spacing.xl,
  },
  guideCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
  },
  guideTitle: {
    marginBottom: Spacing.sm,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.xs,
    marginBottom: Spacing.xs,
  },
  bulletPoint: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
  },
  bulletText: {
    flex: 1,
  },
  actionsSection: {
    gap: Spacing.xs,
    marginTop: Spacing.md,
  },
  actionButton: {
    width: '100%',
  },
});

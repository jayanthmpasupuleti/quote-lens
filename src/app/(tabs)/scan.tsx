import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing, Shadows } from '@/theme';
import {
  Screen,
  AppText,
  PrimaryButton,
  SecondaryButton,
  Card,
} from '@/components/ui';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ScanScreen() {
  const router = useRouter();

  const handleOpenCamera = () => {
    router.push('/capture/camera');
  };

  const handleChoosePhotos = () => {
    router.push('/capture/review');
  };

  return (
    <Screen scrollable withAmbientBackground contentContainerStyle={styles.container}>
      <View style={styles.content}>
        {/* Large Glass Camera Visual Header */}
        <View style={styles.glassCameraWrapper}>
          <View style={styles.cameraAmbientGlow} />
          <View style={styles.glassPlateBack} />
          <View style={styles.glassPlateFront}>
            <View style={styles.outerLensRing}>
              <View style={styles.middleLensRing}>
                <View style={styles.innerCoreLens}>
                  <View style={styles.lensReflection} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Headline & Copy */}
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

        {/* Primary & Secondary Actions */}
        <View style={styles.actionsGroup}>
          <PrimaryButton
            title="Open Camera"
            onPress={handleOpenCamera}
            style={styles.primaryButton}
            accessibilityHint="Launches camera scanner"
          />
          <SecondaryButton
            title="Choose from Photos"
            onPress={handleChoosePhotos}
            style={styles.secondaryButton}
            accessibilityHint="Opens photo library"
          />
        </View>

        {/* Helpful Tip Card */}
        <Card variant="glass" style={styles.tipCard}>
          <View style={styles.tipRow}>
            <View style={styles.sunIconOrb}>
              <AppText variant="caption" color={Colors.semantic.ask}>
                💡
              </AppText>
            </View>
            <View style={styles.tipTexts}>
              <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.tipTitle}>
                For best results
              </AppText>
              <AppText variant="caption" color={Colors.secondaryText} style={styles.tipBody}>
                Make sure the text is clear and the whole quote is visible.
              </AppText>
            </View>
          </View>
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.xl,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xs,
  },
  glassCameraWrapper: {
    width: SCREEN_WIDTH * 0.7,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginVertical: Spacing.lg,
  },
  cameraAmbientGlow: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(191, 219, 254, 0.45)',
  },
  glassPlateBack: {
    position: 'absolute',
    width: 170,
    height: 130,
    borderRadius: Radii.extraLarge,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.75)',
    transform: [{ rotate: '-6deg' }],
  },
  glassPlateFront: {
    width: 180,
    height: 140,
    borderRadius: Radii.extraLarge,
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.elevated,
  },
  outerLensRing: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: 'rgba(238, 242, 255, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(191, 219, 254, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleLensRing: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCoreLens: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#1D4ED8',
    position: 'relative',
  },
  lensReflection: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  headline: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: -0.4,
  },
  supportingText: {
    fontSize: 14.5,
    lineHeight: 21,
    maxWidth: 290,
    marginBottom: Spacing.xl,
  },
  actionsGroup: {
    width: '100%',
    gap: Spacing.xs + 2,
    marginBottom: Spacing.xl,
  },
  primaryButton: {
    backgroundColor: Colors.darkPrimaryCTA,
    borderRadius: Radii.medium,
    minHeight: 50,
  },
  secondaryButton: {
    backgroundColor: Colors.glassSurfaceHigh,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    borderRadius: Radii.medium,
    minHeight: 50,
  },
  tipCard: {
    width: '100%',
    padding: Spacing.md,
    borderRadius: Radii.large,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sunIconOrb: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(245, 158, 11, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipTexts: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  tipBody: {
    fontSize: 12.5,
    lineHeight: 17,
  },
});

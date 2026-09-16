import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Colors, Radii, Spacing } from '@/theme';
import { AppText } from './AppText';

export interface StitchScanCardProps {
  onScanPress: () => void;
  onUploadPdfPress: () => void;
  onTrySamplePress: () => void;
}

/**
 * Precision Hardware-inspired Tactile Scan Card from Stitch:
 * - Precision Corner Register Marks (blue brackets)
 * - Centered shutter icon with "Scan a Quote" + center focus icon
 * - Subtext: "Point camera at any printed or digital quote"
 * - Dual tactile buttons: [Upload PDF] and [Try a Sample]
 */
export const StitchScanCard: React.FC<StitchScanCardProps> = ({
  onScanPress,
  onUploadPdfPress,
  onTrySamplePress,
}) => {
  return (
    <View style={styles.card}>
      {/* Precision Corner Register Marks */}
      <View style={[styles.corner, styles.cornerTL]} />
      <View style={[styles.corner, styles.cornerTR]} />
      <View style={[styles.corner, styles.cornerBL]} />
      <View style={[styles.corner, styles.cornerBR]} />

      {/* Center Shutter Trigger */}
      <Pressable
        onPress={onScanPress}
        accessibilityRole="button"
        accessibilityLabel="Activate camera to scan a quote"
        style={({ pressed }) => [
          styles.shutterButton,
          pressed && styles.shutterPressed,
        ]}
      >
        <View style={styles.shutterOuter}>
          <View style={styles.cameraIcon}>
            <View style={styles.cameraTop} />
            <View style={styles.cameraBase}>
              <View style={styles.cameraLens} />
            </View>
          </View>
        </View>
      </Pressable>

      {/* Label & Guided Instruction */}
      <View style={styles.textBlock}>
        <View style={styles.titleRow}>
          <AppText variant="titleLg" color={Colors.primaryText} style={styles.titleText}>
            Scan a Quote
          </AppText>
          <View style={styles.focusIcon}>
            <View style={styles.focusBracketTL} />
            <View style={styles.focusBracketTR} />
            <View style={styles.focusBracketBL} />
            <View style={styles.focusBracketBR} />
            <View style={styles.focusDot} />
          </View>
        </View>
        <AppText variant="bodySm" color={Colors.secondaryText} align="center">
          Point camera at any printed or digital quote
        </AppText>
      </View>

      {/* Tactile Dual Secondary Triggers */}
      <View style={styles.dualActionRow}>
        <Pressable
          onPress={onUploadPdfPress}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.buttonPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Upload PDF"
        >
          <View style={styles.pdfIcon}>
            <View style={styles.pdfPage} />
          </View>
          <AppText variant="titleMd" color={Colors.primaryText} style={styles.buttonText}>
            Upload PDF
          </AppText>
        </Pressable>

        <Pressable
          onPress={onTrySamplePress}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.buttonPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Try a Sample"
        >
          <View style={styles.sampleIcon}>
            <View style={styles.sampleBars} />
          </View>
          <AppText variant="titleMd" color={Colors.primaryText} style={styles.buttonText}>
            Try a Sample
          </AppText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radii.large,
    paddingVertical: 24,
    paddingHorizontal: 16,
    position: 'relative',
    alignItems: 'center',
    marginVertical: 14,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.04)',
  },
  // Precision register marks
  corner: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderColor: 'rgba(29, 78, 216, 0.55)',
  },
  cornerTL: {
    top: 10,
    left: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderTopLeftRadius: 3,
  },
  cornerTR: {
    top: 10,
    right: 10,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderTopRightRadius: 3,
  },
  cornerBL: {
    bottom: 10,
    left: 10,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderBottomLeftRadius: 3,
  },
  cornerBR: {
    bottom: 10,
    right: 10,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomRightRadius: 3,
  },
  // Shutter icon
  shutterButton: {
    marginBottom: 12,
  },
  shutterOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  shutterPressed: {
    transform: [{ scale: 0.95 }],
  },
  cameraIcon: {
    alignItems: 'center',
  },
  cameraTop: {
    width: 12,
    height: 3,
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  cameraBase: {
    width: 28,
    height: 20,
    borderWidth: 2.2,
    borderColor: Colors.secondary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraLens: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  textBlock: {
    alignItems: 'center',
    marginBottom: 18,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 3,
  },
  titleText: {
    fontWeight: '700',
  },
  focusIcon: {
    width: 16,
    height: 16,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusBracketTL: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 4,
    height: 4,
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderColor: Colors.secondary,
  },
  focusBracketTR: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 4,
    height: 4,
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: Colors.secondary,
  },
  focusBracketBL: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 4,
    height: 4,
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    borderColor: Colors.secondary,
  },
  focusBracketBR: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 4,
    height: 4,
    borderBottomWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: Colors.secondary,
  },
  focusDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.secondary,
  },
  dualActionRow: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surfaceContainer,
    borderRadius: Radii.medium,
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 8,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  pdfIcon: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfPage: {
    width: 12,
    height: 15,
    borderWidth: 1.5,
    borderColor: Colors.secondary,
    borderRadius: 2,
  },
  sampleIcon: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sampleBars: {
    width: 13,
    height: 14,
    borderWidth: 1.5,
    borderColor: Colors.secondaryText,
    borderRadius: 2,
  },
});

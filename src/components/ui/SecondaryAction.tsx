import React from 'react';
import {
  Pressable,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  AccessibilityRole,
} from 'react-native';
import { Colors, Radii, Spacing, Shadows } from '@/theme';
import { AppText } from './AppText';

export interface SecondaryActionProps {
  title: string;
  iconName?: 'upload' | 'sample';
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

/**
 * Secondary translucent glass action pill/card (Upload PDF, Try a Sample)
 * matching the split secondary row in the reference design.
 */
export const SecondaryAction: React.FC<SecondaryActionProps> = ({
  title,
  iconName = 'upload',
  onPress,
  style,
  accessibilityLabel,
  accessibilityHint,
}) => {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole={'button' as AccessibilityRole}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        style,
      ]}
    >
      <View style={styles.iconWrapper}>
        {iconName === 'upload' ? (
          /* Clean native document upload icon */
          <View style={styles.uploadIcon}>
            <View style={styles.uploadDoc}>
              <View style={styles.docArrow}>
                <View style={styles.docArrowHead} />
                <View style={styles.docArrowStem} />
              </View>
            </View>
          </View>
        ) : (
          /* Clean sample sparkle/file icon */
          <View style={styles.sampleIcon}>
            <View style={styles.sampleBox}>
              <View style={styles.sampleLine} />
              <View style={styles.sampleLineShort} />
            </View>
          </View>
        )}
      </View>
      <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.title}>
        {title}
      </AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.glassSurfaceHigh,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    borderRadius: Radii.medium,
    paddingVertical: 13,
    paddingHorizontal: Spacing.md,
    gap: 8,
    ...Shadows.subtle,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIcon: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadDoc: {
    width: 14,
    height: 16,
    borderWidth: 1.5,
    borderColor: Colors.semantic.info,
    borderRadius: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  docArrow: {
    alignItems: 'center',
  },
  docArrowHead: {
    width: 0,
    height: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3.5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.semantic.info,
  },
  docArrowStem: {
    width: 1.5,
    height: 4,
    backgroundColor: Colors.semantic.info,
  },
  sampleIcon: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sampleBox: {
    width: 14,
    height: 15,
    borderWidth: 1.5,
    borderColor: '#7C3AED',
    borderRadius: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  sampleLine: {
    width: 8,
    height: 1.5,
    backgroundColor: '#7C3AED',
    borderRadius: 1,
  },
  sampleLineShort: {
    width: 5,
    height: 1.5,
    backgroundColor: '#7C3AED',
    borderRadius: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});

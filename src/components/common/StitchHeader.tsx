import React from 'react';
import { View, StyleSheet, Platform, Pressable } from 'react-native';
import { Colors, Typography } from '@/theme';
import { AppText } from '../ui/AppText';

export interface StitchHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showProfile?: boolean;
  rightAction?: React.ReactNode;
}

/**
 * Top App Header matching the Stitch QuoteLens header:
 * Left: [⛶ QuoteLens]
 * Right: Screen Title (e.g. "Home", "Quotes", "Settings") + Profile Avatar/Search
 */
export const StitchHeader: React.FC<StitchHeaderProps> = ({
  title = 'Home',
  showBack = false,
  onBack,
  showProfile = true,
  rightAction,
}) => {
  return (
    <View style={styles.header}>
      {/* Left: Brand or Back Button */}
      {showBack ? (
        <Pressable
          onPress={onBack}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={styles.backButton}
        >
          <AppText variant="titleLg" color={Colors.primaryText}>
            ‹
          </AppText>
          <AppText variant="titleMd" color={Colors.primaryText} style={styles.backTitle}>
            {title}
          </AppText>
        </Pressable>
      ) : (
        <View style={styles.brandRow}>
          <View style={styles.logoIcon}>
            <View style={styles.logoFrame} />
            <View style={styles.logoDot} />
          </View>
          <AppText variant="titleLg" color={Colors.primary} style={styles.brandName}>
            QuoteLens
          </AppText>
        </View>
      )}

      {/* Right: Screen title + profile or custom action */}
      <View style={styles.rightContainer}>
        {!showBack && (
          <AppText variant="headlineMd" color={Colors.primaryText} style={styles.screenTitle}>
            {title}
          </AppText>
        )}
        {rightAction ? (
          rightAction
        ) : showProfile ? (
          <View style={styles.profileAvatar}>
            <View style={styles.profileInner} />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logoFrame: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 2,
  },
  logoDot: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: Colors.secondary,
  },
  brandName: {
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  backTitle: {
    fontWeight: '600',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profileInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F1F5F9',
  },
});

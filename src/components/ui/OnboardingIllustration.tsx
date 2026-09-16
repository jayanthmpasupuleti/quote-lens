import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Colors, Radii } from '@/theme';
import { AppText } from './AppText';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export interface OnboardingIllustrationProps {
  step: 1 | 2 | 3;
}

/**
 * Native layered liquid glass illustration components for each Onboarding step.
 * Uses translucent surfaces, borders, and ambient light shapes to faithfully recreate
 * the modern Apple-oriented visual language from the design reference.
 */
export const OnboardingIllustration: React.FC<OnboardingIllustrationProps> = ({ step }) => {
  if (step === 1) {
    // Screen 1: Clean, focused translucent document with luminous liquid glass glow
    return (
      <View style={styles.container}>
        <View style={styles.ambientLightCircle} />
        <View style={styles.docCardBack} />
        <View style={styles.docCardFront}>
          <View style={styles.docHeaderBar}>
            <View style={styles.docLogoDot} />
            <View style={styles.docTitleLine} />
          </View>
          <View style={styles.docContentArea}>
            <View style={styles.docLineWide} />
            <View style={styles.docLineMed} />
            <View style={styles.docLineWide} />
            <View style={styles.docLineShort} />
          </View>
          <View style={styles.docHighlightPill} />
        </View>
      </View>
    );
  }

  if (step === 2) {
    // Screen 2: 3 stacked floating pricing cards with attention tags (₹7,200, ₹2,500, ₹1,800)
    return (
      <View style={styles.container}>
        <View style={styles.ambientLightCircle} />

        {/* Card 1: Review Needed (Red tag) */}
        <View style={[styles.stackedCard, styles.stackTop]}>
          <View style={[styles.tagIcon, { backgroundColor: '#EF4444' }]}>
            <AppText variant="label" color="#FFFFFF" style={styles.tagIconText}>
              !
            </AppText>
          </View>
          <View style={styles.cardTexts}>
            <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.priceText}>
              ₹7,200
            </AppText>
            <AppText variant="caption" color={Colors.semantic.review} style={styles.subText}>
              Missing details
            </AppText>
          </View>
        </View>

        {/* Card 2: Question Recommended (Orange tag) */}
        <View style={[styles.stackedCard, styles.stackMid]}>
          <View style={[styles.tagIcon, { backgroundColor: '#F59E0B' }]}>
            <AppText variant="label" color="#FFFFFF" style={styles.tagIconText}>
              ?
            </AppText>
          </View>
          <View style={styles.cardTexts}>
            <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.priceText}>
              ₹2,500
            </AppText>
            <AppText variant="caption" color={Colors.semantic.ask} style={styles.subText}>
              Worth asking
            </AppText>
          </View>
        </View>

        {/* Card 3: Clear / Fair Price (Green tag) */}
        <View style={[styles.stackedCard, styles.stackBottom]}>
          <View style={[styles.tagIcon, { backgroundColor: '#10B981' }]}>
            <AppText variant="label" color="#FFFFFF" style={styles.tagIconText}>
              ✓
            </AppText>
          </View>
          <View style={styles.cardTexts}>
            <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.priceText}>
              ₹1,800
            </AppText>
            <AppText variant="caption" color={Colors.semantic.clear} style={styles.subText}>
              Looks fair
            </AppText>
          </View>
        </View>
      </View>
    );
  }

  // Screen 3: Floating chat question cards ("What brand is this part?", "Is this covered under warranty?")
  return (
    <View style={styles.container}>
      <View style={styles.ambientLightCircle} />

      <View style={[styles.chatCard, styles.chat1]}>
        <View style={[styles.chatIconOrb, { backgroundColor: '#DBEAFE' }]}>
          <AppText variant="caption" color={Colors.semantic.info}>
            💬
          </AppText>
        </View>
        <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.chatText}>
          What brand is this part?
        </AppText>
      </View>

      <View style={[styles.chatCard, styles.chat2]}>
        <View style={[styles.chatIconOrb, { backgroundColor: '#EDE9FE' }]}>
          <AppText variant="caption" color="#7C3AED">
            🛡️
          </AppText>
        </View>
        <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.chatText}>
          Is this covered under warranty?
        </AppText>
      </View>

      <View style={[styles.chatCard, styles.chat3]}>
        <View style={[styles.chatIconOrb, { backgroundColor: '#F3E8FF' }]}>
          <AppText variant="caption" color="#9333EA">
            📋
          </AppText>
        </View>
        <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.chatText}>
          Can you share a detailed breakdown?
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 60,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  ambientLightCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(219, 234, 254, 0.45)',
  },

  // Step 1: Liquid glass document
  docCardBack: {
    position: 'absolute',
    width: 170,
    height: 200,
    borderRadius: Radii.large,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    transform: [{ rotate: '-8deg' }, { translateY: 4 }],
  },
  docCardFront: {
    width: 175,
    height: 210,
    borderRadius: Radii.large,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    transform: [{ rotate: '4deg' }],
    justifyContent: 'space-between',
  },
  docHeaderBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  docLogoDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3B82F6',
  },
  docTitleLine: {
    height: 8,
    width: 60,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
  },
  docContentArea: {
    gap: 8,
  },
  docLineWide: {
    height: 6,
    width: '100%',
    backgroundColor: '#EEF2F6',
    borderRadius: 3,
  },
  docLineMed: {
    height: 6,
    width: '75%',
    backgroundColor: '#EEF2F6',
    borderRadius: 3,
  },
  docLineShort: {
    height: 6,
    width: '50%',
    backgroundColor: '#EEF2F6',
    borderRadius: 3,
  },
  docHighlightPill: {
    height: 20,
    width: '100%',
    backgroundColor: 'rgba(59, 130, 246, 0.12)',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.25)',
  },

  // Step 2: Stacked pricing cards
  stackedCard: {
    width: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: Radii.large,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
  },
  stackTop: {
    transform: [{ translateY: -14 }, { rotate: '-4deg' }],
    zIndex: 3,
  },
  stackMid: {
    transform: [{ translateY: 0 }, { rotate: '2deg' }],
    zIndex: 2,
  },
  stackBottom: {
    transform: [{ translateY: 14 }, { rotate: '-2deg' }],
    zIndex: 1,
  },
  tagIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagIconText: {
    fontSize: 13,
    fontWeight: '700',
  },
  cardTexts: {
    flex: 1,
  },
  priceText: {
    fontWeight: '700',
    fontSize: 15,
  },
  subText: {
    fontSize: 11.5,
    fontWeight: '600',
  },

  // Step 3: Floating chat cards
  chatCard: {
    width: 245,
    backgroundColor: '#FFFFFF',
    borderRadius: Radii.large,
    paddingVertical: 11,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
  },
  chat1: {
    transform: [{ rotate: '-2deg' }],
  },
  chat2: {
    transform: [{ rotate: '2deg' }],
  },
  chat3: {
    transform: [{ rotate: '-1deg' }],
  },
  chatIconOrb: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatText: {
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
});

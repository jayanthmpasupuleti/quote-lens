import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing, Shadows } from '@/theme';
import { Screen, AppText } from '@/components/ui';
import { OnboardingIllustration } from '@/components/ui/OnboardingIllustration';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface OnboardingStep {
  id: string;
  stepNumber: 1 | 2 | 3;
  title: string;
  body: string;
}

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Understand\nbefore you pay.',
    body: 'QuoteLens turns confusing\nservice quotes into clear,\nunderstandable information.',
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Spot what\ndeserves attention.',
    body: 'Find unclear charges, missing\ndetails and things worth\nasking about.',
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Know what\nto ask.',
    body: 'Get practical questions to ask\nbefore approving the work.',
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (activeIndex < ONBOARDING_STEPS.length - 1) {
      const nextIndex = activeIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    router.replace('/(tabs)');
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SCREEN_WIDTH);
    if (index !== activeIndex && index >= 0 && index < ONBOARDING_STEPS.length) {
      setActiveIndex(index);
    }
  };

  const isLastStep = activeIndex === ONBOARDING_STEPS.length - 1;

  return (
    <Screen horizontalPadding={false} withAmbientBackground contentContainerStyle={styles.container}>
      {/* Top Header Bar with Skip */}
      <View style={styles.topBar}>
        <View style={styles.spacer} />
        {!isLastStep ? (
          <Pressable
            onPress={handleComplete}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            accessibilityRole="button"
            accessibilityLabel="Skip onboarding"
          >
            <AppText variant="caption" color={Colors.secondaryText} style={styles.skipText}>
              Skip
            </AppText>
          </Pressable>
        ) : (
          <View style={styles.spacer} />
        )}
      </View>

      {/* Swipeable Carousel */}
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_STEPS}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={[styles.pageContainer, { width: SCREEN_WIDTH }]}>
            {/* Native Visual Liquid Glass Illustration */}
            <View style={styles.illustrationWrapper}>
              <OnboardingIllustration step={item.stepNumber} />
            </View>

            {/* Typography */}
            <View style={styles.textWrapper}>
              <AppText
                variant="display"
                color={Colors.primaryText}
                align="left"
                style={styles.title}
              >
                {item.title}
              </AppText>
              <AppText
                variant="body"
                color={Colors.secondaryText}
                align="left"
                style={styles.body}
              >
                {item.body}
              </AppText>
            </View>
          </View>
        )}
      />

      {/* Bottom Controls */}
      <View style={styles.bottomBar}>
        {/* Minimal dot indicators */}
        <View style={styles.indicatorContainer}>
          {ONBOARDING_STEPS.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicatorDot,
                index === activeIndex ? styles.indicatorActive : null,
              ]}
            />
          ))}
        </View>

        {/* Action Button: Circular arrow for steps 1 & 2, Full CTA pill for step 3 */}
        {!isLastStep ? (
          <Pressable
            onPress={handleNext}
            style={({ pressed }) => [
              styles.circleNavButton,
              pressed && styles.buttonPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Next step"
          >
            <AppText variant="title" color="#FFFFFF" style={styles.arrowIcon}>
              →
            </AppText>
          </Pressable>
        ) : (
          <Pressable
            onPress={handleNext}
            style={({ pressed }) => [
              styles.finalPillButton,
              pressed && styles.buttonPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Start using QuoteLens"
          >
            <AppText variant="bodyMedium" color="#FFFFFF" style={styles.finalButtonText}>
              Start using QuoteLens →
            </AppText>
          </Pressable>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: Spacing.md,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xs,
    minHeight: 32,
  },
  spacer: {
    width: 40,
  },
  skipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    justifyContent: 'center',
  },
  illustrationWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
  },
  textWrapper: {
    paddingHorizontal: Spacing.xs,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '700',
    letterSpacing: -0.6,
    marginBottom: Spacing.sm,
  },
  body: {
    fontSize: 15.5,
    lineHeight: 23,
    color: '#64748B',
    maxWidth: 290,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
    minHeight: 64,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  indicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
  },
  indicatorActive: {
    backgroundColor: Colors.darkPrimaryCTA,
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  circleNavButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.darkPrimaryCTA,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.elevated,
  },
  arrowIcon: {
    fontSize: 20,
    lineHeight: 24,
  },
  finalPillButton: {
    backgroundColor: Colors.darkPrimaryCTA,
    paddingVertical: 14,
    paddingHorizontal: Spacing.xl,
    borderRadius: Radii.pill,
    ...Shadows.elevated,
  },
  finalButtonText: {
    fontWeight: '600',
    fontSize: 15,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.96 }],
  },
});

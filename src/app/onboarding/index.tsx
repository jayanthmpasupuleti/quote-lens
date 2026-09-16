import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { Screen, AppText, PrimaryButton, SecondaryButton } from '@/components/ui';

interface OnboardingStep {
  id: string;
  stepNumber: number;
  title: string;
  body: string;
  tag: string;
}

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    tag: 'STEP 1 OF 3',
    title: 'Understand before you pay.',
    body: 'QuoteLens turns confusing service quotes into clear, understandable information.',
  },
  {
    id: 'step-2',
    stepNumber: 2,
    tag: 'STEP 2 OF 3',
    title: 'Spot what deserves attention.',
    body: 'Find unclear charges, missing details and things worth asking about.',
  },
  {
    id: 'step-3',
    stepNumber: 3,
    tag: 'STEP 3 OF 3',
    title: 'Know what to ask.',
    body: 'Get practical questions to ask before approving the work.',
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = React.useRef<FlatList>(null);
  const screenWidth = Dimensions.get('window').width;

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
    // Navigate into main app tabs
    router.replace('/(tabs)');
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    if (index !== activeIndex && index >= 0 && index < ONBOARDING_STEPS.length) {
      setActiveIndex(index);
    }
  };

  const isLastStep = activeIndex === ONBOARDING_STEPS.length - 1;

  return (
    <Screen horizontalPadding={false} contentContainerStyle={styles.container}>
      {/* Top Header / Skip */}
      <View style={styles.topBar}>
        <AppText variant="label" color={Colors.secondaryText} style={styles.tagline}>
          QUOTELENS
        </AppText>
        {!isLastStep ? (
          <SecondaryButton
            title="Skip"
            onPress={handleComplete}
            style={styles.skipButton}
          />
        ) : (
          <View style={styles.skipButtonPlaceholder} />
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
          <View style={[styles.pageContainer, { width: screenWidth }]}>
            <View style={styles.illustrationWrapper}>
              <View style={styles.illustrationBox}>
                <View style={styles.iconCircle}>
                  <AppText variant="title" color={Colors.primaryText}>
                    {item.stepNumber === 1 ? '🔍' : item.stepNumber === 2 ? '⚠️' : '💬'}
                  </AppText>
                </View>
                <AppText variant="label" color={Colors.semantic.info} style={styles.stepTag}>
                  {item.tag}
                </AppText>
              </View>
            </View>

            <View style={styles.textWrapper}>
              <AppText
                variant="display"
                color={Colors.primaryText}
                align="center"
                style={styles.title}
              >
                {item.title}
              </AppText>
              <AppText
                variant="body"
                color={Colors.secondaryText}
                align="center"
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
        {/* Indicators */}
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

        {/* Action button */}
        <PrimaryButton
          title={isLastStep ? 'Start using QuoteLens' : 'Continue'}
          onPress={handleNext}
          style={styles.actionButton}
        />
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
    paddingHorizontal: Spacing.screenHorizontal,
    paddingTop: Spacing.xs,
  },
  tagline: {
    letterSpacing: 1.2,
  },
  skipButton: {
    minHeight: 36,
    paddingVertical: 6,
    paddingHorizontal: Spacing.md,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  skipButtonPlaceholder: {
    height: 36,
    width: 60,
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.screenHorizontal,
    paddingBottom: Spacing.xxl,
  },
  illustrationWrapper: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  illustrationBox: {
    width: 160,
    height: 160,
    borderRadius: Radii.extraLarge,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xs,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTag: {
    letterSpacing: 0.8,
  },
  textWrapper: {
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
  },
  title: {
    marginBottom: Spacing.sm,
    maxWidth: 320,
  },
  body: {
    maxWidth: 300,
    lineHeight: 24,
  },
  bottomBar: {
    paddingHorizontal: Spacing.screenHorizontal,
    paddingBottom: Spacing.lg,
    gap: Spacing.lg,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.border,
  },
  indicatorActive: {
    width: 24,
    backgroundColor: Colors.primaryText,
  },
  actionButton: {
    width: '100%',
  },
});

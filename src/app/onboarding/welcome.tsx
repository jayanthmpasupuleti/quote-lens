import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { APP_CONFIG } from '@/constants/config';
import { Screen, AppText, PrimaryButton } from '@/components/ui';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/onboarding');
  };

  return (
    <Screen contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoBadge}>
          <AppText variant="title" color={Colors.primaryText}>
            QL
          </AppText>
        </View>

        <AppText variant="display" color={Colors.primaryText} align="center" style={styles.title}>
          {APP_CONFIG.name}
        </AppText>
        <AppText variant="section" color={Colors.secondaryText} align="center" style={styles.tagline}>
          "{APP_CONFIG.tagline}"
        </AppText>

        <AppText variant="body" color={Colors.secondaryText} align="center" style={styles.description}>
          The mobile utility that helps you understand service quotations before approving them.
        </AppText>
      </View>

      <View style={styles.bottomSection}>
        <PrimaryButton
          title="Get Started"
          onPress={handleGetStarted}
          style={styles.button}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: Spacing.huge,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
  },
  logoBadge: {
    width: 72,
    height: 72,
    borderRadius: Radii.extraLarge,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
  },
  title: {
    marginBottom: Spacing.xs,
  },
  tagline: {
    marginBottom: Spacing.lg,
  },
  description: {
    maxWidth: 280,
    lineHeight: 24,
  },
  bottomSection: {
    paddingBottom: Spacing.lg,
  },
  button: {
    width: '100%',
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Spacing } from '@/theme';
import { Screen, AppText, PrimaryButton, SecondaryButton } from '@/components/ui';

export default function CameraPlaceholderScreen() {
  const router = useRouter();

  return (
    <Screen edges={['top', 'bottom']} contentContainerStyle={styles.container}>
      <View style={styles.center}>
        <AppText variant="title" color={Colors.primaryText} align="center">
          Camera Placeholder
        </AppText>
        <AppText variant="body" color={Colors.secondaryText} align="center" style={styles.text}>
          Camera capture will be integrated in Milestone 2.
        </AppText>
      </View>
      <View style={styles.actions}>
        <PrimaryButton
          title="Simulate Photo Captured"
          onPress={() => router.replace('/capture/review')}
        />
        <SecondaryButton
          title="Close"
          onPress={() => router.back()}
          style={styles.closeBtn}
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: Spacing.xs,
    maxWidth: 260,
  },
  actions: {
    gap: Spacing.xs,
  },
  closeBtn: {
    marginTop: 4,
  },
});

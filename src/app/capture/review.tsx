import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Spacing } from '@/theme';
import { Screen, AppText, PrimaryButton, SecondaryButton } from '@/components/ui';

export default function ReviewPlaceholderScreen() {
  const router = useRouter();

  return (
    <Screen edges={['bottom']} contentContainerStyle={styles.container}>
      <View style={styles.center}>
        <AppText variant="title" color={Colors.primaryText} align="center">
          Review Image
        </AppText>
        <AppText variant="body" color={Colors.secondaryText} align="center" style={styles.text}>
          Review image sharpness and crop before processing.
        </AppText>
      </View>
      <View style={styles.actions}>
        <PrimaryButton
          title="Process Quote"
          onPress={() => router.replace('/capture/processing')}
        />
        <SecondaryButton
          title="Retake"
          onPress={() => router.back()}
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
});

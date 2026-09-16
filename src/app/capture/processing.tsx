import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Spacing } from '@/theme';
import { Screen, AppText, PrimaryButton } from '@/components/ui';

export default function ProcessingPlaceholderScreen() {
  const router = useRouter();

  return (
    <Screen contentContainerStyle={styles.container}>
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primaryText} style={styles.spinner} />
        <AppText variant="title" color={Colors.primaryText} align="center">
          Analyzing Quote
        </AppText>
        <AppText variant="body" color={Colors.secondaryText} align="center" style={styles.text}>
          Scanning line items and checking pricing benchmarks...
        </AppText>
      </View>
      <PrimaryButton
        title="View Analysis Demo"
        onPress={() => router.replace('/analysis/quote-1')}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: Spacing.massive,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    marginBottom: Spacing.lg,
  },
  text: {
    marginTop: Spacing.xs,
    maxWidth: 280,
  },
});

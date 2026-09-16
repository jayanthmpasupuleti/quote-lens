import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Spacing } from '@/theme';
import { Screen, AppText, EmptyState } from '@/components/ui';

export default function CompareQuotesScreen() {
  return (
    <Screen scrollable>
      <View style={styles.container}>
        <EmptyState
          title="Compare Quotations"
          description="Compare service quotes side-by-side to see variations in labor, parts, and unbundled charges."
          actionTitle="Scan Another Quote"
          onAction={() => {}}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.massive,
  },
});

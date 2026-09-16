import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { Colors, Spacing } from '@/theme';

export interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  scrollable?: boolean;
  edges?: Edge[];
  backgroundColor?: string;
  horizontalPadding?: boolean;
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  contentContainerStyle,
  scrollable = false,
  edges = ['top', 'left', 'right'],
  backgroundColor = Colors.background,
  horizontalPadding = true,
}) => {
  const containerPadding = horizontalPadding ? Spacing.screenHorizontal : 0;

  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.safeArea,
        { backgroundColor },
        style,
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={backgroundColor}
      />
      {scrollable ? (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingHorizontal: containerPadding },
            contentContainerStyle,
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={[
            styles.staticContent,
            { paddingHorizontal: containerPadding },
            contentContainerStyle,
          ]}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Spacing.massive,
  },
  staticContent: {
    flex: 1,
  },
});

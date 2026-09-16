import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { Spacing } from '@/theme';
import { AmbientBackground } from './AmbientBackground';

export interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  scrollable?: boolean;
  edges?: Edge[];
  horizontalPadding?: boolean;
  withAmbientBackground?: boolean;
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  contentContainerStyle,
  scrollable = false,
  edges = ['top', 'left', 'right'],
  horizontalPadding = true,
  withAmbientBackground = true,
}) => {
  const containerPadding = horizontalPadding ? Spacing.screenHorizontal : 0;

  const content = (
    <SafeAreaView
      edges={edges}
      style={[
        styles.safeArea,
        style,
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
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

  if (withAmbientBackground) {
    return <AmbientBackground>{content}</AmbientBackground>;
  }

  return content;
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
    paddingBottom: Spacing.massive + 40, // Ensure space above floating tab bar
  },
  staticContent: {
    flex: 1,
  },
});

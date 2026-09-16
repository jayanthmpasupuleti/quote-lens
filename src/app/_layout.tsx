import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/theme';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
          animation: 'fade_from_bottom',
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="quotes/[quoteId]"
          options={{
            headerShown: true,
            title: 'Quote Details',
            headerTintColor: Colors.primaryText,
            headerStyle: { backgroundColor: Colors.surface },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="analysis/[quoteId]"
          options={{
            headerShown: true,
            title: 'Analysis',
            headerTintColor: Colors.primaryText,
            headerStyle: { backgroundColor: Colors.surface },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="analysis/item/[itemId]"
          options={{
            presentation: 'modal',
            headerShown: true,
            title: 'Item Breakdown',
            headerTintColor: Colors.primaryText,
            headerStyle: { backgroundColor: Colors.surface },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="capture/camera"
          options={{
            headerShown: false,
            presentation: 'fullScreenModal',
          }}
        />
        <Stack.Screen
          name="capture/review"
          options={{
            headerShown: true,
            title: 'Review Photo',
            headerTintColor: Colors.primaryText,
            headerStyle: { backgroundColor: Colors.surface },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="capture/processing"
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="compare/index"
          options={{
            headerShown: true,
            title: 'Compare Quotes',
            headerTintColor: Colors.primaryText,
            headerStyle: { backgroundColor: Colors.surface },
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </>
  );
}

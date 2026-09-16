import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@/theme';

export interface DividerProps {
  style?: ViewStyle;
  color?: string;
  marginVertical?: number;
}

export const Divider: React.FC<DividerProps> = ({
  style,
  color = Colors.border,
  marginVertical = 0,
}) => {
  return (
    <View
      style={[
        styles.divider,
        { backgroundColor: color, marginVertical },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
  },
});

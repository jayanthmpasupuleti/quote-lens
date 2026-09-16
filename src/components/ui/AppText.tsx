import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { Colors, Typography, TypographyVariant } from '@/theme';

export interface AppTextProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const AppText: React.FC<AppTextProps> = ({
  children,
  variant = 'body',
  color = Colors.primaryText,
  align = 'left',
  style,
  allowFontScaling = true,
  ...props
}) => {
  return (
    <Text
      allowFontScaling={allowFontScaling}
      style={[
        Typography[variant],
        { color, textAlign: align },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

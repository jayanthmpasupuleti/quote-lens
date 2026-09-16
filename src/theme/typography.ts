import { TextStyle } from 'react-native';

export type TypographyVariant =
  | 'display'
  | 'largeTitle'
  | 'title'
  | 'section'
  | 'body'
  | 'bodyMedium'
  | 'caption'
  | 'label';

export const Typography: Record<TypographyVariant, TextStyle> = {
  // Display: 32 / Bold
  display: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: -0.6,
  },
  // LargeTitle: 28 / Bold
  largeTitle: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  // Title: 22 / Bold
  title: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  // Section: 18 / Semibold
  section: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  // Body: 16 / Regular
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  // BodyMedium: 16 / Medium
  bodyMedium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  // Caption: 13 / Regular
  caption: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
  // Label: 12 / Semibold
  label: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
};

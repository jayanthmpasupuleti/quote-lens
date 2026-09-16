import { TextStyle, Platform } from 'react-native';

export type TypographyVariant =
  | 'display'
  | 'headlineLg'
  | 'headlineMd'
  | 'titleLg'
  | 'titleMd'
  | 'bodyLg'
  | 'bodyMd'
  | 'bodySm'
  | 'labelMd'
  | 'labelSm'
  // Backward compatibility aliases
  | 'largeTitle'
  | 'title'
  | 'section'
  | 'body'
  | 'bodyMedium'
  | 'caption'
  | 'label';

const serifFont = Platform.select({
  ios: 'Georgia',
  android: 'serif',
  default: 'serif',
});

const monoFont = Platform.select({
  ios: 'Courier New',
  android: 'monospace',
  default: 'monospace',
});

export const Typography: Record<TypographyVariant, TextStyle> = {
  // Editorial Display headline (Newsreader / Serif style)
  display: {
    fontFamily: serifFont,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  headlineLg: {
    fontFamily: serifFont,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
    letterSpacing: -0.4,
  },
  headlineMd: {
    fontFamily: serifFont,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  // Clean Grotesque Title (Manrope style)
  titleLg: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  titleMd: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  // Body text
  bodyLg: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  bodyMd: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  bodySm: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
  },
  // Technical / Monospace labels (JetBrains Mono style)
  labelMd: {
    fontFamily: monoFont,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  labelSm: {
    fontFamily: monoFont,
    fontSize: 10.5,
    lineHeight: 14,
    fontWeight: '600',
    letterSpacing: 0.6,
  },

  // Aliases mapping to closest Stitch equivalents
  largeTitle: {
    fontFamily: serifFont,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
    letterSpacing: -0.4,
  },
  title: {
    fontFamily: serifFont,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  section: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
  label: {
    fontFamily: monoFont,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
};

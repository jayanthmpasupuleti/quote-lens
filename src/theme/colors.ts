export const Colors = {
  // Base background & surfaces from Stitch Design System
  background: '#FCF9F8',
  backgroundSecondary: '#EDF1F7',
  surface: '#FCF9F8',
  surfaceSubtle: '#FBFBFC',
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: '#F6F3F2',
  surfaceContainer: '#F0EDEC',
  surfaceContainerHigh: '#EBE7E7',
  surfaceContainerHighest: '#E5E2E1',

  // Primary brand / dark slate
  primary: '#091426',
  primaryContainer: '#1E293B',
  primaryText: '#1C1B1B',
  secondaryText: '#45474C',
  tertiaryText: '#75777D',
  outline: '#75777D',
  outlineVariant: '#C5C6CD',
  border: '#E5E2E1',
  subtleBorder: '#E5EAF0',

  // Liquid glass surfaces & borders
  glassSurface: 'rgba(255, 255, 255, 0.72)',
  glassSurfaceHigh: 'rgba(255, 255, 255, 0.88)',
  glassBorder: 'rgba(255, 255, 255, 0.85)',
  glassBorderSubtle: 'rgba(229, 234, 240, 0.7)',
  darkPrimaryCTA: '#091426',

  // Secondary Blue
  secondary: '#1D4ED8',
  secondaryFixed: '#DCE1FF',
  secondaryFixedDim: '#B7C4FF',

  // Semantic Colors & Badges from Stitch
  semantic: {
    clear: '#16803C',
    ask: '#B7791F',
    review: '#BA1A1A',
    info: '#1D4ED8',
  },

  // Semantic subtle & pill tints
  semanticSubtle: {
    clear: 'rgba(22, 128, 60, 0.08)',
    ask: 'rgba(183, 121, 31, 0.10)',
    review: 'rgba(186, 26, 26, 0.08)',
    info: 'rgba(29, 78, 216, 0.08)',
  },

  semanticPill: {
    reviewBg: '#FEE2E2',
    reviewText: '#991B1B',
    reviewDot: '#DC2626',

    askBg: '#FEF3C7',
    askText: '#92400E',
    askDot: '#D97706',

    clearBg: '#DCFCE7',
    clearText: '#166534',
    clearDot: '#16A34A',
  },

  ambient: {
    blueOrb: 'rgba(191, 219, 254, 0.45)',
    purpleOrb: 'rgba(224, 231, 255, 0.35)',
    glowHigh: 'rgba(255, 255, 255, 0.95)',
  },

  // Interactive states
  pressed: '#EAECEF',
  cardHighlight: '#F6F3F2',
} as const;

export type ColorName = keyof typeof Colors;

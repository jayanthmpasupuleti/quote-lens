export const Colors = {
  // Base background & surfaces
  background: '#F7F9FC',
  backgroundSecondary: '#EDF1F7',
  surface: '#FFFFFF',
  surfaceSubtle: '#FBFBFC',

  // Liquid glass surfaces & borders
  glassSurface: 'rgba(255, 255, 255, 0.72)',
  glassSurfaceHigh: 'rgba(255, 255, 255, 0.88)',
  glassBorder: 'rgba(255, 255, 255, 0.85)',
  glassBorderSubtle: 'rgba(229, 234, 240, 0.7)',
  subtleBorder: '#E5EAF0',
  border: '#E8ECF2',

  // Primary text & dark CTA
  primaryText: '#10131A',
  secondaryText: '#69717D',
  tertiaryText: '#9AA1AD',
  darkPrimaryCTA: '#111318',

  // Semantic
  semantic: {
    clear: '#16803C',
    ask: '#B7791F',
    review: '#C53030',
    info: '#2563EB',
  },

  // Soft translucent badge tints
  semanticSubtle: {
    clear: 'rgba(22, 128, 60, 0.08)',
    ask: 'rgba(183, 121, 31, 0.10)',
    review: 'rgba(197, 48, 48, 0.08)',
    info: 'rgba(37, 99, 235, 0.08)',
  },

  // Ambient glow gradients/lights (liquid glass effect)
  ambient: {
    blueOrb: 'rgba(191, 219, 254, 0.45)', // soft light blue
    purpleOrb: 'rgba(224, 231, 255, 0.35)', // soft indigo
    glowHigh: 'rgba(255, 255, 255, 0.95)',
  },

  // Interactive states
  pressed: '#EAECEF',
  cardHighlight: '#F8FAFC',
} as const;

export type ColorName = keyof typeof Colors;

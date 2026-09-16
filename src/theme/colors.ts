export const Colors = {
  // Brand / Base
  primaryText: '#111318',
  secondaryText: '#6B7078',
  background: '#F8F8F6',
  surface: '#FFFFFF',
  border: '#E5E6E8',

  // Semantic
  semantic: {
    clear: '#16803C',
    ask: '#B7791F',
    review: '#C53030',
    info: '#2563EB',
  },

  // Soft semantic backgrounds for badges & tints
  semanticSubtle: {
    clear: 'rgba(22, 128, 60, 0.08)',
    ask: 'rgba(183, 121, 31, 0.10)',
    review: 'rgba(197, 48, 48, 0.08)',
    info: 'rgba(37, 99, 235, 0.08)',
  },

  // Interactive states
  pressed: '#EAECEF',
  cardHighlight: '#F2F2EF',
} as const;

export type ColorName = keyof typeof Colors;

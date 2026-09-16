export const Radii = {
  xs: 6,
  small: 10,
  medium: 14,
  large: 18,
  card: 20,
  extraLarge: 24,
  pill: 999,
} as const;

export type RadiusName = keyof typeof Radii;

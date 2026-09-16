import { ViewStyle } from 'react-native';
import { Colors } from './colors';
import { Radii } from './radii';
import { Shadows } from './shadows';

export const GlassStyles: Record<'card' | 'elevated' | 'orb' | 'banner', ViewStyle> = {
  card: {
    backgroundColor: Colors.glassSurface,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    borderRadius: Radii.card,
    ...Shadows.glass,
  },
  elevated: {
    backgroundColor: Colors.glassSurfaceHigh,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    borderRadius: Radii.extraLarge,
    ...Shadows.elevated,
  },
  orb: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: Radii.pill,
  },
  banner: {
    backgroundColor: Colors.darkPrimaryCTA,
    borderRadius: Radii.extraLarge,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    ...Shadows.hero,
  },
};

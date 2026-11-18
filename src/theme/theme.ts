import {
  COLORS,
  LIGHT_PALETTE,
  DARK_PALETTE,
  BRAND_COLORS,
  ACCENTS,
  STATUS_COLORS,
  TYPOGRAPHY,
  SPACING,
  RADII,
  SHADOWS,
  ANIMATIONS,
  ThemeMode,
  ResolvedTheme,
} from './designTokens';

export const theme = {
  colors: COLORS,
  brand: BRAND_COLORS,
  accents: ACCENTS,
  status: STATUS_COLORS,
  light: LIGHT_PALETTE,
  dark: DARK_PALETTE,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  radii: RADII,
  shadows: SHADOWS,
  animations: ANIMATIONS,
};

export type { ThemeMode, ResolvedTheme };
export {
  COLORS,
  LIGHT_PALETTE,
  DARK_PALETTE,
  BRAND_COLORS,
  ACCENTS,
  STATUS_COLORS,
  TYPOGRAPHY,
  SPACING,
  RADII,
  SHADOWS,
  ANIMATIONS,
};

export default theme;

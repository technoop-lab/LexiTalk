/**
 * Curiosity English Academy — Design Tokens System (Phase 5D Dual Theme)
 * Unified Design System Tokens supporting Light (#F6F8FC), Dark (#050816), and System modes.
 */

export type ThemeMode = 'dark' | 'light' | 'system';
export type ResolvedTheme = 'dark' | 'light';

export const LIGHT_PALETTE = {
  background: '#F6F8FC',
  surface: '#FFFFFF',
  surfaceSecondary: '#EEF3FF',
  surfaceSoft: '#F8FAFF',
  section: '#EAF0FF',
  card: '#FFFFFF',
  cardElevated: '#FCFDFF',
  cardSecondary: '#EEF3FF',
  border: '#D8E3FF',
  borderLight: '#EDF2F7',
  divider: '#E8ECF5',
  textPrimary: '#111827',
  textSecondary: '#475467',
  textMuted: '#667085',
  textPlaceholder: '#98A2B3',
  textDisabled: '#B6C1D8',
  white: '#FFFFFF',
  primary: '#335CFF',
  secondary: '#6D5DF6',
  primaryGradient: 'linear-gradient(135deg, #335CFF 0%, #6D5DF6 100%)',
  success: '#10B981',
  successBg: '#ECFDF5',
  warning: '#F59E0B',
  warningBg: '#FFFBEB',
  danger: '#EF4444',
  dangerBg: '#FEF2F2',
  info: '#06B6D4',
  infoBg: '#ECFEFF',
  purpleAccent: '#7C3AED',
} as const;

export const DARK_PALETTE = {
  background: '#050816',
  surface: '#0B1225',
  surfaceSecondary: '#16213D',
  surfaceSoft: '#111A30',
  section: '#0B1225',
  card: '#111A30',
  cardElevated: '#16213D',
  cardSecondary: '#16213D',
  border: 'rgba(255, 255, 255, 0.08)',
  borderLight: 'rgba(255, 255, 255, 0.05)',
  divider: 'rgba(255, 255, 255, 0.1)',
  textPrimary: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textMuted: '#94A3B8',
  textPlaceholder: '#64748B',
  textDisabled: '#475569',
  white: '#FFFFFF',
  primary: '#335CFF',
  secondary: '#6D5DF6',
  primaryGradient: 'linear-gradient(135deg, #335CFF 0%, #6D5DF6 100%)',
  success: '#10B981',
  successBg: 'rgba(16, 185, 129, 0.15)',
  warning: '#F59E0B',
  warningBg: 'rgba(245, 158, 11, 0.15)',
  danger: '#EF4444',
  dangerBg: 'rgba(239, 68, 68, 0.15)',
  info: '#06B6D4',
  infoBg: 'rgba(6, 182, 212, 0.15)',
  purpleAccent: '#7C3AED',
} as const;

export const BRAND_COLORS = {
  primary: '#335CFF',
  secondary: '#6D5DF6',
  indigoLight: '#4F7CFF',
  violetLight: '#8A74FF',
  gradientPrimary: 'linear-gradient(135deg, #335CFF 0%, #6D5DF6 100%)',
  gradientHero: 'linear-gradient(135deg, #335CFF 0%, #6D5DF6 100%)',
  gradientDark: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
  gradientEmerald: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  gradientAmber: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  gradientRose: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
} as const;

export const ACCENTS = {
  emerald: '#10B981',
  emeraldDark: '#059669',
  cyan: '#06B6D4',
  cyanLight: '#22D3EE',
  amber: '#F59E0B',
  amberLight: '#FBBF24',
  coral: '#EF4444',
  purple: '#7C3AED',
  purpleLight: '#8B5CF6',
} as const;

export const STATUS_COLORS = {
  success: '#10B981',
  successBg: '#ECFDF5',
  warning: '#F59E0B',
  warningBg: '#FFFBEB',
  danger: '#EF4444',
  dangerBg: '#FEF2F2',
  info: '#06B6D4',
  infoBg: '#ECFEFF',
} as const;

export const COLORS = {
  brand: BRAND_COLORS,
  accents: ACCENTS,
  status: STATUS_COLORS,
  light: LIGHT_PALETTE,
  dark: DARK_PALETTE,
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Plus Jakarta Sans', sans-serif",
    display: "'Outfit', 'Inter', -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  sizes: {
    hero: '32px',
    sectionTitle: '24px',
    lessonTitle: '22px',
    cardTitle: '18px',
    body: '16px',
    secondaryBody: '15px',
    caption: '13px',
    tiny: '12px',
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.65,
  },
} as const;

export const SPACING = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
} as const;

export const RADII = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  full: '9999px',
} as const;

export const SHADOWS = {
  softSm: '0 2px 8px -2px rgba(15, 23, 42, 0.06)',
  softMd: '0 8px 24px -4px rgba(15, 23, 42, 0.08)',
  softLg: '0 16px 36px -6px rgba(15, 23, 42, 0.12)',
  softXl: '0 24px 48px -12px rgba(15, 23, 42, 0.18)',
  brandGlow: '0 10px 30px -5px rgba(51, 92, 255, 0.35)',
  emeraldGlow: '0 10px 30px -5px rgba(16, 185, 129, 0.35)',
  amberGlow: '0 10px 30px -5px rgba(245, 158, 11, 0.35)',
  tactileCard: '0 4px 0 0 rgba(0, 0, 0, 0.08)',
} as const;

export const ANIMATIONS = {
  transitionFast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  transitionNormal: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  transitionSlow: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  themeTransition: 'background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
} as const;

// src/theme/index.js
export const Colors = {
  primary: '#1D4ED8',       // blue-600 — main brand blue
  primaryDark: '#1E40AF',   // blue-700
  primaryLight: '#EFF6FF',  // blue-50
  primaryMid: '#DBEAFE',    // blue-100

  accent: '#16A34A',        // green-600 — earnings
  accentLight: '#DCFCE7',

  surface: '#F8F7FF',       // off-white surface (bg-surface-secondary)
  surfaceCard: '#FFFFFF',
  border: '#F3F4F6',

  textPrimary: '#111827',   // gray-900
  textSecondary: '#6B7280', // gray-500
  textMuted: '#9CA3AF',     // gray-400

  white: '#FFFFFF',
  black: '#000000',
  danger: '#EF4444',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 999,
};

export const Typography = {
  h1: { fontSize: 32, fontWeight: '800', lineHeight: 40, color: Colors.textPrimary },
  h2: { fontSize: 24, fontWeight: '700', lineHeight: 32, color: Colors.textPrimary },
  h3: { fontSize: 18, fontWeight: '700', lineHeight: 26, color: Colors.textPrimary },
  body: { fontSize: 15, fontWeight: '400', lineHeight: 22, color: Colors.textSecondary },
  bodySmall: { fontSize: 13, fontWeight: '400', lineHeight: 20, color: Colors.textSecondary },
  caption: { fontSize: 11, fontWeight: '400', lineHeight: 16, color: Colors.textMuted },
  label: { fontSize: 12, fontWeight: '600', letterSpacing: 0.8, color: Colors.textSecondary },
};

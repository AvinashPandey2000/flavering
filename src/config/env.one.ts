import { AppConfig } from './config.types';

export const COLORS = {
  primary: '#00A89E', // Teal from design
  primaryDark: '#008B83',
  tabActive: '#00A89E',
  tabInactive: '#666666',
  background: '#F0FAF9', // Light teal/white background
  backgroundAlt: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceSoft: '#F9FFFF',
  textOnPrimary: '#ffffff',
  textOnPrimarySoft: '#E0F2F1',
  textOnPrimaryMuted: '#B2DFDB',
  textPrimary: '#1F1F1F', // Dark text
  textPrimaryAlt: '#2b2b2b',
  textSecondary: '#333333',
  textSecondaryAlt: '#444444',
  textMuted: '#666666',
  textMutedAlt: '#777777',
  textMutedStrong: '#757575',
  textSubtle: '#888888',
  textPlaceholder: '#999999',
  iconMuted: '#b0b0b0',
  border: '#E0E0E0',
  shadow: '#000000',

  // Specific UI elements
  buttonPrimary: '#00A89E',
  buttonSecondary: '#0288D1', // Blue button seen in "Staff Login"

  // Service Card Colors (Light backgrounds)
  cardBg: '#FFFFFF',

  // Floating Action Button
  fabBg: '#00A89E',

  // Legacy/Other mappings ensuring no breakages
  metricScheduleBg: '#ffe2cf',
  metricVaccinesBg: '#e6fbf5',
  metricRemindersBg: '#fff1d9',
  petIconBg: '#fff3e2',
  petIconText: '#a55a00',
  reminderBorder: '#00796b',
  reminderBg: '#e9f7f4',
  addReminderBg: '#d7f3ec',
  quickBookVetBg: '#26a69a',
  quickBookGroomingBg: '#ffa726',
  quickBookBoardingBg: '#7e57c2',
  appointmentDateBg: '#fff8e1',
  badgeBg: '#fce4ec',
  badgeText: '#c2185b',
  providerImageBg: '#f0f0e0',
  heart: '#ff4d4f',
  tagBg: '#e6fbf5',
  callButtonBg: '#e9f7f4',
  menuOverlay: 'rgba(255,255,255,0.2)',
} as const;

export const oneConfic: AppConfig = {
  ENV: 'one',
  API_URL: 'https://dev.api.myapp.com',
  THEME_COLOR: '#FF0000',
  DEBUG_MODE: true,
};

import { AppConfig } from './config.types';

export const COLORS = {
  primary: '#1565C0', // Blue for Env Three
  primaryDark: '#0D47A1',
  tabActive: '#1565C0',
  tabInactive: '#666666',
  background: '#E3F2FD', // Light blue background
  backgroundAlt: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceSoft: '#E1F5FE',
  textOnPrimary: '#ffffff',
  textOnPrimarySoft: '#BBDEFB',
  textOnPrimaryMuted: '#90CAF9',
  textPrimary: '#1F1F1F',
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
  buttonPrimary: '#1565C0',
  buttonSecondary: '#00838F',

  // Service Card Colors
  cardBg: '#FFFFFF',

  // Floating Action Button
  fabBg: '#1565C0',

  // Metric & legacy mappings
  metricScheduleBg: '#BBDEFB',
  metricVaccinesBg: '#E3F2FD',
  metricRemindersBg: '#E1F5FE',
  petIconBg: '#BBDEFB',
  petIconText: '#0D47A1',
  reminderBorder: '#1565C0',
  reminderBg: '#E3F2FD',
  addReminderBg: '#BBDEFB',
  quickBookVetBg: '#1976D2',
  quickBookGroomingBg: '#2196F3',
  quickBookBoardingBg: '#42A5F5',
  appointmentDateBg: '#E1F5FE',
  badgeBg: '#F3E5F5',
  badgeText: '#7B1FA2',
  providerImageBg: '#F5F5F5',
  heart: '#C2185B',
  tagBg: '#E3F2FD',
  callButtonBg: '#E3F2FD',
  menuOverlay: 'rgba(255,255,255,0.2)',
} as const;

export const threeConfic: AppConfig = {
  ENV: 'three',
  API_URL: 'https://api.myapp.com',
  THEME_COLOR: '#1565C0', // Blue for Prod
  DEBUG_MODE: false,
};
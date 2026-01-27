import { AppConfig } from './config.types';

export const COLORS = {
  primary: '#EF6C00', // Orange for Env Two
  primaryDark: '#E65100',
  tabActive: '#EF6C00',
  tabInactive: '#666666',
  background: '#FFF3E0', // Light orange background
  backgroundAlt: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceSoft: '#FFF8E1',
  textOnPrimary: '#ffffff',
  textOnPrimarySoft: '#FFE0B2',
  textOnPrimaryMuted: '#FFCC80',
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
  buttonPrimary: '#EF6C00',
  buttonSecondary: '#0277BD',

  // Service Card Colors
  cardBg: '#FFFFFF',

  // Floating Action Button
  fabBg: '#EF6C00',

  // Metric & legacy mappings
  metricScheduleBg: '#FFE0B2',
  metricVaccinesBg: '#FFF3E0',
  metricRemindersBg: '#FFECB3',
  petIconBg: '#FFE0B2',
  petIconText: '#E65100',
  reminderBorder: '#EF6C00',
  reminderBg: '#FFF3E0',
  addReminderBg: '#FFE0B2',
  quickBookVetBg: '#FF9800',
  quickBookGroomingBg: '#FFB74D',
  quickBookBoardingBg: '#FFCC80',
  appointmentDateBg: '#FFF8E1',
  badgeBg: '#FFEBEE',
  badgeText: '#C62828',
  providerImageBg: '#F5F5F5',
  heart: '#D32F2F',
  tagBg: '#FFF3E0',
  callButtonBg: '#FFF3E0',
  menuOverlay: 'rgba(255,255,255,0.2)',
} as const;

export const twoConfic: AppConfig = {
  ENV: 'two',
  API_URL: 'https://staging.api.myapp.com',
  THEME_COLOR: '#EF6C00', // Orange for Staging
  DEBUG_MODE: true,
};
// src/config/config.types.ts

export interface ThemeColors {
  primary: string;
  primaryDark: string;
  tabActive: string;
  tabInactive: string;
  background: string;
  backgroundAlt: string;
  surface: string;
  surfaceSoft: string;
  textOnPrimary: string;
  textOnPrimarySoft: string;
  textOnPrimaryMuted: string;
  textPrimary: string;
  textPrimaryAlt: string;
  textSecondary: string;
  textSecondaryAlt: string;
  textMuted: string;
  textMutedAlt: string;
  textMutedStrong: string;
  textSubtle: string;
  textPlaceholder: string;
  iconMuted: string;
  border: string;
  shadow: string;

  // Specific UI elements
  buttonPrimary: string;
  buttonSecondary: string;

  // Service Card Colors
  cardBg: string;

  // Floating Action Button
  fabBg: string;

  // Metric & legacy mappings
  metricScheduleBg: string;
  metricVaccinesBg: string;
  metricRemindersBg: string;
  petIconBg: string;
  petIconText: string;
  reminderBorder: string;
  reminderBg: string;
  addReminderBg: string;
  quickBookVetBg: string;
  quickBookGroomingBg: string;
  quickBookBoardingBg: string;
  appointmentDateBg: string;
  badgeBg: string;
  badgeText: string;
  providerImageBg: string;
  heart: string;
  tagBg: string;
  callButtonBg: string;
  menuOverlay: string;
}

export interface AppConfig {
  ENV: 'one' | 'two' | 'three';
  API_URL: string;
  THEME_COLOR: string;
  DEBUG_MODE: boolean;
}
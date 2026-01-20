// src/config/config.types.ts

export interface AppConfig {
  ENV: 'one' | 'two' | 'three';
  API_URL: string;
  THEME_COLOR: string;
  DEBUG_MODE: boolean;
}
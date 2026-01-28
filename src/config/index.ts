import RNConfig from 'react-native-config';
import { oneConfic, COLORS as oneColors } from './env.one';
import { twoConfic, COLORS as twoColors } from './env.two';
import { threeConfic, COLORS as threeColors } from './env.three';
import { AppConfig, ThemeColors } from './config.types';

// Options: 'one' | 'two' | 'three'
export const CURRENT_ENV = RNConfig.APP_FLAVOR || 'one';

const configs: Record<string, { config: AppConfig; colors: ThemeColors }> = {
  one: { config: oneConfic, colors: oneColors },
  two: { config: twoConfic, colors: twoColors },
  three: { config: threeConfic, colors: threeColors },
};

const Config = configs[CURRENT_ENV].config;
export const COLORS = configs[CURRENT_ENV].colors;

export default Config;

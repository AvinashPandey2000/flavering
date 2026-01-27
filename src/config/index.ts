import { oneConfic } from './env.one';
import { twoConfic } from './env.two';
import { threeConfic } from './env.three';
import { AppConfig } from './config.types';
import RNConfig from 'react-native-config';

const CURRENT_ENV = (() => {
    console.log("RNConfig?>>>>",RNConfig)
  const value = RNConfig.APP_ENV;
  if (value === 'one' || value === 'two' || value === 'three') {
    return value;
  }
  return 'two';
})();

const configs: Record<'one' | 'two' | 'three', AppConfig> = {
  one: oneConfic,
  two: twoConfic,
  three: threeConfic,
};

const Config = configs[CURRENT_ENV];

export default Config;

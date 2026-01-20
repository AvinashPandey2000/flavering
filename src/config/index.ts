import { oneConfic } from './env.one';
import { twoConfic } from './env.two';
import { threeConfic } from './env.three';
import { AppConfig } from './config.types';

// Options: 'one' | 'two' | 'three'
const CURRENT_ENV = 'two';

const configs: Record<string, AppConfig> = {
  one: oneConfic,
  two: twoConfic,
  three: threeConfic,
};

const Config = configs[CURRENT_ENV];

export default Config;

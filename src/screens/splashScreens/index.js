//===< ALL IMPORTS >===//
import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import { Images } from '../../assets/images';
import { CURRENT_ENV } from '../../config';
import { APP_NAVIGATIONS } from '../../navigation';

//===< MAIN FUNCITONS >===//
const Splash = () => {
  const navigation = useNavigation();

  const splashByEnv = {
    one: Images.maillardVilleSplash,
    two: Images.veterinary,
    three: Images.thirdSplash,
  };

  const splashImage = splashByEnv[CURRENT_ENV] ?? Images.maillardVilleSplash;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: APP_NAVIGATIONS.STACK.ROOT.MAIN_TABS,
            params: { screen: 'Home' },
          },
        ],
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigation]);

  return (
    <ImageBackground source={splashImage} style={styles.splashContainer} />
  );
};

export default Splash;

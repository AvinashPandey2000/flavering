import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { APP_NAVIGATIONS } from '../index';
import Splash from '../../screens/splashScreens';

const Stack = createNativeStackNavigator();

const IntroStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={APP_NAVIGATIONS.STACK.INTRO_STACK.SPLASH}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={APP_NAVIGATIONS.STACK.INTRO_STACK.SPLASH}
        component={Splash}
      />
    </Stack.Navigator>
  );
};

export default IntroStack;

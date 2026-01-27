import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '../tab/BottomTabNavigator';
import IntroStack from './IntroStack';
import { APP_NAVIGATIONS } from '../index';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={APP_NAVIGATIONS.STACK.ROOT.INTRO_STACK}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={APP_NAVIGATIONS.STACK.ROOT.INTRO_STACK}
        component={IntroStack}
      />
      <Stack.Screen
        name={APP_NAVIGATIONS.STACK.ROOT.MAIN_TABS}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types/navigation';
import {NAVIGATOR_NAMES} from '../constants/navigatorNames';
import {AppNavigator} from './AppNavigator';

const Root = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Root.Screen
        name={NAVIGATOR_NAMES.APP_NAVIGATOR}
        component={AppNavigator}
      />
    </Root.Navigator>
  );
};

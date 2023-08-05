import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppNavigatorParamsList} from '../types/navigation';
import {AppInfoScreen} from '../screens/AppInfoScreen/AppInfoScreen';
import {SCREEN_NAMES} from '../constants/screenNames';
import {LinksScreen} from '../screens/LinksScreen/LinksScreen';

const AppStack = createNativeStackNavigator<AppNavigatorParamsList>();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={SCREEN_NAMES.LINKS_SCREEN}
        component={LinksScreen}
        options={{
          title: 'Links',
        }}
      />
      <AppStack.Screen
        name={SCREEN_NAMES.APP_INFO_SCREEN}
        component={AppInfoScreen}
        options={{
          title: 'App Info Screen',
        }}
      />
    </AppStack.Navigator>
  );
};

import {NavigatorScreenParams} from '@react-navigation/native';
import {NAVIGATOR_NAMES} from '../constants/navigatorNames';
import {SCREEN_NAMES} from '../constants/screenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  [NAVIGATOR_NAMES.APP_NAVIGATOR]: NavigatorScreenParams<AppNavigatorParamsList>;
};

export type AppNavigatorParamsList = {
  [SCREEN_NAMES.LINKS_SCREEN]: undefined;
  [SCREEN_NAMES.APP_INFO_SCREEN]: undefined;
};

export type LinksScreenNavigationProp = NativeStackNavigationProp<
  AppNavigatorParamsList,
  SCREEN_NAMES.LINKS_SCREEN
>;

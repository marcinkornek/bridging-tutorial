import React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SCREEN_NAMES} from '../../constants/screenNames';
import {LinksScreenNavigationProp} from '../../types/navigation';

export const LinksScreen: FC = () => {
  const navigation = useNavigation<LinksScreenNavigationProp>();

  const navigateToAppInfoScreen = () => {
    navigation.navigate(SCREEN_NAMES.APP_INFO_SCREEN);
  };

  const navigateToConicGradientScreen = () => {
    navigation.navigate(SCREEN_NAMES.CONIC_GRADIENT_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={navigateToAppInfoScreen} style={styles.button}>
        <Text>Open App Info Screen</Text>
      </Pressable>
      <Pressable onPress={navigateToConicGradientScreen} style={styles.button}>
        <Text>Open Conic Gradient Screen</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});

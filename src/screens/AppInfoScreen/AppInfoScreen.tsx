import React from 'react';
import {AppInfoModule} from 'app-info-package';
import type {FC} from 'react';
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export const AppInfoScreen: FC = () => {
  const [appBuildNumber, setAppBuildNumber] = useState<string | null>(null);
  const [appBundleId, setAppBundleId] = useState<string | null>(null);
  const [appVersion, setAppVersion] = useState<string | null>(null);
  const getAppBuildNumber = () => {
    setAppBuildNumber(AppInfoModule.getAppBuildNumber());
  };

  const getAppBundleId = () => {
    setAppBundleId(AppInfoModule.getAppBundleId());
  };

  const getAppVersion = () => {
    setAppVersion(AppInfoModule.getAppVersion());
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={getAppBuildNumber} style={styles.button}>
        <Text>Check build number</Text>
      </Pressable>
      <Text style={styles.value}>{appBuildNumber}</Text>
      <Pressable onPress={getAppBundleId} style={styles.button}>
        <Text>Check bundle id</Text>
      </Pressable>
      <Text style={styles.value}>{appBundleId}</Text>
      <Pressable onPress={getAppVersion} style={styles.button}>
        <Text>Check app version</Text>
      </Pressable>
      <Text style={styles.value}>{appVersion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  container: {
    padding: 20,
  },
  value: {
    fontSize: 16,
    padding: 8,
  },
});

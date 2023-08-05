import {ConicGradientView} from 'conic-gradient-package';
import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const ConicGradientScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Conic Gradient</Text>
        <ConicGradientView
          colors={['blue', 'green', 'red']}
          locations={[0.1, 0.5, 0.8]}
          centerPoint={{x: 0.45, y: 0.55}}
          style={styles.gradient}>
          <View style={styles.gradientChild}>
            <Text style={styles.gradientChildText}>Child view</Text>
          </View>
        </ConicGradientView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    alignItems: 'center',
    height: 250,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 250,
  },
  gradientChild: {
    backgroundColor: 'rgba(100, 200, 250, 0.3)',
    padding: 30,
  },
  gradientChildText: {
    color: 'white',
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    textTransform: 'capitalize',
  },
  safeArea: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

import React from 'react';
import {View, Text,StyleSheet} from 'react-native';


const SplashScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Splash screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex : 1,
    padding: 50,
  },
  text : {
    fontSize :10,
  }
});

export default SplashScreen;
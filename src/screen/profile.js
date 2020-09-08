import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
//import action
import { logOutAction } from '../action';

const ProfileScreen = () => {
    const dispatch = useDispatch()
    return (
        <View style={styles.root}>
        <Button onPress={() => dispatch(logOutAction())} mode="contained">
      LOG OUT
    </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor : "pink",
      paddingTop: 100,
    }
  });

export default ProfileScreen;
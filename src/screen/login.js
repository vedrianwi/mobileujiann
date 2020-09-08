import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { LoginAction } from '../action'

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { user } = useSelector((state) => {
    return {
        user: state.userReducer.username,
    };
});

  const dispatch = useDispatch();

  const handleLogin = () => {
    const body = {
        username: username,
        password: password,
    };
    console.log('form : ', username, password);
    dispatch(LoginAction(body));
    setUsername('');
    setPassword('');
};

  return (
    <View style={styles.root}>
      <TextInput
      label="Username"
      type="flat"
      value={username}
      onChangeText={value => setUsername(value)}
    />
    <TextInput
      label="Password"
      type="flat"
      value={password}
      onChangeText={value => setPassword(value)}
      secureTextEntry
    />
    <Button 
    onPress={handleLogin} 
    mode="contained"
    >
      Login
    </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 20,
  },
});

export default LoginScreen;
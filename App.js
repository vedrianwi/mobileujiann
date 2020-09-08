import React from 'react';
// import { View, Text} from 'react-native';
// import {} from '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native';

//setup redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './src/reducer'

//create globalStore
const globalStore = createStore(
  allReducers, 
  {}, 
  composeWithDevTools(applyMiddleware(ReduxThunk)))

import StackNav from './src/navigation/stack'

const App = () => {
  return (
  <Provider store={globalStore}>
  <NavigationContainer>
    <StackNav />
  </NavigationContainer>
  </Provider>
  );
};


export default App;
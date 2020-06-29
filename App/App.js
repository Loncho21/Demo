import React from 'react';
import { StatusBar} from 'react-native';
import AppNavigator from './Navigation/index';
import HomeScreen from './Screens/HomeScreen/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="'light-content'" backgroundColor={'#1b1c1c'} />
         <AppNavigator/>
    </>
  );
};
export default App;


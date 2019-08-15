/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import AppNavigator from './src/navigation';
import { Root } from 'native-base';

const App = () => {
  return (
    <Root>
        <AppNavigator />
    </Root>
  );
};

export default App;

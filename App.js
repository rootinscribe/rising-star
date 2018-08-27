/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import RootStack from './src/route.config'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './src/redux/configureStore'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);
const store = configureStore()

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)

export default App

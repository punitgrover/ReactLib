/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  NetInfo, 
  Platform,
  View,
  StatusBar,
  BackHandler,
  NativeModules
} from 'react-native';

import RouterComponent from './src/RouterComponent';
const { StatusBarManager } = NativeModules;


const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }, { shadowOpacity: 0 }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} shadowOpacity={0} translucent={false} />
  </View>
);

export default class App extends Component {

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.networkConnectionChange);
  }
  networkConnectionChange = (isConnected) => {
    // shareManager.getInstance().setInternet(isConnected);
 };
 
  render() {    
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor='white' barStyle="dark-content" />
        <RouterComponent />
        </View>

    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: STATUSBAR_HEIGHT,
    shadowOpacity: 0,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: 'white',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
});

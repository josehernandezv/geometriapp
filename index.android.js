/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  DrawerLayoutAndroid,
  StatusBar
} from 'react-native';

//general views
const Master = require('./src/components/master');
const OnBoarding = require('./src/components/onBoardingView');

//class
export default class Geometriapp extends Component {

  render() {
    return (
        <OnBoarding></OnBoarding>
    )}

}

AppRegistry.registerComponent('Geometriapp', () => Geometriapp);

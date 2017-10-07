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

//class
export default class Geometriapp extends Component {

  render() {
  return (
      <Master></Master>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  scene: {
		flex: 1,
		marginTop: 56
	}
});

AppRegistry.registerComponent('Geometriapp', () => Geometriapp);

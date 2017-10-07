'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Linking
} from 'react-native';


import Onboarding from 'react-native-simple-onboarding';


class onBoardingView extends Component {
    render() {
        maxWith = Dimensions.get('window').width;
        return (
          <Onboarding
            pages={[
              { backgroundColor: '#fff', image: <Image source={require('../images/ic_launcher.png')}/>, title: 'Simple Messenger UI', subtitle: 'Implemented in React Native' },
              { backgroundColor: "#fe6e58", image:<Image source={require('../images/ic_launcher.png')}/>, title: 'Welcome', subtitle: 'To Earth' },
              { backgroundColor: "#999", image: <Image source={require('../images/ic_launcher.png')}/>, title: 'Also', subtitle: 'Mars is nice' },
            ]}
            
          />
        );
    }

    visitPage() {
      var url = 'http://www.so.ucr.ac.cr/laboratorio-de-matematicas';
      Linking.openURL(url);
      
    }
};

const maxWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
  
});

module.exports = onBoardingView;
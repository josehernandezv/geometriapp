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


import Onboarding from 'react-native-onboarding-swiper';
const Master = require('./master');


class onBoardingView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            Done: false
        };
    }

    render() {
      if (this.state.Done) {
        return (
          <Master></Master>
        );
      }
        return (
          <Onboarding
            pages={[
              { backgroundColor: '#fff', image: <Image source={require('../images/onBoarding/step0.png')} style={{height: 200, width: 200, resizeMode: 'contain'}}/>, title: 'Bienvenido a Geometriapp', subtitle: 'Una aplicación que te ayudará conocer los principios de la geometría y a calcular distintas fórmulas' },
              { backgroundColor: '#fff', image: <Image source={require('../images/onBoarding/step1.png')} style={{height: 300, width: 200, resizeMode: 'contain'}}/>, title: 'Abre el menú', subtitle: 'Abre el menú para buscar la figura geométrica que deseas' },
              { backgroundColor: '#fff', image: <Image source={require('../images/onBoarding/step2.png')} style={{height: 300, width: 200, resizeMode: 'contain'}}/>, title: 'Selecciona la figura', subtitle: 'Geometriapp cuenta con alrededor de 10 figuras seleccionables' },
              { backgroundColor: '#fff', image: <Image source={require('../images/onBoarding/step3.png')} style={{height: 250, width: 250, resizeMode: 'contain'}}/>, title: 'Mira las fórmulas y notas importantes', subtitle: 'Cada figura cuenta con algunas fórmulas y notas, selecciona una fórmula si deseas usar su calculadora' },
              { backgroundColor: '#fff', image: <Image source={require('../images/onBoarding/step4.png')} style={{height: 300, width: 200, resizeMode: 'contain'}}/>, title: 'Calcula fórmulas', subtitle: 'Ingresa los valores solicitados y podrás ver el resultado y procedimiento' },                                         
            ]}
            onEnd={this.done()}
          />
        );
    }

    done() {
      // this.setState({Done: true})
    }
};

const maxWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
  
});

module.exports = onBoardingView;
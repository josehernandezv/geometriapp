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

import {  TYPO, COLOR } from 'react-native-material-design';
import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Button, Icon } from 'native-base';


class welcomeView extends Component {
    render() {
        maxWith = Dimensions.get('window').width;
        return (
          <View style={styles.container}>
          <Container>
                <Content>
                    <Card >
                          <CardItem>
                            <Body>
                                <Image style={styles.cover} source={require('../images/labmate.jpg')} >
                                  <View style={styles.coverContent}>
                                    <Text style={[TYPO.paperFontTitle, COLOR.googleGrey100]}>LABORATORIO DE MATEMÁTICAS</Text>   
                                  </View>
                                </Image>

                                <Text>
                                    El Laboratorio de Matemáticas da la oportunidad a la comunidad de aprender matemáticas de una manera divertida y didáctica, por medio del juego que facilite una atmósfera de aprendizaje y enseñanza.
                                </Text>
                                <Button transparent onPress={() => this.visitPage()}>
                                  <Text style={[TYPO.Button, COLOR.googleBlue500]} >Visitar página</Text>
                                </Button>
                            </Body>
                        </CardItem>
                        
                   </Card>
                </Content>
            </Container>
            </View>
        );
    }

    visitPage() {
      var url = 'http://www.so.ucr.ac.cr/laboratorio-de-matematicas';
      // Linking.openURL(url).catch(err => console.error('An error occurred', err));
      Linking.openURL(url);
      
    }
};

const maxWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:70,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  cover: {
    resizeMode: 'contain',
    height: 150,
    width: maxWith - 30
  },
  coverContent: {
    alignSelf: 'stretch',
    paddingTop: 100,
    paddingLeft: 5
  },
  cardMedia: {
    paddingLeft: 0
  }
});

module.exports = welcomeView;
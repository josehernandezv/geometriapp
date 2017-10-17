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
                    <Card>
                        <CardItem header>
                          <Text style={[TYPO.paperFontTitle, COLOR.paperBlueGrey800]}>Sobre Geometriapp</Text>   
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>
                              Geometriapp es una aplicación móvil cuyo propósito es enseñar sobre los principios de la geometría. Fue desarrollada en la Universidad de Costa Rica, Sede de Occidente, como proyecto de TCU en el Laboratorio de Matemáticas.
                            </Text>
                          </Body>
                        </CardItem>
                    </Card>

                    <Card>
                      <CardItem cardBody>
                          <Image source={require('../images/labmate.jpg')} style={{height: 150, width: null, flex: 1}}>
                          {/*<Image style={styles.cover} source={require('../images/labmate.jpg')} >*/}
                            <View style={styles.coverContent}>
                              <Text style={[TYPO.paperFontTitle, COLOR.googleGrey100]}>LABORATORIO DE MATEMÁTICAS</Text>   
                            </View>
                          </Image>
                      </CardItem>
                      <CardItem>
                          <Body>
                            <Text>
                                El Laboratorio de Matemáticas da la oportunidad a la comunidad de aprender matemáticas de una manera divertida y didáctica, por medio del juego que facilite una atmósfera de aprendizaje y enseñanza.
                            </Text>
                          </Body>                            
                      </CardItem>
                      <CardItem>
                        <Left>
                          <Button transparent onPress={() => Linking.openURL('http://www.so.ucr.ac.cr/laboratorio-de-matematicas')}>
                            <Text style={[TYPO.Button, COLOR.googleBlue500]} >VISITAR PÁGINA</Text>
                          </Button>
                        </Left>
                      </CardItem>
                   </Card>
                   
                   <Card>
                      <CardItem cardBody>
                          <Image source={require('../images/tcu.jpg')} style={{height: 150, width: null, flex: 1}}>
                          {/*<Image style={styles.cover} source={require('../images/labmate.jpg')} >*/}
                            <View style={styles.coverContent}>
                              <Text style={[TYPO.paperFontTitle, COLOR.googleGrey100]}>TRABAJO COMUNAL UNIVERSITARIO</Text>   
                            </View>
                          </Image>
                      </CardItem>
                      <CardItem>
                          <Body>
                            <Text>
                                Es una actividad universitaria interdisciplinaria realizada por estudiantes y docentes, quienes interactúan con las comunidades de una manera dinámica y crítica de modo que contribuyen a la atención y resolución de los problemas concretos que sufre la sociedad costarricense.
                            </Text>
                          </Body>                            
                      </CardItem>
                      <CardItem>
                        <Left>
                          <Button transparent onPress={() => Linking.openURL('http://www.so.ucr.ac.cr/trabajo-comunal-universitario')}>
                            <Text style={[TYPO.Button, COLOR.googleBlue500]} >VISITAR PÁGINA</Text>
                          </Button>
                        </Left>
                      </CardItem>
                   </Card>

                   <Card>
                      <CardItem cardBody>
                          <Image source={require('../images/sede.jpg')} style={{height: 150, width: null, flex: 1}}>
                          {/*<Image style={styles.cover} source={require('../images/labmate.jpg')} >*/}
                            <View style={styles.coverContent}>
                              <Text style={[TYPO.paperFontTitle, COLOR.googleGrey100]}>UNIVERSIDAD DE COSTA RICA SEDE DE OCCIDENTE</Text>   
                              {/*<Text style={[TYPO.paperFontTitle, COLOR.googleGrey100]}></Text> */}
                            </View>
                          </Image>
                      </CardItem>
                      <CardItem>
                          <Body>
                            <Text>
                              La Sede de Occidente, ubicada en San Ramón de Alajuela, a 59 km de San José, fue fundada en abril de 1968 y es la más desarrollada de la Universidad de Costa Rica. Cuenta con una población de más de 2820 estudiantes. La Sede de Occidente cuenta con los recintos de San Ramón y de Grecia.                              
                            </Text>
                          </Body>                            
                      </CardItem>
                      <CardItem>
                        <Left>
                          <Button transparent onPress={() => Linking.openURL('http://www.so.ucr.ac.cr/')}>
                            <Text style={[TYPO.Button, COLOR.googleBlue500]} >VISITAR PÁGINA</Text>
                          </Button>
                        </Left>
                      </CardItem>
                   </Card>
                      
                   <Card>
                     <CardItem>
                        <Body>
                          <Image source={require('../images/tcu_logo.png')} style={{height: 150, width: 150, alignSelf: "center" }}/>                          
                        </Body>
                      </CardItem>
                   </Card>

                   <Card>
                     <CardItem>
                        <Body>
                          <Image source={require('../images/ucr_logo.png')} style={{height: 150, width: maxWith, alignSelf: "center" }}/>                          
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
      Linking.openURL(url);
      
    }
};

const maxWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:70,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#ECECEC',
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
    paddingLeft: 16
  },
  cardMedia: {
    paddingLeft: 0
  }
});

module.exports = welcomeView;
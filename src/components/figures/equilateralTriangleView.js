'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import {  TYPO, COLOR } from 'react-native-material-design';

import { 
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Icon
} from 'native-base';

class equilateralTriangleView extends Component {

    openView(name, title) {
      this.props.navigator.push({
          name: name,
          title: title,
          passProps: {}
      })
    }

    render() {
        return (
           <Container style={{backgroundColor: '#FFFFFF'}}>
                <Content>
                <View style={styles.container}>
                    <Image style={styles.image}  source={require('../../images/figures/equilateralTriangle.png')} />
                    <View style={styles.formulas}>
                      <Text style={[TYPO.paperFontDisplay1, COLOR.paperGrey900]}>Fórmulas</Text>   

                      <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('equilateralTriangleAreaView', 'Área del triángulo equilátero')}>
                        <View style={styles.formula}>
                          <View style={{flex: 2}}>
                            <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Área:</Text>   
                          </View>
                          <View style={{flex: 3}}>
                            <Image style={{height: 60, width: 120, resizeMode: 'contain'}} source={require('../../images/formulas/triangle/equilateral/area.png')} />                                  
                          </View>   
                        </View>
                      </TouchableHighlight>

                      <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('equilateralTrianglePerimeterView', 'Perímetro del triángulo equilátero')}>
                        <View style={styles.formula}>
                          <View style={{flex: 2}}>
                            <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Perímetro:</Text>   
                          </View>
                          <View style={{flex: 3}}>
                            <Image style={{height: 30, width: 100, resizeMode: 'contain'}} source={require('../../images/formulas/triangle/equilateral/perimeter.png')} />                                    
                          </View>   
                        </View>
                      </TouchableHighlight>

                      <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('equilateralTriangleAltitudeView', 'Altura del triángulo equilátero')}>
                        <View style={styles.formula}>
                          <View style={{flex: 2}}>
                            <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Altura:</Text>   
                          </View>
                          <View style={{flex: 3}}>
                            <Image style={{height: 60, width: 100, resizeMode: 'contain'}} source={require('../../images/formulas/triangle/equilateral/altitude.png')} />                                                                
                          </View>   
                        </View>
                      </TouchableHighlight>
                    </View>
                    <Card>
                      <CardItem header>
                          <Text style={TYPO.paperFontHeadline}>Notas importantes</Text>
                      </CardItem>
                      <CardItem>
                          <Body>
                              <Text>
                              El polígono regular con menor número de lados (n = 3) es el triángulo equilátero. Si l es la medida del lado, se pueden enumerar las siguientes características:
                              </Text>
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  Cada ángulo central mide 
                              </Text>
                              <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/triangle/note1.png')} />
                              
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  Cada ángulo externo mide 
                              </Text>
                              <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/triangle/note1.png')} />
                              
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  Cada ángulo interno mide 
                              </Text>
                              <Image style={{height: 50, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/triangle/note2.png')} />
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  El perímetro es
                              </Text>
                              <Image style={{height: 40, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/triangle/note3.png')} />
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  El semiperímetro es
                              </Text>
                              <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/triangle/note4.png')} />
                          </Body>
                      </CardItem>
                      <CardItem>                             
                          <Body>
                              <Text>
                                  Considere la siguiente imágen
                              </Text>
                              <Image style={styles.image} source={require('../../images/notes/triangle/triangle.png')} />
                              <Text>
                                  Si G es el centro del triángulo equilátero ∆ABD y E es el punto medio del lado AB, entonces m∠BDE = m∠GBE = 30° y m∠BGE = m∠EBD = 60°.
                              </Text>
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  La altura mide
                              </Text>
                              <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/triangle/note5.png')} />
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  La medida de la altura es igual a la suma de las medidas del radio y la apotema.
                              </Text>
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  La medida del radio es el doble de la medida de la apotema.
                              </Text>
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  La medida de la apotema es
                              </Text>
                              <Image style={{height: 60, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/triangle/note6.png')} />
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  La medida del radio es
                              </Text>
                              <Image style={{height: 50, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/triangle/note7.png')} />
                          </Body>
                      </CardItem>
                      <CardItem>
                          <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                          <Body>
                              <Text>
                                  El área es
                              </Text>
                              <Image style={{height: 60, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/triangle/note8.png')} />
                          </Body>
                      </CardItem>
                      
                  </Card>
                </View>
            </Content>
          </Container>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
    paddingTop: 90,
    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  },
  formulas:{
    padding: 40,    
    paddingTop: 30,
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column'
  },
  formula: {
    paddingTop:30,
    paddingBottom:10,
    // flex:1,
    alignSelf: 'center',    
    // height: 150,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  }
});

module.exports = equilateralTriangleView;
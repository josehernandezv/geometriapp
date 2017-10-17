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

import {  
    TYPO, 
    COLOR 
} from 'react-native-material-design';

import { 
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Icon
} from 'native-base';

class hexagonView extends Component {

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
                        <Image style={styles.image}  source={require('../../images/figures/hexagon.png')} />
                        <View style={styles.formulas}>
                        <Text style={[TYPO.paperFontDisplay1, COLOR.paperGrey900]}>Fórmulas</Text>   

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('hexagonAreaView', 'Área del hexágono')}>
                            <View style={styles. formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Área:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Image style={{height: 30, width: 120, resizeMode: 'contain'}} source={require('../../images/formulas/hexagon/area.png')} />                                                                                                                                     
                            </View>   
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('hexagonPerimeterView', 'Perímetro del hexágono')}>
                            <View style={styles.formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Perímetro:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Image style={{height: 30, width: 120, resizeMode: 'contain'}} source={require('../../images/formulas/hexagon/perimeter.png')} />                                                                                                                                     
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
                                    El polígono regular de 6 lados de medida l cumple con las siguientes características
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        Cada ángulo central mide 
                                    </Text>
                                    <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/hexagon/note1.png')} />
                                    
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        Cada ángulo externo mide 
                                    </Text>
                                    <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/hexagon/note1.png')} />
                                    
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        Cada ángulo interno mide 
                                    </Text>
                                    <Image style={{height: 50, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/hexagon/note2.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        El perímetro es
                                    </Text>
                                    <Image style={{height: 40, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/hexagon/note3.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        El semiperímetro es
                                    </Text>
                                    <Image style={{height: 40, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/hexagon/note4.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>                             
                                <Body>
                                    <Text>
                                        Considere la siguiente imágen
                                    </Text>
                                    <Image style={styles.image} source={require('../../images/notes/hexagon/hexagon.png')} />
                                    <Text>
                                        Si G es el centro del hexágono regular ABCDEF y M es el punto medio del lado AB, entonces ∆BGA es equilátero y por lo tanto m∠MGB = 30°.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        La medida del radio es igual a la medida del lado
                                    </Text>
                                    <Image style={{height: 40, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/hexagon/note5.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        La medida de la apotema es
                                    </Text>
                                    <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/hexagon/note6.png')} />
                                    <Text>
                                        por ser la altura del triángulo equilátero.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        El área es
                                    </Text>
                                    <Image style={{height: 50, width: 250, resizeMode: 'contain'}} source={require('../../images/notes/hexagon/note7.png')} />
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

module.exports = hexagonView;
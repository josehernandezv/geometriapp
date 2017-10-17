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

class squareView extends Component {

    openView(name, title) {
      this.props.navigator.push({
          name: name,
          title: title,
          passProps: {}
      })
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <Image style={styles.image}  source={require('../../images/figures/square.png')} />
                        <View style={styles.formulas}>
                        <Text style={[TYPO.paperFontDisplay1, COLOR.paperGrey900]}>Fórmulas</Text>   

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('squareAreaView', 'Área del cuadrado')}>
                            <View style={styles. formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Área:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Image style={{height: 30, width: 100, resizeMode: 'contain'}} source={require('../../images/formulas/square/area.png')} />                                
                            </View>   
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('squarePerimeterView', 'Perímetro del cuadrado')}>
                            <View style={styles.formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Perímetro:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Image style={{height: 30, width: 100, resizeMode: 'contain'}} source={require('../../images/formulas/square/perimeter.png')} />                                                                
                            </View>   
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('squareDiagonalView', 'Diagonal del cuadrado')}>
                            <View style={styles.formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Diagonal:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Image style={{height: 40, width: 100, resizeMode: 'contain'}} source={require('../../images/formulas/square/diagonal.png')} />                                                                                                
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
                                    El cuadrilátero regular es el cuadrado. Si la medida de cada lado es l, entonces se tienen las siguientes características para este polígono.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        Cada ángulo central mide 
                                    </Text>
                                    <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/square/note1.png')} />
                                    
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        Cada ángulo externo mide 
                                    </Text>
                                    <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/square/note1.png')} />
                                    
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        Cada ángulo interno mide 
                                    </Text>
                                    <Image style={{height: 50, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/square/note2.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        El perímetro es
                                    </Text>
                                    <Image style={{height: 40, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/square/note3.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        El semiperímetro es
                                    </Text>
                                    <Image style={{height: 40, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/square/note4.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>                             
                                <Body>
                                    <Text>
                                        Considere la siguiente imágen
                                    </Text>
                                    <Image style={styles.image} source={require('../../images/notes/square/square.png')} />
                                    <Text>
                                        Si G es el centro del cuadrado ∎ABCD y E es el punto medio del lado AB entonces m∠BGE = m∠ABD = 45°.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        La diagonal mide
                                    </Text>
                                    <Image style={{height: 40, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/square/note5.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        La medida de la apotema es
                                    </Text>
                                    <Image style={{height: 50, width: 100, resizeMode: 'contain'}} source={require('../../images/notes/square/note6.png')} />
                                    <Text>
                                        dado que 
                                    </Text>
                                    <Image style={{height: 40, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/square/note7.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        La medida del radio es
                                    </Text>
                                    <Image style={{height: 50, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/square/note8.png')} />
                                    <Text>
                                        dado que 
                                    </Text>
                                    <Image style={{height: 50, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/square/note9.png')} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" style={{color: '#8A8A8A'}} />                                
                                <Body>
                                    <Text>
                                        El área es 
                                    </Text>
                                    <Image style={{height: 40, width: 200, resizeMode: 'contain'}} source={require('../../images/notes/square/note10.png')} />
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

module.exports = squareView;
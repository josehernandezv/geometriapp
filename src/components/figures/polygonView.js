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
                        <Card>
                            <CardItem header>
                                <Text style={TYPO.paperFontHeadline}>Notas importantes</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                    Cualquier figura geométrica cuyos lados y ángulos interiores sean iguales entre sí es denominada Polígono Regular.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Text style={TYPO.paperFontBody2}>Propiedades</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" />                                
                                <Body>
                                    <Text>
                                        Los polígonos regulares son polígonos equiláteros, puesto que todos sus lados son de la misma medida.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" />
                                <Body>
                                    <Text>
                                        Los polígonos regulares son equiangulares, puesto que todos sus ángulos interiores tienen la misma medida.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-arrow-forward" />
                                <Body>
                                    <Text>
                                        Los polígonos regulares se pueden inscribir en una circunferencia.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Body>
                                    <Text>
                                        Todos los polígonos regulares comparten las mismas fórmulas de área y perímetro.
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <View style={styles.formulas}>
                        <Text style={[TYPO.paperFontDisplay1, COLOR.paperGrey900]}>Fórmulas</Text>   

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('polygonAreaView', 'Área del polígono')}>
                            <View style={styles. formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Área:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Image style={{height: 60, width: 120, resizeMode: 'contain'}} source={require('../../images/formulas/polygon/area.png')} />                                                                                                                                     
                            </View>   
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('polygonPerimeterView', 'Perímetro del polígono')}>
                            <View style={styles.formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Perímetro:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Image style={{height: 30, width: 120, resizeMode: 'contain'}} source={require('../../images/formulas/polygon/perimeter.png')} />                                                                                                                                     
                            </View>   
                            </View>
                        </TouchableHighlight>

                        </View>
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
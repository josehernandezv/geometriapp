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

import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Button, Icon, Right, List, ListItem, Separator } from 'native-base';


class trapezoidView extends Component {

    openView(name, title) {
      this.props.navigator.push({
          name: name,
          title: title,
          passProps: {}
      })
    }

    render() {
        return (
            <View style={styles.container}>
              <Container>
                <Content>
                  <List>
                    <ListItem itemHeader first>
                      <Text>Seleccione una opción</Text>
                    </ListItem>
                    <ListItem onPress={() => this.openView('RectangleTrapezoidView', 'Trapecio Rectángulo')}>
                      <Thumbnail square size={100} style={StyleSheet.flatten(styles.thumbnail)} source={require('../../images/figures/rectangleTrapezoid.png')} />
                      <Body>
                          <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey900]}>Trapecio Rectángulo</Text>
                          {/*<Text note>Todos los lados miden lo mismo</Text>*/}
                      </Body>
                    </ListItem>
                    <ListItem onPress={() => this.openView('IsoscelesTrapezoidView', 'Trapecio Isósceles')}>
                      <Thumbnail square size={100} style={StyleSheet.flatten(styles.thumbnail)} source={require('../../images/figures/isoscelesTrapezoid.png')} />
                      <Body>
                          <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey900]}>Trapecio Isósceles</Text>
                      </Body>
                    </ListItem>
                    <ListItem onPress={() => this.openView('ScaleneTrapezoidView', 'Trapecio Escaleno')}>
                      <Thumbnail square size={100} style={StyleSheet.flatten(styles.thumbnail)} source={require('../../images/figures/scaleneTrapezoid.png')} />
                      <Body>
                          <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey900]}>Trapecio Escaleno</Text>
                      </Body>
                    </ListItem>
                  </List>
                </Content>
              </Container>
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:70,
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    height: 90,
    width: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 10
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
  }
});

module.exports = trapezoidView;
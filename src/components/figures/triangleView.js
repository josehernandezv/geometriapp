'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {  TYPO, COLOR } from 'react-native-material-design';

import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Button, Icon, Right, List, ListItem, Separator } from 'native-base';


class triangleView extends Component {

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
                    <ListItem onPress={() => this.openView('equilateralTriangleView', 'Triángulo Equilátero')}>
                      <Thumbnail square size={100} style={StyleSheet.flatten(styles.thumbnail)} source={require('../../images/figures/equilateralTriangle.png')} />
                      <Body>
                          <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey900]}>Triángulo Equilátero</Text>
                          {/*<Text note>Todos los lados miden lo mismo</Text>*/}
                      </Body>
                    </ListItem>
                    <ListItem onPress={() => this.openView('isoscelesTriangleView', 'Triángulo Isósceles')}>
                      <Thumbnail square size={100} style={StyleSheet.flatten(styles.thumbnail)} source={require('../../images/figures/isoscelesTriangle.png')} />
                      <Body>
                          <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey900]}>Triángulo Isósceles</Text>
                      </Body>
                    </ListItem>
                    <ListItem onPress={() => this.openView('scaleneTriangleView', 'Triángulo Escaleno')}>
                      <Thumbnail square size={100} style={StyleSheet.flatten(styles.thumbnail)} source={require('../../images/figures/scaleneTriangle.png')} />
                      <Body>
                          <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey900]}>Triángulo Escaleno</Text>
                      </Body>
                    </ListItem>
                  </List>
                </Content>
              </Container>
                  {/*<Card>
                    <CardItem>
                        <Left>
                          <Image style={styles.image}  source={require('../../images/figures/circle.png')} />
                        </Left>
                        <Right>
                          <Text style={[TYPO.paperFontDisplay1, COLOR.paperGrey900]}>Fórmulas</Text>
                        </Right>
                    </CardItem>
                  </Card>*/}
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    paddingTop:70,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    height: 100,
    width: 100,
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

module.exports = triangleView;
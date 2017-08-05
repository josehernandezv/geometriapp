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
    Content
} from 'native-base';

class ovalView extends Component {

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
                        <Image style={styles.image}  source={require('../../images/figures/oval.png')} />
                        <View style={styles.formulas}>
                        <Text style={[TYPO.paperFontDisplay1, COLOR.paperGrey900]}>Fórmulas</Text>   

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('ovalAreaView', 'Área del óvalo')}>
                            <View style={styles. formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Área:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey900]}>π x r1 x r2</Text>   
                            </View>   
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('ovalPerimeterView', 'Perímetro del óvalo')}>
                            <View style={styles.formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Perímetro:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Text style={[TYPO.paperFontSubhead, COLOR.paperGrey900]}>π x [3 x (r1 + r2) </Text>   
                                <Text style={[TYPO.paperFontSubhead, COLOR.paperGrey900]}>- √((3r1 + r2)(r1 + 3r2))]</Text>   
                            </View>   
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('ovalDiagonalView', 'Diámetros del óvalo')}>
                            <View style={styles.formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Diámetro:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Text style={[TYPO.paperFontSubhead, COLOR.paperGrey900]}>D1 = 2  x r1</Text>  
                                <Text style={[TYPO.paperFontSubhead, COLOR.paperGrey900]}>D2 = 2  x r2</Text>  
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
    padding: 40,
    paddingTop: 90,
    backgroundColor: '#F5FCFF',
  },
  image: {
    height: 200,
    width: 300,
    alignSelf: 'center'
  },
  formulas:{
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

module.exports = ovalView;
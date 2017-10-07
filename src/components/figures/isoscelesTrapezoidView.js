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

class isoscelesTrapezoidView extends Component {

    openView(name, title) {
      this.props.navigator.push({
          name: name,
          title: title,
          passProps: {}
      })
    }

    render() {
        return (
            <Container style={{backgroundColor: '#F5FCFF'}}>
                <Content>
                    <View style={styles.container}>
                        <Image style={styles.image}  source={require('../../images/figures/isoscelesTrapezoid.png')} />
                        <View style={styles.formulas}>
                        <Text style={[TYPO.paperFontDisplay1, COLOR.paperGrey900]}>Fórmulas</Text>   

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('trapezoidAreaView', 'Área del trapecio')}>
                            <View style={styles. formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Área:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey900]}>h x (B + b / 2)</Text>   
                            </View>   
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('trapezoidPerimeterView', 'Perímetro del trapecio')}>
                            <View style={styles.formula}>
                            <View style={{flex: 2}}>
                                <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Perímetro:</Text>   
                            </View>
                            <View style={{flex: 3}}>
                                <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey900]}>a + b + c + d</Text>   
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

module.exports = isoscelesTrapezoidView;
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

class circleView extends Component {

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
                <Image style={styles.image}  source={require('../../images/figures/circle.png')} />
                <View style={styles.formulas}>
                  <Text style={[TYPO.paperFontDisplay1, COLOR.paperGrey900]}>Fórmulas</Text>   

                  <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('circleAreaView', 'Área del círculo')}>
                    <View style={styles.formula}>
                      <View style={{flex: 2}}>
                        <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Área:</Text>
                      </View>
                      <View style={{flex: 3}}>
                         <Image style={{height: 40, width: 100, resizeMode: 'contain'}} source={require('../../images/formulas/circle/area.png')} />                                  
                      </View>   
                    </View>
                  </TouchableHighlight>

                  <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('circlePerimeterView', 'Perímetro del círculo')}>
                    <View style={styles.formula}>
                      <View style={{flex: 2}}>
                        <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Perímetro:</Text>
                      </View>
                      <View style={{flex: 3}}>
                         <Image style={{height: 40, width: 120, resizeMode: 'contain'}} source={require('../../images/formulas/circle/perimeter.png')} />                                                          
                      </View>   
                    </View>
                  </TouchableHighlight>

                  <TouchableHighlight underlayColor={'transparent'} onPress={() => this.openView('circleDiameterView', 'Diámetro del círculo')}>
                    <View style={styles.formula}>
                      <View style={{flex: 2}}>
                        <Text style={[TYPO.paperFontTitle, COLOR.googleBlue500]}>Diámetro:</Text>
                      </View>
                      <View style={{flex: 3}}>
                         <Image style={{height: 35, width: 100, resizeMode: 'contain'}} source={require('../../images/formulas/circle/diameter.png')} />                                                          
                      </View>   
                    </View>
                  </TouchableHighlight>
                </View>
            </View>
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
    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 200,
    width: 200,
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

module.exports = circleView;
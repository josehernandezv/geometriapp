'use strinc'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  PropTypes,
  View,
  TouchableHighlight
} from 'react-native';

import { 
    Avatar,
    Drawer,
    Divider,
    COLOR,
    TYPO 
} from 'react-native-material-design';

import IIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';


class Menu extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeScene = (path, name) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: path
        });
        navigator.to(path, name);
        drawer.closeDrawer();
    };

    changeView(name, title) {
        this.props.navigator.replace({
            name: name,
            title: title,
            passProps: {}
        })
        this.props.drawer.closeDrawer();
        this.forceUpdate()
    }

    isCurrent(route) {
        if (this.props.navigator.getCurrentRoutes().pop().name == route) {
            return true;
        }
        return false;
    }

    getIconStyle(route) {
        if (this.props.navigator.getCurrentRoutes().pop().name == route) {
            return styles.iconActive;
        }
        return styles.icons;
    }

    getTextColor(route) {
        if (this.props.navigator.getCurrentRoutes().pop().name == route) {
            return COLOR.googleBlue500;
        }
        return COLOR.paperBlueGrey800;
    }
    
    render() {
        return (
            <Drawer theme='light' ref="drawer">
                <Drawer.Header image={<Image source={require('./../images/header.jpg')} />}>
                    <View style={styles.header}>
                        <Text style={[ COLOR.paperBlueGrey800, TYPO.paperFontHeadline, styles.headline]}>Figuras Geométricas</Text>
                    </View>
                </Drawer.Header>
                <View style={styles.container}>

                    <TouchableHighlight underlayColor={'transparent'} onPress={() => this.changeView('CircleView', 'Círculo')}>
                        <View style={styles.row}>
                            <MCIcon name="checkbox-blank-circle-outline" size={24} 
                             style={this.getIconStyle('CircleView')}/>
                            <Text style={[ this.getTextColor('CircleView'), TYPO.paperFontBody1, styles.text]}>Círculo</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor={'transparent'} onPress={() => this.changeView('TriangleView', 'Triángulo')}>
                        <View style={styles.row}>
                            <MCIcon name="triangle-outline" size={24} 
                             style={this.getIconStyle('TriangleView')}/>
                            <Text style={[ this.getTextColor('TriangleView'), TYPO.paperFontBody1, styles.text]}>Triángulo</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor={'transparent'} onPress={() => this.changeView('SquareView', 'Cuadrado')}>
                        <View style={styles.row}>
                            <MCIcon name="crop-square" size={24} 
                             style={this.getIconStyle('SquareView')}/>
                            <Text style={[ this.getTextColor('SquareView'), TYPO.paperFontBody1, styles.text]}>Cuadrado</Text>
                        </View>
                    </TouchableHighlight>

                </View>
                
            </Drawer>
        );
    }
    
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 80,
        // height: 400
    },
    headline: {
        marginTop: 20,
        fontWeight: '600'
    },
    text: {
        marginTop: 16,
        marginBottom: 16,
        paddingLeft: 16,
        fontWeight: '600'
    },
    row: {
        // flexWrap: 'wrap',  
        alignItems: 'flex-start',
        flexDirection:'row',
        // height: 48,
        // paddingTop: 8,
        // paddingBottom: 8,
        margin: 0
    },
    container: {
        // paddingLeft: 16,
        
    },
    icons: {
        color: "#546e7a",
        margin: 16
    }
    ,iconActive: {
        color: "#4285f4",
        margin: 16
    }
});

module.exports = Menu

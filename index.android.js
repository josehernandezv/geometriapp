/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  DrawerLayoutAndroid,
  StatusBar
} from 'react-native';

//components
const Welcome = require('./src/components/welcomeView');
const Toolbar = require('./src/components/Toolbar');
const Menu = require('./src/components/Menu');
const CircleView = require('./src/components/figures/circleView');
const TriangleView = require('./src/components/figures/triangleView');
const EquilateralTriangleView = require('./src/components/figures/equilateralTriangleView');
const ScaleneTriangleView = require('./src/components/figures/scaleneTriangleView');
const IsoscelesTriangleView = require('./src/components/figures/isoscelesTriangleView');
const SquareView = require('./src/components/figures/squareView');
const CircleAreaView = require('./src/components/figures/formulas/circle/circleAreaView');
const CirclePerimeterView = require('./src/components/figures/formulas/circle/circlePerimeterView');
const CircleDiameterView = require('./src/components/figures/formulas/circle/circleDiameterView');
const SquareAreaView = require('./src/components/figures/formulas/square/squareAreaView');
const SquarePerimeterView = require('./src/components/figures/formulas/square/squarePerimeterView');
const SquareDiagonalView = require('./src/components/figures/formulas/square/squareDiagonalView');

//class
export default class Geometriapp extends Component {

  constructor(props) {
		super(props);
		this.state = {
			drawer: null,
			navigator: null
		};
    this.openDrawer = this.openDrawer.bind(this);
	}

  static childContextTypes = {
		drawer: React.PropTypes.object,
		navigator: React.PropTypes.object
	};

	getChildContext = () => {
		return {
			drawer: this.state.drawer,
			navigator: this.state.navigator
		}
	};

	setDrawer = (drawer) => {
		this.setState({
			drawer
		});
	};

  openDrawer() {
      this.drawer.openDrawer();
  }

  renderScene = (route, navigator) => {
    switch (route.name) {
      case 'Welcome':
        return (
          <Welcome {...route.props} navigator={navigator} route={route}></Welcome>
        );
      case 'CircleView':
        return (
          <CircleView {...route.props} navigator={navigator} route={route}></CircleView>
        );
      case 'TriangleView':
        return (
          <TriangleView {...route.props} navigator={navigator} route={route}></TriangleView>
        );
      case 'SquareView':
        return (
          <SquareView {...route.props} navigator={navigator} route={route}></SquareView>
        );
      case 'circleAreaView':
        return (
          <CircleAreaView {...route.props} navigator={navigator} route={route}></CircleAreaView>
        );
      case 'circlePerimeterView':
        return (
          <CirclePerimeterView {...route.props} navigator={navigator} route={route}></CirclePerimeterView>
        );
      case 'circleDiameterView':
        return (
          <CircleDiameterView {...route.props} navigator={navigator} route={route}></CircleDiameterView>
        );
      case 'squareAreaView':
        return (
          <SquareAreaView {...route.props} navigator={navigator} route={route}></SquareAreaView>
        );
      case 'squarePerimeterView':
        return (
          <SquarePerimeterView {...route.props} navigator={navigator} route={route}></SquarePerimeterView>
        );
      case 'squareDiagonalView':
        return (
          <SquareDiagonalView {...route.props} navigator={navigator} route={route}></SquareDiagonalView>
        );
      case 'equilateralTriangleView':
        return (
          <EquilateralTriangleView {...route.props} navigator={navigator} route={route}></EquilateralTriangleView>
        );
      case 'scaleneTriangleView':
        return (
          <ScaleneTriangleView {...route.props} navigator={navigator} route={route}></ScaleneTriangleView>
        );
      case 'isoscelesTriangleView':
        return (
          <IsoscelesTriangleView {...route.props} navigator={navigator} route={route}></IsoscelesTriangleView>
        );
    }
  }


  render() {
    var navigationView = (
      //Here you can pass the navigator objects to your views to push/pop them and navigate
      <View>
        <Text>First View</Text>
        <Text>Second View</Text>
        <Text>Third View</Text>
      </View>
    );
    // const { drawer } = this.state;
    return (

      <DrawerLayoutAndroid
				drawerWidth={300}
        ref='drawer'
        style={{elevation: 16}}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => {
        if (this.getNavigator()) {
          return <Menu navigator={this.getNavigator()} drawer={this.drawer}/>
        }
        return null;
        }}
        
				ref={(_drawer) => this.drawer = _drawer}
			>
				{
          //drawer &&
         
              <Navigator ref="navigator"
                style={{backgroundColor: '#ffffff'}}
                initialRoute={{name:'Welcome', title: 'Geometriapp'}}
                renderScene={this.renderScene}
                configureScene={(route) => {
                  if(route.sceneConfig) {
                    return route.sceneConfig;
                  }
                  return Navigator.SceneConfigs.FloatFromRight;
                }}
                navigationBar={
                <Toolbar onIconPress={this.openDrawer} navigator={navigator} />
                } />
  
				}
			</DrawerLayoutAndroid>

    
  )}

  getNavigator(){
    return this.refs.navigator
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  },
  scene: {
		flex: 1,
		marginTop: 56
	}
});

AppRegistry.registerComponent('Geometriapp', () => Geometriapp);

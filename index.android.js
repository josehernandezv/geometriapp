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

//general views
const Welcome = require('./src/components/welcomeView');
const Toolbar = require('./src/components/Toolbar');
const Menu = require('./src/components/Menu');
const CircleView = require('./src/components/figures/circleView');
const TriangleView = require('./src/components/figures/triangleView');
const EquilateralTriangleView = require('./src/components/figures/equilateralTriangleView');
const ScaleneTriangleView = require('./src/components/figures/scaleneTriangleView');
const IsoscelesTriangleView = require('./src/components/figures/isoscelesTriangleView');
const SquareView = require('./src/components/figures/squareView');
const RectangleView = require('./src/components/figures/rectangleView');
const RhombusView = require('./src/components/figures/rhombusView');
const OvalView = require('./src/components/figures/ovalView');
const TrapezoidView = require('./src/components/figures/trapezoidView');
const ParallelogramView = require('./src/components/figures/parallelogramView');
const PentagonView = require('./src/components/figures/pentagonView');
const HexagonView = require('./src/components/figures/hexagonView');
// const HeptagonView = require('./src/components/figures/heptagonView');
// const OctagonView = require('./src/components/figures/octagonView');
// const NonagonView = require('./src/components/figures/nonagonView');
// const DecagonView = require('./src/components/figures/decagonView');

//formulas
//circle
const CircleAreaView = require('./src/components/figures/formulas/circle/circleAreaView');
const CirclePerimeterView = require('./src/components/figures/formulas/circle/circlePerimeterView');
const CircleDiameterView = require('./src/components/figures/formulas/circle/circleDiameterView');
//square
const SquareAreaView = require('./src/components/figures/formulas/square/squareAreaView');
const SquarePerimeterView = require('./src/components/figures/formulas/square/squarePerimeterView');
const SquareDiagonalView = require('./src/components/figures/formulas/square/squareDiagonalView');
//triangle
const EquilateralTriangleAreaView = require('./src/components/figures/formulas/triangle/equilateral/equilateralTriangleAreaView');
const EquilateralTrianglePerimeterView = require('./src/components/figures/formulas/triangle/equilateral/equilateralTrianglePerimeterView');
const EquilateralTriangleAltitudeView = require('./src/components/figures/formulas/triangle/equilateral/equilateralTriangleAltitudeView');
const IsoscelesTriangleAreaView = require('./src/components/figures/formulas/triangle/isosceles/isoscelesTriangleAreaView');
const IsoscelesTrianglePerimeterView = require('./src/components/figures/formulas/triangle/isosceles/isoscelesTrianglePerimeterView');
const IsoscelesTriangleAltitudeView = require('./src/components/figures/formulas/triangle/isosceles/isoscelesTriangleAltitudeView');
const ScaleneTriangleAreaView = require('./src/components/figures/formulas/triangle/scalene/scaleneTriangleAreaView');
const ScaleneTrianglePerimeterView = require('./src/components/figures/formulas/triangle/scalene/scaleneTrianglePerimeterView');
const ScaleneTriangleAltitudeView = require('./src/components/figures/formulas/triangle/scalene/scaleneTriangleAltitudeView');
//rectangle
const RectangleAreaView = require('./src/components/figures/formulas/rectangle/rectangleAreaView');
const RectanglePerimeterView = require('./src/components/figures/formulas/rectangle/rectanglePerimeterView');
const RectangleDiagonalView = require('./src/components/figures/formulas/rectangle/rectangleDiagonalView');
//rhoumbus
const RhombusAreaView = require('./src/components/figures/formulas/rhombus/rhombusAreaView');
const RhombusPerimeterView = require('./src/components/figures/formulas/rhombus/rhombusPerimeterView');
//oval
const OvalAreaView = require('./src/components/figures/formulas/oval/ovalAreaView');
const OvalDiameterView = require('./src/components/figures/formulas/oval/ovalDiameterView');
const OvalPerimeterView = require('./src/components/figures/formulas/oval/ovalPerimeterView');





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
      case 'equilateralTriangleAreaView':
        return (
          <EquilateralTriangleAreaView {...route.props} navigator={navigator} route={route}></EquilateralTriangleAreaView>
        );
      case 'equilateralTrianglePerimeterView':
        return (
          <EquilateralTrianglePerimeterView {...route.props} navigator={navigator} route={route}></EquilateralTrianglePerimeterView>
        );
      case 'equilateralTriangleAltitudeView':
        return (
          <EquilateralTriangleAltitudeView {...route.props} navigator={navigator} route={route}></EquilateralTriangleAltitudeView>
        );
      case 'isoscelesTriangleAreaView':
        return (
          <IsoscelesTriangleAreaView {...route.props} navigator={navigator} route={route}></IsoscelesTriangleAreaView>
        );
      case 'isoscelesTrianglePerimeterView':
        return (
          <IsoscelesTrianglePerimeterView {...route.props} navigator={navigator} route={route}></IsoscelesTrianglePerimeterView>
        );
      case 'isoscelesTriangleAltitudeView':
        return (
          <IsoscelesTriangleAltitudeView {...route.props} navigator={navigator} route={route}></IsoscelesTriangleAltitudeView>
        );
      case 'scaleneTriangleAreaView':
        return (
          <ScaleneTriangleAreaView {...route.props} navigator={navigator} route={route}></ScaleneTriangleAreaView>
        );
      case 'scaleneTrianglePerimeterView':
        return (
          <ScaleneTrianglePerimeterView {...route.props} navigator={navigator} route={route}></ScaleneTrianglePerimeterView>
        );
      case 'scaleneTriangleAltitudeView':
        return (
          <ScaleneTriangleAltitudeView {...route.props} navigator={navigator} route={route}></ScaleneTriangleAltitudeView>
        );
      case 'RectangleView':
        return (
          <RectangleView {...route.props} navigator={navigator} route={route}></RectangleView>
        );
      case 'RhombusView':
        return (
          <RhombusView {...route.props} navigator={navigator} route={route}></RhombusView>
        );
      case 'OvalView':
        return (
          <OvalView {...route.props} navigator={navigator} route={route}></OvalView>
        );
      case 'TrapezoidView':
        return (
          <TrapezoidView {...route.props} navigator={navigator} route={route}></TrapezoidView>
        );
      case 'ParallelogramView':
        return (
          <ParallelogramView {...route.props} navigator={navigator} route={route}></ParallelogramView>
        );
      case 'PentagonView':
        return (
          <PentagonView {...route.props} navigator={navigator} route={route}></PentagonView>
        );
      case 'HexagonView':
        return (
          <HexagonView {...route.props} navigator={navigator} route={route}></HexagonView>
        );
      case 'rectangleAreaView':
        return (
          <RectangleAreaView {...route.props} navigator={navigator} route={route}></RectangleAreaView>
        );
      case 'rectanglePerimeterView':
        return (
          <RectanglePerimeterView {...route.props} navigator={navigator} route={route}></RectanglePerimeterView>
        );
      case 'rectangleDiagonalView':
        return (
          <RectangleDiagonalView {...route.props} navigator={navigator} route={route}></RectangleDiagonalView>
        );
      case 'rhombusAreaView':
        return (
          <RhombusAreaView {...route.props} navigator={navigator} route={route}></RhombusAreaView>
        );
      case 'rhombusPerimeterView':
        return (
          <RhombusPerimeterView {...route.props} navigator={navigator} route={route}></RhombusPerimeterView>
        );
      case 'ovalAreaView':
        return (
          <OvalAreaView {...route.props} navigator={navigator} route={route}></OvalAreaView>
        );
      case 'ovalDiameterView':
        return (
          <OvalDiameterView {...route.props} navigator={navigator} route={route}></OvalDiameterView>
        );
      case 'ovalPerimeterView':
        return (
          <OvalPerimeterView {...route.props} navigator={navigator} route={route}></OvalPerimeterView>
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

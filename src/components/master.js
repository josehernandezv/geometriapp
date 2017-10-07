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
const Welcome = require('./welcomeView');
const OnBoarding = require('./onBoardingView');
const Toolbar = require('./Toolbar');
const Menu = require('./Menu');
const CircleView = require('./figures/circleView');
const TriangleView = require('./figures/triangleView');
const EquilateralTriangleView = require('./figures/equilateralTriangleView');
const ScaleneTriangleView = require('./figures/scaleneTriangleView');
const IsoscelesTriangleView = require('./figures/isoscelesTriangleView');
const SquareView = require('./figures/squareView');
const RectangleView = require('./figures/rectangleView');
const RhombusView = require('./figures/rhombusView');
const OvalView = require('./figures/ovalView');
const TrapezoidView = require('./figures/trapezoidView');
const RectangleTrapezoidView = require('./figures/rectangleTrapezoidView');
const IsoscelesTrapezoidView = require('./figures/isoscelesTrapezoidView');
const ScaleneTrapezoidView = require('./figures/scaleneTrapezoidView');
const ParallelogramView = require('./figures/parallelogramView');
const PentagonView = require('./figures/pentagonView');
const HexagonView = require('./figures/hexagonView');
const PolygonView = require('./figures/polygonView');

//formulas
//circle
const CircleAreaView = require('./figures/formulas/circle/circleAreaView');
const CirclePerimeterView = require('./figures/formulas/circle/circlePerimeterView');
const CircleDiameterView = require('./figures/formulas/circle/circleDiameterView');
//square
const SquareAreaView = require('./figures/formulas/square/squareAreaView');
const SquarePerimeterView = require('./figures/formulas/square/squarePerimeterView');
const SquareDiagonalView = require('./figures/formulas/square/squareDiagonalView');
//triangle
const EquilateralTriangleAreaView = require('./figures/formulas/triangle/equilateral/equilateralTriangleAreaView');
const EquilateralTrianglePerimeterView = require('./figures/formulas/triangle/equilateral/equilateralTrianglePerimeterView');
const EquilateralTriangleAltitudeView = require('./figures/formulas/triangle/equilateral/equilateralTriangleAltitudeView');
const IsoscelesTriangleAreaView = require('./figures/formulas/triangle/isosceles/isoscelesTriangleAreaView');
const IsoscelesTrianglePerimeterView = require('./figures/formulas/triangle/isosceles/isoscelesTrianglePerimeterView');
const IsoscelesTriangleAltitudeView = require('./figures/formulas/triangle/isosceles/isoscelesTriangleAltitudeView');
const ScaleneTriangleAreaView = require('./figures/formulas/triangle/scalene/scaleneTriangleAreaView');
const ScaleneTrianglePerimeterView = require('./figures/formulas/triangle/scalene/scaleneTrianglePerimeterView');
const ScaleneTriangleAltitudeView = require('./figures/formulas/triangle/scalene/scaleneTriangleAltitudeView');
//rectangle
const RectangleAreaView = require('./figures/formulas/rectangle/rectangleAreaView');
const RectanglePerimeterView = require('./figures/formulas/rectangle/rectanglePerimeterView');
const RectangleDiagonalView = require('./figures/formulas/rectangle/rectangleDiagonalView');
//rhoumbus
const RhombusAreaView = require('./figures/formulas/rhombus/rhombusAreaView');
const RhombusPerimeterView = require('./figures/formulas/rhombus/rhombusPerimeterView');
//oval
const OvalAreaView = require('./figures/formulas/oval/ovalAreaView');
const OvalDiameterView = require('./figures/formulas/oval/ovalDiameterView');
const OvalPerimeterView = require('./figures/formulas/oval/ovalPerimeterView');
//trapezoid
const TrapezoidAreaView = require('./figures/formulas/trapezoid/trapezoidAreaView');
const TrapezoidPerimeterView = require('./figures/formulas/trapezoid/trapezoidPerimeterView');
//parallelogram
const ParallelogramAreaView = require('./figures/formulas/parallelogram/parallelogramAreaView');
const ParallelogramPerimeterView = require('./figures/formulas/parallelogram/parallelogramPerimeterView');
//pentagon
const PentagonAreaView = require('./figures/formulas/pentagon/pentagonAreaView');
const PentagonPerimeterView = require('./figures/formulas/pentagon/pentagonPerimeterView');
//hexagon
const HexagonAreaView = require('./figures/formulas/hexagon/hexagonAreaView');
const HexagonPerimeterView = require('./figures/formulas/hexagon/hexagonPerimeterView');
//regular polygon
const PolygonAreaView = require('./figures/formulas/polygon/polygonAreaView');
const PolygonPerimeterView = require('./figures/formulas/polygon/polygonPerimeterView');

export default class master extends Component {
    
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
      case 'OnBoarding':
        return (
          <OnBoarding {...route.props} navigator={navigator} route={route}></OnBoarding>
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
      case 'RectangleTrapezoidView':
        return (
          <RectangleTrapezoidView {...route.props} navigator={navigator} route={route}></RectangleTrapezoidView>
        );
      case 'IsoscelesTrapezoidView':
        return (
          <IsoscelesTrapezoidView {...route.props} navigator={navigator} route={route}></IsoscelesTrapezoidView>
        );
      case 'ScaleneTrapezoidView':
        return (
          <ScaleneTrapezoidView {...route.props} navigator={navigator} route={route}></ScaleneTrapezoidView>
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
      case 'trapezoidAreaView':
        return (
          <TrapezoidAreaView {...route.props} navigator={navigator} route={route}></TrapezoidAreaView>
        );
      case 'trapezoidPerimeterView':
        return (
          <TrapezoidPerimeterView {...route.props} navigator={navigator} route={route}></TrapezoidPerimeterView>
        );
      case 'parallelogramAreaView':
        return (
          <ParallelogramAreaView {...route.props} navigator={navigator} route={route}></ParallelogramAreaView>
        );
      case 'parallelogramPerimeterView':
        return (
          <ParallelogramPerimeterView {...route.props} navigator={navigator} route={route}></ParallelogramPerimeterView>
        );
      case 'pentagonAreaView':
        return (
          <PentagonAreaView {...route.props} navigator={navigator} route={route}></PentagonAreaView>
        );
      case 'pentagonPerimeterView':
        return (
          <PentagonPerimeterView {...route.props} navigator={navigator} route={route}></PentagonPerimeterView>
        );
      case 'hexagonAreaView':
        return (
          <HexagonAreaView {...route.props} navigator={navigator} route={route}></HexagonAreaView>
        );
      case 'hexagonPerimeterView':
        return (
          <HexagonPerimeterView {...route.props} navigator={navigator} route={route}></HexagonPerimeterView>
        );
      case 'PolygonView':
        return (
          <PolygonView {...route.props} navigator={navigator} route={route}></PolygonView>
        );
      case 'polygonAreaView':
        return (
          <PolygonAreaView {...route.props} navigator={navigator} route={route}></PolygonAreaView>
        );
      case 'polygonPerimeterView':
        return (
          <PolygonPerimeterView {...route.props} navigator={navigator} route={route}></PolygonPerimeterView>
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

module.exports = master;

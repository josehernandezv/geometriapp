'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { 
    Container,
    Content, 
    Form, 
    Item,
    Input,
    Label,
    Button,
    Card,
    CardItem,
    Body,
    Toast
} from 'native-base';

import {  
    TYPO,
    COLOR
} from 'react-native-material-design';

class scaleneTriangleAreaView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            base: '' ,
            altitude: '',
            b: '' ,
            h: '',
            showResult: false
        };
    }

    calculate() {
        var base = this.state.base;
        var altitude = this.state.altitude;
        if (this.isNumeric(base) && this.isNumeric(altitude)) {
            if(!this.state.showResult) {
                this.setState({
                    showResult:true,
                    b: base,
                    h: altitude
                })                      
            } else {
                this.setState({b: base, h: altitude});
            }
        } else {
            Toast.show({
              text: 'Formato de número incorrecto',
              position: 'bottom',
              buttonText: 'Ok'
            });
            this.setState({base: '', altitude: ''});
        }
        
    }

    isNumeric(value) {
        var regex = /^[+-]?\d+(\.\d+)?$/;
        return regex.test(value);
    }

    roundNumber(value) {
        return Number(Math.round(value+'e2')+'e-2');
    }

    getResultView() {
        if (!this.state.showResult) {
            return null;
        }
        return (
            <Card height={300} alignItems='center'>
                <CardItem>
                    <View alignItems='center'>
                        <Text style={TYPO.paperFontHeadline}>(b x h) / 2</Text>
                        <Text style={TYPO.paperFontHeadline}> ({this.roundNumber(this.state.b)} x {this.roundNumber(this.state.h)})/2 </Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(this.state.b * this.state.h)} / 2</Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber((this.state.b * this.state.h) / 2)}</Text>                        
                    </View>
                </CardItem>
            </Card>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Base</Label>
                                <Input keyboardType='numeric'
                                value={this.state.base}
                                onChangeText={(base) => this.setState({base})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Altura</Label>
                                <Input keyboardType='numeric'
                                value={this.state.altitude}
                                onChangeText={(altitude) => this.setState({altitude})}/>
                            </Item>

                            <Button 
                            onPress={() => this.calculate()}
                            block rounded 
                            style={{backgroundColor:'#3399ff',marginTop: 30, marginBottom: 50}}>
                                <Text style={{color:'#F5FCFF'}}>Calcular</Text>
                            </Button>
                        </Form>
                        {this.getResultView()}
                    </Content>
                </Container>
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#F5FCFF',
  },
});
module.exports = scaleneTriangleAreaView;
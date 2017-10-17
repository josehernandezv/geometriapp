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

class trapezoidPerimeterView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            sideA: '' ,
            sideB: '',
            sideC: '',
            sideD: '',
            a: '' ,
            b: '',
            c: '',
            d: '',
            showResult: false
        };
    }

    calculate() {
        var sideA = this.state.sideA;
        var sideB = this.state.sideB;
        var sideC = this.state.sideC;
        var sideD = this.state.sideD;
        if (this.isNumeric(sideA) && this.isNumeric(sideB)) {
            if(!this.state.showResult) {
                this.setState({
                    showResult:true,
                    a: sideA,
                    b: sideB,
                    c: sideC,
                    d: sideD,
                })                      
            } else {
                this.setState({a: sideA, b: sideB, c: sideC, d: sideD});
            }
        } else {
            Toast.show({
              text: 'Formato de número incorrecto',
              position: 'bottom',
              buttonText: 'Ok'
            });
            this.setState({sideA: '', sideB: '', sideC: '', sideD: ''});
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
                        <Text style={TYPO.paperFontHeadline}>a + b + c + d</Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(this.state.a)} + {this.roundNumber(this.state.b)} + {this.roundNumber(this.state.c)} + {this.roundNumber(this.state.d)} </Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(parseFloat(this.state.a) + parseFloat(this.state.b) + parseFloat(this.state.c) + parseFloat(this.state.d))}</Text>                   
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
                                <Label>Lado A</Label>
                                <Input keyboardType='numeric'
                                value={this.state.sideA}
                                onChangeText={(sideA) => this.setState({sideA})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Lado B</Label>
                                <Input keyboardType='numeric'
                                value={this.state.sideB}
                                onChangeText={(sideB) => this.setState({sideB})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Lado C</Label>
                                <Input keyboardType='numeric'
                                value={this.state.sideC}
                                onChangeText={(sideC) => this.setState({sideC})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Lado D</Label>
                                <Input keyboardType='numeric'
                                value={this.state.sideD}
                                onChangeText={(sideD) => this.setState({sideD})}/>
                            </Item>
                            <Button 
                            onPress={() => this.calculate()}
                            block rounded 
                            style={{backgroundColor:'#41ADE7',marginTop: 30, marginBottom: 50}}>
                                <Text style={{color:'#FFFFFF'}}>Calcular</Text>
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
    backgroundColor: '#FFFFFF',
  },
});

module.exports = trapezoidPerimeterView;
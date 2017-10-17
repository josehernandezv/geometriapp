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

class scaleneTriangleAltitudeView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            sideA: '' ,
            sideB: '',
            sideC: '',
            a: '' ,
            b: '',
            c: '',
            showResult: false
        };
    }

    calculate() {
        var sideA = this.state.sideA;
        var sideB = this.state.sideB;
        var sideC = this.state.sideC;
        if (this.isNumeric(sideA) && this.isNumeric(sideB)) {
            if(!this.state.showResult) {
                this.setState({
                    showResult:true,
                    a: sideA,
                    b: sideB,
                    c: sideC
                })                      
            } else {
                this.setState({a: sideA, b: sideB, c: sideC});
            }
        } else {
            Toast.show({
              text: 'Formato de número incorrecto',
              position: 'bottom',
              buttonText: 'Ok'
            });
            this.setState({sideA: '', sideB: '', sideC: ''});
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
        var s = this.roundNumber((parseFloat(this.state.a) + parseFloat(this.state.b) + parseFloat(this.state.c))/2);
        var a = this.state.a;
        var b = this.state.b;
        var c = this.state.c;
        var x = this.roundNumber((s * (s-a) * (s-b) * (s-c)));
        return (
            <Card alignItems='center'>
                <CardItem>
                    <View alignItems='center'>
                        {/*<Text style={TYPO.paperFontHeadline}>(a x c) / b</Text>
                        <Text style={TYPO.paperFontHeadline}>({this.roundNumber(this.state.a)} x {this.roundNumber(this.state.c)}) / {this.roundNumber(this.state.b)} </Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(this.state.a * this.state.c)}  / {this.roundNumber(this.state.b)} </Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber((this.state.a * this.state.c) / this.state.b)}</Text>            */}

                        <Text style={TYPO.paperFontSubhead}>hl = 2/l x √(s(s-a)(s-b)(s-c))</Text>
                        <Text style={TYPO.paperFontHeadline}> </Text>
                        <Text style={TYPO.paperFontSubhead}>s = (a + b + c)/2</Text>
                        <Text style={TYPO.paperFontSubhead}>s = ({this.roundNumber(this.state.a)} + {this.roundNumber(this.state.b)} + {this.roundNumber(this.state.c)})/2</Text>
                        <Text style={TYPO.paperFontSubhead}>s = {this.roundNumber(parseFloat(this.state.a) + parseFloat(this.state.b) + parseFloat(this.state.c))}/2</Text>
                        <Text style={TYPO.paperFontHeadline}>s = {this.roundNumber((parseFloat(this.state.a) + parseFloat(this.state.b) + parseFloat(this.state.c))/2)}</Text>
                        <Text style={TYPO.paperFontHeadline}> </Text>
                        <Text style={TYPO.paperFontSubhead}>s(s-a)(s-b)(s-c)</Text>
                        <Text style={TYPO.paperFontSubhead}>{s}({s}-{a})({s}-{b})({s}-{c})</Text>
                        <Text style={TYPO.paperFontSubhead}>{s} x {s-a} x {s-b} x {s-c}</Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(s * (s-a) * (s-b) * (s-c))}</Text>
                        <Text style={TYPO.paperFontHeadline}> </Text>
                        <Text style={TYPO.paperFontSubhead}>ha = 2/a x √(s(s-a)(s-b)(s-c))</Text>
                        <Text style={TYPO.paperFontHeadline}>ha = 2/{a} x √{x}</Text>
                        <Text style={TYPO.paperFontHeadline}>ha = {this.roundNumber(2/a * Math.sqrt(x))}</Text>
                        <Text style={TYPO.paperFontHeadline}> </Text>
                        <Text style={TYPO.paperFontSubhead}>hb = 2/b x √(s(s-a)(s-b)(s-c))</Text>
                        <Text style={TYPO.paperFontHeadline}>hb = 2/{b} x √{x}</Text>
                        <Text style={TYPO.paperFontHeadline}>hb = {this.roundNumber(2/b * Math.sqrt(x))}</Text>
                        <Text style={TYPO.paperFontHeadline}> </Text>
                        <Text style={TYPO.paperFontSubhead}>hc = 2/c x √(s(s-a)(s-b)(s-c))</Text>
                        <Text style={TYPO.paperFontHeadline}>hc = 2/{c} x √{x}</Text>
                        <Text style={TYPO.paperFontHeadline}>hc = {this.roundNumber(2/c * Math.sqrt(x))}</Text>
                        


                        
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
                            <Button 
                            onPress={() => this.calculate()}
                            block rounded 
                            style={{backgroundColor:'#41ADE7',marginTop: 30, marginBottom: 50}}>
                                <Text style={{color:'#ffffff'}}>Calcular</Text>
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
    backgroundColor: '#ffffff',
  },
});

module.exports = scaleneTriangleAltitudeView;
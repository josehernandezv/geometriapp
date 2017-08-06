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

class ovalDiameterView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            sideA: '' ,
            sideB: '',
            a: '' ,
            b: '',
            showResult: false
        };
    }

    calculate() {
        var sideA = this.state.sideA;
        var sideB = this.state.sideB;
        if (this.isNumeric(sideA) && this.isNumeric(sideB)) {
            if(!this.state.showResult) {
                this.setState({
                    showResult:true,
                    a: sideA,
                    b: sideB
                })                      
            } else {
                this.setState({a: sideA, b: sideB});
            }
        } else {
            Toast.show({
              text: 'Formato de número incorrecto',
              position: 'bottom',
              buttonText: 'Ok'
            });
            this.setState({sideA: '', sideB: ''});
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
                        <Text style={TYPO.paperFontHeadline}>D1 = 2  x r1</Text>
                        <Text style={TYPO.paperFontHeadline}>D1 = 2 x {this.roundNumber(this.state.a)} </Text>                 
                        <Text style={TYPO.paperFontHeadline}>D1 = {this.roundNumber(2 * this.state.a)} </Text>             
                        <Text style={TYPO.paperFontHeadline}> </Text>
                        <Text style={TYPO.paperFontHeadline}>D2 = 2  x r2</Text>
                        <Text style={TYPO.paperFontHeadline}>D2 = 2 x {this.roundNumber(this.state.b)} </Text>                 
                        <Text style={TYPO.paperFontHeadline}>D2 = {this.roundNumber(2 * this.state.b)} </Text> 
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
                                <Label>Radio 1</Label>
                                <Input keyboardType='numeric'
                                value={this.state.sideA}
                                onChangeText={(sideA) => this.setState({sideA})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Radio 2</Label>
                                <Input keyboardType='numeric'
                                value={this.state.sideB}
                                onChangeText={(sideB) => this.setState({sideB})}/>
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

module.exports = ovalDiameterView;
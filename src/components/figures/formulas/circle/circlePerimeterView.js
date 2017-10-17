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

class circlePerimeterView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            radio: '' ,
            radius: '',
            showResult: false
        };
    }

    calculate() {
        var radio = this.state.radio;
        if (this.isNumeric(radio)) {
            this.state.radius = this.state.radio;
            if(!this.state.showResult) {
                this.setState({
                    showResult:true,
                    radius: this.state.radio
                })                      
            } else {
                this.setState({radius : this.state.radio})
            }
        } else {
            Toast.show({
              text: 'Formato de número incorrecto',
              position: 'bottom',
              buttonText: 'Ok'
            });
            this.setState({radio: ''});
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
                        <Text style={TYPO.paperFontHeadline}>2 x π x r</Text>
                        <Text style={TYPO.paperFontHeadline}>2 x 3.14 x {this.roundNumber(this.state.radius)}</Text>
                        <Text style={TYPO.paperFontHeadline}>{2 * 3.14} x {this.roundNumber(this.state.radius)}</Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(2 * 3.14 * this.state.radius)}</Text>                        
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
                                <Label>Radio</Label>
                                <Input keyboardType='numeric'
                                value={this.state.radio}
                                onChangeText={(radio) => this.setState({radio})}/>
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

module.exports = circlePerimeterView;
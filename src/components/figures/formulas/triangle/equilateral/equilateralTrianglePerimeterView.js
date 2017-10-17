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

class equilateralTrianglePerimeterView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            lado: '' ,
            side: '',
            showResult: false
        };
    }

    calculate() {
        var lado = this.state.lado;
        if (this.isNumeric(lado)) {
            this.state.side = this.state.lado;
            if(!this.state.showResult) {
                this.setState({
                    showResult:true,
                    side: this.state.lado
                })                      
            } else {
                this.setState({side : this.state.lado})
            }
        } else {
            Toast.show({
              text: 'Formato de número incorrecto',
              position: 'bottom',
              buttonText: 'Ok'
            });
            this.setState({lado: ''});
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
                        <Text style={TYPO.paperFontHeadline}>3 x l</Text>
                        <Text style={TYPO.paperFontHeadline}>3 x {this.roundNumber(this.state.side)}</Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(3 * this.state.side)}</Text>                        
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
                                <Label>Lado</Label>
                                <Input keyboardType='numeric'
                                value={this.state.lado}
                                onChangeText={(lado) => this.setState({lado})}/>
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

module.exports = equilateralTrianglePerimeterView;
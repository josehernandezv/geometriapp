'use strict'

import React, { Component } from 'react';
import { 
    AppRegistry,
    PropTypes,
    Text, 
    View,
} from 'react-native';

// import StatusBarAndroid from 'react-native-android-statusbar';
import { Toolbar as MaterialToolbar, COLOR } from 'react-native-material-design';



// const StatusBarAndroid = require('react-native-android-statusbar');

class Toolbar extends Component {

   isChild() {
       return this.props.navigator.getCurrentRoutes().length > 1;
   }

    render() {
        const navigator = this.props.navigator;
        const { onIconPress } = this.props;
        return (
            <MaterialToolbar
                title={this.props.navigator.getCurrentRoutes().pop().title}
                primary={'googleBlue'}
                icon={this.isChild() ? 'keyboard-backspace' : 'menu'}
                onIconPress={() => this.isChild() ? navigator.pop() : onIconPress()}
                actions={null}
                
            />
        );
    }
}

module.exports = Toolbar;

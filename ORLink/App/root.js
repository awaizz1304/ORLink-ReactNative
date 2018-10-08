import React, {Component} from 'react';
import {Text} from 'react-native'
import  {Provider}  from 'react-redux'


import App from '../App'
import  configureStore  from './Store/configureStore';
import { NavigationStack } from './Components/Navigation/NavigationStack';

// Passing in store configuration.
const store = configureStore()

export default class Root extends Component{
    componentDidMount () {
        
    }
    render () {
        return (
            <Provider store = {store}>
                <NavigationStack />
            </Provider>
        )
    }
}
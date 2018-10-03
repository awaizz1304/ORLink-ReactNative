import React, {Component} from 'react';
import {Text} from 'react-native'
import  {Provider}  from 'react-redux'


import App from '../App'
import { createStore } from '../store';

const store = createStore()

export default class Root extends Component{
    componentDidMount () {
        
    }
    render () {
        return (
            <Provider store = {store }>
                <App/>
            </Provider>
        )
    }
}
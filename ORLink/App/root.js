import React, {Component} from 'react';
import {Text} from 'react-native'
import  {Provider}  from 'react-redux'
import configureStore from '../store'

import App from '../App'

const store = configureStore()

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
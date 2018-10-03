/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import ClientLayer from './App/Components/Layers/ClientLayer'
import LandingPage from './App/Screens/LandingPage';

// Dummy Renders
import { Login } from './App/Screens/Login'
import { Signup } from './App/Screens/Signup'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstTimeLaunch : false
    }
  }
  componentDidMount(){
    ClientLayer.createInstance();
    ClientLayer.getInstance().Initialize(()=>{
      // Initialize Success

    },()=>{
      //Initialization Error
    })
  }
  render() {
    firstLaunch = this.state.firstTimeLaunch;
    return (
      // <Login/>
      <Signup/>
      // <LandingPage/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
// is called when the store value is changed i.e. when state is updated
const mapStateToProps = state =>{
  return {

  }
}
// connects the app with required actions
const mapDispatchToProps = dispatch =>{
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

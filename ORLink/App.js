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
import { actions } from './App/Components/Store/module';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loggedIn : true,
      appLaunchCount : 0,
      session : null
    }
  }
  componentDidMount(){
    ClientLayer.createInstance();
    ClientLayer.getInstance().InitializeWithCallBack(()=>{
      // Initialize Success
      ClientLayer.getInstance().getDataManager().GetValueForKey("AppLaunchCount",(value)=>{
        if(value == null){
          value = 0
        }
        value = parseInt(value)
        // this.setState({appLaunchCount : value})
        
        ClientLayer.getInstance().getDataManager().SaveValueForKey("AppLaunchCount",(value+1).toString())
        // Dispctch the action when app is launched with launch count
        this.props.AppLaunched(this.state.appLaunchCount)
      })
      ClientLayer.getInstance().getDataManager().GetValueForKey("Session",(value) => {
        this.setState({session : value})
        if(value != null){
          this.props.LoggedIn(this.state.session)
        }
      })
      
    },()=>{
      //Initialization Error
    })
  }
  renderFirstScreen = () => {
    if(this.state.appLaunchCount == 0){
      return(
        <LandingPage navigation = {this.props.navigation} />
      )
    }
    else{
      if(this.state.session == null){
        // go to login screen with navigation props
        return null
      }
      else{
        // go to home screen with navigation props
        return null
      }
    }
  }
  render() {
    firstLaunch = this.state.firstTimeLaunch;
    return (
       <this.renderFirstScreen />
    )
  }
}

// is called when the store value is changed i.e. when state is updated
const mapStateToProps = state =>{
  return {
      loggedIn: state.app.loggedIn
  }
}
// connects the app with required actions
const mapDispatchToProps = dispatch =>{
  return {
    AppLaunched : (launchCount) =>
      dispatch(actions.app.AppLaunched(launchCount)),
    
    LoggedIn : (session) => 
      dispatch(actions.user.Login(session))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
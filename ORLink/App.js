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

// Dummy Renders
import { Login } from './App/Screens/Login'
import { Signup } from './App/Screens/Signup'
import Session from './App/Components/Common/Session';
import WelcomeScreen from './App/Screens/WelcomeScreen';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      dataLoaded : false,
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
        this.setState({appLaunchCount : value})
        
        ClientLayer.getInstance().getDataManager().SaveValueForKey("AppLaunchCount",(value+1).toString())
        // Dispctch the action when app is launched with launch count
        this.props.AppLaunched(this.state.appLaunchCount)
      })
      ClientLayer.getInstance().getDataManager().GetValueForKey("Session",(value) => {
        if(value != null){
          sessionObj = new Session()
          sessionObj = JSON.parse(value)
          this.setState({session : sessionObj})
          this.props.LoggedIn(this.state.session)
        }
        else{
          // for testing
          sessionObj = new Session()
          sessionObj.sessionToken = "kknjkg78q9"
          sessionObj.userID = "1234"

          ClientLayer.getInstance().getDataManager().SaveValueForKey("Session",JSON.stringify(sessionObj))
        }
        this.setState({dataLoaded : true})
      })
      
    },()=>{
      //Initialization Error
    })
  }
  renderFirstScreen = () => {
    if(this.state.dataLoaded == false){
      return null;
    }
    if(this.state.appLaunchCount == 0){
      return(
        <LandingPage navigation = {this.props.navigation} />
      )
    }
    else{
      if(this.state.session == null){
        return(
          <Login navigation = {this.props.navigation}/>
        )
      }
      else{
        // go to home screen with navigation props
        return (
          <WelcomeScreen navigation = {this.props.navigation}/>
        )
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
  if(state.user.session != null){
    console.log(state.user.session.sessionToken)
  }
  
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
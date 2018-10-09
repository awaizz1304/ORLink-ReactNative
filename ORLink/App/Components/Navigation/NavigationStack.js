import React,{ Component,PropTypes } from 'react';
import { createStackNavigator } from 'react-navigation';

import LandingPage from '../../Screens/LandingPage';
import App from '../../../App';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import Home from '../../Screens/Home';
import CreateTeam from '../../Screens/CreateTeam';
import  Login  from "../../Screens/Login/Login";
import { Signup } from "../../Screens/Signup/Signup";
import Splash from '../../Screens/Splash/Splash'

export const NavigationStack = createStackNavigator({
    Splash: {screen:Splash},
    App : {screen: App},
    LandingPage : {screen: LandingPage},
    Login : {screen : Login},
    Signup : {screen : Signup},
    WelcomeScreen : {screen : WelcomeScreen},
    CreateTeam : {screen : CreateTeam},
    Home : {screen : Home}
},{
    headerMode : 'none',
    initialRouteName : 'Splash',
});



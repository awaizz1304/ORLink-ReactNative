import React,{ Component,PropTypes } from 'react';
import { createStackNavigator } from 'react-navigation';

import LandingPage from '../../Screens/LandingPage';
import App from '../../../App';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import Home from '../../Screens/Home';
import CreateTeam from '../../Screens/CreateTeam';

export const NavigationStack = createStackNavigator({
    App : {screen: App},
    LandingPage : {screen: LandingPage},
    WelcomeScreen : {screen : WelcomeScreen},
    CreateTeam : {screen : CreateTeam},
    Home : {screen : Home}
},{
    headerMode : 'none',
    initialRouteName : 'App',
});



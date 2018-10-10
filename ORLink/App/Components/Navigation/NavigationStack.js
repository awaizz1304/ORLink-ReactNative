import React,{ Component,PropTypes } from 'react';
import { createStackNavigator } from 'react-navigation';

import LandingPage from '../../Screens/LandingPage';
import App from '../../../App';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import Home from '../../Screens/Home';
import CreateTeam from '../../Screens/CreateTeam';
import { Login } from "../../Screens/Login";
import { Signup } from "../../Screens/Signup";
import InviteMember from '../../Screens/InviteMember';
import InviteComplete from '../../Screens/InviteComplete';

export const NavigationStack = createStackNavigator({
    App : {screen: App},
    LandingPage : {screen: LandingPage},
    Login : {screen : Login},
    Signup : {screen : Signup},
    WelcomeScreen : {screen : WelcomeScreen},
    CreateTeam : {screen : CreateTeam},
    InviteMemberScreen : {screen : InviteMember},
    InviteCompleteScreen : {screen : InviteComplete},
    Home : {screen : Home}
},{
    headerMode : 'none',
    initialRouteName : 'App',
});



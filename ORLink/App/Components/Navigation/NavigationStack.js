import React,{ Component,PropTypes } from 'react';
import { createStackNavigator } from 'react-navigation';

import LandingPage from '../../Screens/LandingPage';
// import App from '../../../App';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import Home from '../../Screens/Home';
import CreateTeam from '../../Screens/CreateTeam';
import InviteMember from '../../Screens/InviteMember';
import InviteComplete from '../../Screens/InviteComplete';
import  Login  from "../../Screens/Login/Login";
import { Signup } from "../../Screens/Signup/Signup";
import Splash from '../../Screens/Splash/Splash';
import Training from '../../Screens/Training';
import VideoPlayer from '../../Screens/VideoPlayer'
import ChangePassword from '../../Screens/ChangePassword';
import Team from '../../Screens/Team'

export const NavigationStack = createStackNavigator({
    Splash: {screen:Splash},
    // App : {screen: App},
    LandingPage : {screen: LandingPage},
    Login : {screen : Login},
    Signup : {screen : Signup},
    WelcomeScreen : {screen : WelcomeScreen},
    CreateTeam : {screen : CreateTeam},
    InviteMemberScreen : {screen : InviteMember},
    InviteCompleteScreen : {screen : InviteComplete},
    Home : {screen : Home},
    TrainingScreen : {screen : Training},
    VideoPlayerScreen : {screen : VideoPlayer},
    ChangePasswordScreen : {screen : ChangePassword},
    TeamScreen : {screen : Team}
},{
    headerMode : 'none',
    initialRouteName : 'TeamScreen',
});



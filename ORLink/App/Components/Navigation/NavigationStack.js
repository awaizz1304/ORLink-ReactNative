import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';

import LandingPage from '../../Screens/LandingPage';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import CreateTeam from '../../Screens/CreateTeam';
import InviteMember from '../../Screens/InviteMember';
import InviteComplete from '../../Screens/InviteComplete';
import  Login  from "../../Screens/Login/Login";
import Splash from '../../Screens/Splash/Splash';
import VideoPlayer from '../../Screens/VideoPlayer'
import ChangePassword from '../../Screens/ChangePassword';
import Signup from "../../Screens/Signup/Signup";
import HomeNavigator from '../../UIComponents/Navigation Bar/BottomNavigator'
import Team from '../../Screens/Team';

export const NavigationStack = StackNavigator({
    Splash: { screen: Splash },
    LandingPage : {screen: LandingPage},
    Login : {screen : Login},
    Signup : {screen : Signup},
    WelcomeScreen : {screen : WelcomeScreen},
    CreateTeam : {screen : CreateTeam},
    InviteMemberScreen : {screen : InviteMember},
    InviteCompleteScreen : {screen : InviteComplete},
    HomeNavigator : {screen : HomeNavigator},
    VideoPlayerScreen : {screen : VideoPlayer},
    ChangePasswordScreen : {screen : ChangePassword},
    TeamScreen : {screen : Team}
},{
    headerMode : 'none',
    initialRouteName : 'Splash',

});




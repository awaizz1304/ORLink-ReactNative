import React , {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,TouchableWithoutFeedback} from 'react-native';
import { WScale,HScale } from '../Modules/Multi-Resolution/MultiResolution'
import { getInitials } from '../Components/Utilities/Utilities';
import { InviteType } from '../Components/Services/DataService/DataModels/TeamMemberDataModel';
import { Switch } from 'react-native-switch';
import { isIphoneX } from "react-native-iphone-x-helper";
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


const TopComponent = ({heading,leftButton,rightButton,leftButtonAction,rightButtonAction}) =>{
    return(
        <View style = {styles.container}>
        <View style = {styles.topBarContentContainer}>
            <View style = {styles.topBarButtonContainer}>
            <TouchableOpacity onPress = {leftButtonAction}>
                <Text style = {styles.backText}>{leftButton}</Text>
            </TouchableOpacity>
            </View>
            <Text style = {styles.headingText}>{heading}</Text>
            <View style = {styles.topBarButtonContainer}>
            <TouchableOpacity onPress = {rightButtonAction}>
                <Text style = {styles.backText}>{rightButton}</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}
export default TopComponent
const styles = StyleSheet.create({
    container: {
        flex : 1,
        shadowOffset:{  width: 0,  height: 2.5,  },
        shadowColor: 'black',
        backgroundColor : "#fff",
        shadowOpacity: 0.1,
        shadowRadius : 3,
        elevation : 3,
        justifyContent : "center",
        alignItems : "center",
        width : '100%'
    },
    topBarContentContainer : {
        width : window.width * 0.95,
        marginTop : (Platform.OS == 'ios') ? (isIphoneX() ? 14 : 8) : 0,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : "center"
    },
    backText : {
        fontFamily: "Avenir",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a90e2",
        marginRight : 5,
    },
    headingText : {
        fontFamily: "Avenir",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#020202"
    },
    topBarButtonContainer : {
        width : 50,
    },
})

import React , {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,TouchableWithoutFeedback} from 'react-native';
import { WScale,HScale } from '../Modules/MultiResolution'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export const ButtonType = {
    BigBlueButton : "big blue button",
    BorderButton : "border button",
    BigDisabledButton : "big disabled button"
}

const CustomButton = ({text,action,type,width,height,style,textStyle}) =>{
    const RenderBigBlueButton = ({text,action}) => {
        return(
            <TouchableOpacity onPress = {action}>
                <View style = {styles.signUpButton}>
                    <Text style = {styles.signupTextStyle}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const RenderBigDisabledButton = () => {
        return(
            <TouchableWithoutFeedback onPress = {action}>
                <View style = {styles.disabledButton}>
                    <Text style = {styles.signupTextStyle}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    const RenderBorderButton = () => {
        return(
            <TouchableOpacity onPress = {action}>
                <View style = {[styles.borderButton,style]}>
                    <Text style = {[styles.borderButtonText,textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    if(type == ButtonType.BigBlueButton){
        return(
            <RenderBigBlueButton text = {text} action = {action}/>
        )
    }
    else if (type == ButtonType.BorderButton){
        return(
            <RenderBorderButton />
        )
    }
    else if(type == ButtonType.BigDisabledButton){
        return(
            <RenderBigDisabledButton />
        )
    }
}
const styles = StyleSheet.create ({
    signUpButton: {
        width: window.width * 0.8,
        height: window.height * 0.075,
        borderRadius: 6,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 65,
        shadowOpacity: 1,
        backgroundColor : 'rgba(74,144,226,1)',
        alignItems : 'center',
        justifyContent : "center"
    },
    signupTextStyle : {
        color : '#fff',
        fontSize : 13,
        },
    borderButton : {
        borderRadius: 6,
        borderWidth : 2,
        alignItems : 'center',
        justifyContent : "center"
    },
    borderButtonText : {
        
        fontSize : 12,
    },
    disabledButton : {
        width: window.width * 0.8,
        height: window.height * 0.075,
        borderRadius: 6,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 65,
        shadowOpacity: 1,
        backgroundColor : 'rgba(0,0,0,0.1)',
        alignItems : 'center',
        justifyContent : "center"
    }
})
export default CustomButton
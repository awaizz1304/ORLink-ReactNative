import React , {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity,ActivityIndicator} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export const ButtonType = {
    BigBlueButton : "big blue button",
}

const CustomButton = ({text,action,type}) =>{

    const RenderBigBlueButton = ({text,action}) => {
        return(
            <TouchableOpacity onPress = {action}>
                <View style = {styles.signUpButton}>
                    <Text style = {styles.signupTextStyle}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    if(type == ButtonType.BigBlueButton){
        return(
            <RenderBigBlueButton text = {text} action = {action}/>
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
})
export default CustomButton
import React , {Component} from 'react'
import {Modal, Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomButton, { ButtonType } from './CustomButton';
import StepsCountComponent from './StepsCountComponent';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class CreateTeam extends Component {
    constructor (props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount () {

    }
    OnPressNext = () => {

    }
    OnPressBack = () => {
        this.props.navigation.goBack()
    }
    render () {
        return (
            <View style = {styles.container}>
                <View style = {styles.topBar}>
                <View style = {styles.topBarContentContainer}>
                    <View style = {styles.topBarButtonContainer}>
                    <TouchableOpacity onPress = {this.OnPressBack}>
                        <Text style = {styles.backText}>Back</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style = {styles.headingText}>Create Team</Text>
                    <View style = {styles.topBarButtonContainer}></View>
                    
                </View>
                </View>
                <View style = {styles.upperMiddleContainer}>
                    <StepsCountComponent count = "1" textFirstLine = "What you want to" textSecondLine = "call your team?"/>
                </View>
                <View style = {styles.lowerMiddleContainer}></View>
                <View style = {styles.bottomContainer}>
                    <CustomButton 
                        type = {ButtonType.BigBlueButton} 
                        text = "Next" 
                        action = {()=>this.OnPressNext} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "#fafbfd",
    },
    topBar : {
        flex : 0.11,
        shadowOffset:{  width: 0,  height: 2.5,  },
        shadowColor: 'black',
        backgroundColor : "#fff",
        shadowOpacity: 0.1,
        shadowRadius : 3,
        elevation : 3,
        justifyContent : "center",
        alignItems : "center",
    },
    topBarContentContainer : {
        width : window.width * 0.95,
        marginTop : Platform.OS == 'ios' ? 8 : 0,
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
    upperMiddleContainer : {
        flex : 0.15,
    },
    lowerMiddleContainer : {
        flex : 0.63,
    },
    bottomContainer  : {
        flex : 0.1,
        alignItems : 'center',
    }
})
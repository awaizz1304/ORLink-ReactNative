import React , {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity,ActivityIndicator} from 'react-native';
import { WScale,HScale } from '../Modules/Multi-Resolution/MultiResolution'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const StepsCountComponent = ({count,textFirstLine,textSecondLine}) =>{
    return (
        <View style = {styles.container}>
            <View style = {styles.contentContainer}>
                <View style = {styles.countContainer}>
                    <Text style = {styles.countText}>
                        <Text style = {styles.countTextBold}>{count}</Text>
                        <Text>/2</Text>
                    </Text>
                </View>
                <Text>
                    <Text style = {styles.instructionText}> {textFirstLine} {"\n"}</Text>
                    <Text style = {styles.instructionText}> {textSecondLine} </Text>
                </Text>
                <View style = {styles.emptyView} />
            </View>
        </View>
    )

}
const fontSize = 14;
const styles = StyleSheet.create ({
    
    container : {
        flex : 1,
        backgroundColor : 'green',
        alignItems : "center",
        justifyContent : "center",
    },
    contentContainer :{
        width : window.width * 0.9,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : "center",
    },
    countContainer : {
        width : WScale(70),
        height : WScale(70),
        borderRadius : WScale(35),
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ffffff",
        justifyContent : 'center',
        alignItems : "center",
    },
    countTextBold : {
        fontSize: WScale(20),
    },
    countText : {
        fontFamily: "Avenir",
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#0ac8b8",
        fontSize : WScale(16),
    },
    instructionText : {
        fontFamily: "Avenir",
        fontSize: WScale(20),
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: 26,
        letterSpacing: 0,
        color: "#ffffff",
        textAlignVertical : "bottom",
    },
    emptyView : {
        width : WScale(45),
    },
    
})
export default StepsCountComponent
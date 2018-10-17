// Sub Component of the home page holds the top bar,
// containing notification, title and settings.
// The component itself is stateless.

// Importing required components
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import TopComponent from '../../../UIComponents/TopComponent'
// Importing Custom Modules
import { WScale, HScale } from '../../../Modules/Multi-Resolution/MultiResolution'

// Component body
const Title = (props) => {
    return (
        <View style = {styles.topBarContainer}>
            <TopComponent
                heading = "Procedure"
            />
        </View>
    )
}

// Exporting component
export default Title;

// Comppnent stylesheet
const styles = StyleSheet.create({
    topBarContainer:
    {
        flex : 0.135,
    },
    headingStyle:
    {
        fontFamily: "Avenir",
        fontSize: WScale(9 * 2),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#020202"
    }
})
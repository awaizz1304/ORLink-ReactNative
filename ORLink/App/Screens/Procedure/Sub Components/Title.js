// Sub Component of the home page holds the top bar,
// containing notification, title and settings.
// The component itself is stateless.

// Importing required components
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

// Importing Custom Modules
import { WScale, HScale } from '../../../Modules/Multi-Resolution/MultiResolution'

// Component body
const Title = (props) => {
    return (
        // Rendering top bar container
        <View style={styles.topBarContainer}>

            {/* Heading */}
            <Text style={styles.headingStyle}>Procedure</Text>

        </View>
    )
}

// Exporting component
export default Title;

// Comppnent stylesheet
const styles = StyleSheet.create({
    topBarContainer:
    {
        height: WScale(48),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: { width: 0, height: 2.5, },
        shadowColor: 'black',
        backgroundColor: "#fff",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: "#ffffff"
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
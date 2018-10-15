// Sub Component of the login page holds the top bar,
// containing settings, title and edit profile button.
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

            {/* Setting Icon */}
            <TouchableOpacity style={styles.touchableContainer}>
                <Image source={require('../assets/settingsWorkTool.png')} style={styles.iconStyle} />
            </TouchableOpacity>

            {/* Heading */}
            <Text style={styles.headingStyle}>Profile</Text>

            {/* Edit Profile */}
            <TouchableOpacity style={styles.touchableContainer}>
                <Text style={styles.editProfile}>Edit Profile</Text>
            </TouchableOpacity>

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
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    headingStyle:
    {
        flex:1,
        textAlign:"center",
        fontSize: WScale(9 * 2),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#020202"
    },
    touchableContainer:
    {
        flex:1,
        marginHorizontal: WScale(9 * 2)
    },
    editProfile:
    {
        textAlign:"right",
        fontSize: WScale(7 * 2),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a90e2"
    },
    iconStyle:
    {
        width: WScale(8.5 * 2),
        height: HScale(8.5 * 2)
    }
})
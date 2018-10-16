// Used for defining the welcome the user for the first time.
// stateless component.

// Importing dependencies
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

// Importing Custom Modules
import { WScale, HScale } from '../../../Modules/Multi-Resolution/MultiResolution'

// Title Component Body
const WelcomeTitle = () => {
    return (
        <View style={styles.titleContainer}>

            {/* Message */}
            <Text style={styles.message}>
                Welcome to Orlink!{'\n'}
                You can start with creating{'\n'}
                a procedure
            </Text>

        </View>
    )

}

// Exporting component
export default WelcomeTitle

// Component Style Sheet
const styles = StyleSheet.create({
    titleContainer:
    {
        height: WScale(65 * 2),
        flexDirection: "row",
        backgroundColor: "rgba(10, 232, 213, 1)",
        alignItems: "center",
        shadowColor: "rgba(202, 202, 202, 0.42)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 18.5,
        shadowOpacity: 1
    },
    message:
    {
        fontSize: WScale(10 * 2),
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: WScale(13 * 2),
        letterSpacing: 0,
        color: "#ffffff",
        marginLeft: WScale(17.5 * 2)
    }
})
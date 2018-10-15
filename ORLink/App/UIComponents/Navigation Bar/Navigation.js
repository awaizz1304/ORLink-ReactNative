// Bottom Navigation Bar of the Application.
// Generic window with application wide 
// reusability.

// Importing dependencies.
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

// Importing custom modules
import { WScale, HScale } from '../../Modules/Multi-Resolution/MultiResolution'

// Importing custom components
import Item from './Sub Components/Item'

const Navigation = () => {
    return (
        <View style={styles.navigationContainer}>
            
            {/* Home Icon */}
            <Item iconName="md-home" title="Home" selected={true}/>

            <Item iconName="ios-book" title="Procedure" selected={false}/>

            <Item iconName="md-home" title="Team" selected={false}/>

            <Item iconName="md-home" title="Training" selected={false}/>

            <Item iconName="md-home" title="Profile" selected={false}/>

        </View>
    )

}

// Exporting Component
export default Navigation

// Componenet stylesheet.
const styles = StyleSheet.create({
    navigationContainer:
    {
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems:"center",
        height: WScale(28*2),
        backgroundColor:"#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.08)",
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowRadius: 8,
        shadowOpacity: 1
    }
})
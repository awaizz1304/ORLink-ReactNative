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
            <Item iconName="md-home" type={0} title="Home" selected={true}/>

            <Item iconName="book-bookmark" type={1} title="Procedure" selected={false}/>

            <Item iconName="users" type={2} title="Team" selected={false}/>

            <Item iconName="play-video" type={1} title="Training" selected={false}/>

            <Item iconName="user" type={2} title="Profile" selected={false}/>

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
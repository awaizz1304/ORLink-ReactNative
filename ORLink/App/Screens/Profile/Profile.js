/*
    Profile screen of the appliction.
*/

// Importing Core Components
import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'

// Importing sub components
import Title from './Sub Components/Title'
// import Navigation from '../../UIComponents/Navigation Bar/Navigation'
import ProfileView from './Sub Components/ProfileView'

// Importing Modules
import { WScale, HScale } from './../../Modules/Multi-Resolution/MultiResolution'

// Component concrete defination.
export default class Profile extends Component {
    render() {
        return (
            // Content Container.
            <View style={styles.container}>

                {/* Top-Bar */}
                <Title />

                {/* Profile Rendering */}
                <ProfileView/>

            </View>
        )
    }
}

// Component Style Sheet
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#fafbfd"
    }
})
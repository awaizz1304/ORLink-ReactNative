/*
    Profile screen of the appliction.
*/

// Importing Core Components
import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'

// Importing sub components
import Title from './Sub Components/Title'
// import Navigation from '../../UIComponents/Navigation Bar/Navigation'
import ProfileView from './Sub Components/ProfileView'
import TopComponent from '../../UIComponents/TopComponent'
// Importing Modules
import { WScale, HScale } from './../../Modules/Multi-Resolution/MultiResolution'

// Component concrete defination.
export default class Profile extends Component {
    OnPressEditProfile = () => {

    }
    OnPressSettings = () => {

    }
    render() {
        return (
            // Content Container.
            <View style={styles.container}>

                {/* Top-Bar */}
                <View style = {styles.topBar}>
                    <TopComponent
                        heading = "Profile"
                        leftImage = {<Image style = {{width : WScale(17), height : WScale(17)}} source = {require('./assets/settingsWorkTool.png')}/>}
                        rightButton = "Edit"
                        leftButtonAction = {()=>this.OnPressSettings()}
                        rightButtonAction = {()=>this.OnPressEditProfile()}
                    />
                </View>

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
    },
    topBar : {
        flex : 0.135,
    }
})
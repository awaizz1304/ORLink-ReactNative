/*
    Home Screen of the Application.
*/

// Importing Core Components
import React, { Component } from 'react'
import { StyleSheet, View,Image } from 'react-native';

// Importing Sub Components
import Title from './Sub Components/Title'
import WelcomeTitle from './Sub Components/WelcomeTitle'
import TopComponent from '../../UIComponents/TopComponent'
// import Navigation from '../../UIComponents/Navigation Bar/Navigation'
import NoProcedures from './Sub Components/NoProcedures'

// Importing Custom Modules
import ClientLayer from '../../Components/Layers/ClientLayer';

import { WScale, HScale } from '../../Modules/Multi-Resolution/MultiResolution'

class Home extends Component {
    constructor(props) {
        super(props)
        this.tab
    }

    componentDidMount() {

    }
    OnPressLogout = () => {
        ClientLayer.getInstance().getDataManager().SaveValueForKey("Session", "")
        this.props.navigation.navigate('Login')
    }
    OnPressNotifications = () => {

    }
    OnPressSettings = () => {

    }
    render() {
        return (
            <View style={styles.homeContainer}>

                {/* Top-Bar */}
                <View style = {styles.topBar}>
                    <TopComponent
                        heading = "Home"
                        leftImage = {<Image style = {{width:WScale(17),height:WScale(17)}} source = {require('./assets/settingsWorkTool.png')}/>}
                        rightImage = {<Image style = {{width:WScale(17),height:WScale(17)}} source = {require('./assets/notificationsButton1.png')}/>}
                        leftButtonAction = {()=>this.OnPressSettings()}
                        rightButtonAction = {()=>this.OnPressNotifications()}
                    />
                </View>
                {/* <Title /> */}

                {/* Welcome-Title */}
                <WelcomeTitle />

                {/* No Procedures */}
                <NoProcedures />

            </View>
        )
    }
}

// Exporting home component
export default Home

// Exporting style sheet
const styles = StyleSheet.create({
    homeContainer:
    {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#fafbfd"
    },
    topBar : {
        flex : 0.157,
    }
})
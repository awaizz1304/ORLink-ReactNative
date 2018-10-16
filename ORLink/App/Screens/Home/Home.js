/*
    Home Screen of the Application.
*/

// Importing Core Components
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';

// Importing Sub Components
import Title from './Sub Components/Title'
import WelcomeTitle from './Sub Components/WelcomeTitle'
import Navigation from '../../UIComponents/Navigation Bar/Navigation'
import NoProcedures from './Sub Components/NoProcedures'

// Importing Custom Modules
import ClientLayer from '../../Components/Layers/ClientLayer';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {

    }
    OnPressLogout = () => {
        ClientLayer.getInstance().getDataManager().SaveValueForKey("Session", "")
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <View style={styles.homeContainer}>

                {/* Top-Bar */}
                <Title />

                {/* Welcome-Title */}
                <WelcomeTitle />

                {/* No Procedures */}
                <NoProcedures />

                {/* Bottom Bar */}
                <Navigation />

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
    }
})
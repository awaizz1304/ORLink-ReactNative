/*
    Signup
*/

// Fetching dependencies.
import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

// Importing Sub-Components
import SignupInputs from './SignupInputs'

// Importing custom components
import  CustomPopup,{ PopupType } from '../../UIComponents/CustomPopup'

// Fetching Redux Actions
import { signup } from '../../Store/Actions/Signup/index'

// Fetching Redux Bridge
import { connect } from 'react-redux'

// Creating Stateless Component.
class Signup extends Component {

    // Signup form submission.
    submitForm = (formData) => {
        this.props.onSignup(formData)
    }

    // On Component Update
    componentDidUpdate()
    {
        if(this.props.sign_up_status === "1")
        {
            this.props.navigation.navigate('CreateTeam')
        }
    }

    // Rendering Component
    render() {
        return (
            // Main layout container
            <View style={styles.container}>

                {/* Signup Input Component */}
                <SignupInputs submitForm={this.submitForm} />

                {/* Rendering Popup */}
                {(this.props.sign_up_status === "0") ? 
                <CustomPopup
                    type={PopupType.Loading}
                    popupOpen={(this.props.sign_up_status === "0")}
                    loadingText="Processing..."
                /> 
                : 
                null}

            </View>
        );
    }

};

// Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fafbfd"
    }
})

// Configuring Redux.

// Pushing state to props.
const mapStateToProps = state => {
    return {
        APP_DATA_USER_ID: state.APP_DATA.USER_ID,
        APP_DATA_USER_NAME: state.APP_DATA.USER_NAME,
        APP_DATA_USER_EMAIL: state.APP_DATA.USER_EMAIL,
        APP_DATA_USER_PASSWORD: state.APP_DATA.USER_PASSWORD,
        APP_DATA_USER_SESSION: state.APP_DATA.USER_SESSION,
        sign_up_status: state.SIGN_UP_DATA.sign_up_status,
        message: state.SIGN_UP_DATA.message
    }
}

// Pushing dispatch action to props.
const mapDispatchToProps = dispatch => {
    return{
        onSignup : (app_data) => dispatch(signup(app_data))
    }
}

// Exporting Component.
export default connect(mapStateToProps,mapDispatchToProps)(Signup)
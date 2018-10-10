// Stateful component containing input fields
// for the login.

import React, { Component } from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'

// Importing custom modules.
import { WScale,HScale } from '../../Modules/Multi-Resolution/MultiResolution'

// Importing custom components
import { Checkbox } from '../../UIComponents/Checkbox'

// Third Parties Dependencies.
import  Textinput  from 'react-native-material-textinput'



class LoginInput extends Component {

    // Input State Variable
    state = {
        username:"",
        password:"",
        EUsername:undefined,
        EPassword:undefined,
        remember:false
    }

    // Submit fields.
    ValidateAndForwardSubmission = () => 
    {
        
        // Validating inputs.
        this.setState({EUsername:this.state.username===""?"Enter username!":undefined})
        this.setState({EPassword:this.state.password===""?"Enter password!":undefined})

        if(this.state.username.length>0 && this.state.password.length>0)
        {
            // Triggering Login.
            this.props.login(this.state.username,this.state.password,this.state.remember)
        }

    }

    // Handling Checkbox status.
    checkBoxStatus = () => {
        this.setState({remember:(this.state.remember?false:true)})
    }

    // Rendering component.
    render() {
        return (
                // Login Container
                <View style={styles.loginContainer}>
                {/* Setting up the login fields container */}
                <View style={styles.loginFieldsContainer}> 
                    {/* Username Field */}
                    <View style={styles.loginInputFields}>
                        <Textinput
                            label='Username'
                            labelColor="#a6a6a6"
                            labelActiveColor="#a6a6a6"
                            labelActiveScale={WScale(0.8)}
                            underlineColor="#d3dfef"
                            underlineActiveColor="#00a0e3"
                            fontSize={WScale(12)}
                            labelActiveTop={-30}
                            color="#4a4a4a"
                            marginBottom={WScale(20)}
                            error = {this.state.EUsername}
                            // Setting State Values
                            onChangeText={ username => this.setState({username}) }

                        />
                    </View>
                    {/* Password Field */}
                    <View style={styles.loginInputFields}>
                        
                        <Textinput
                            label='Password'
                            labelColor="#a6a6a6"
                            labelActiveColor="#a6a6a6"
                            labelActiveScale={WScale(0.8)}
                            underlineColor="#d3dfef"
                            underlineActiveColor="#00a0e3"
                            fontSize={WScale(12)}
                            labelActiveTop={-30}
                            color="#4a4a4a"
                            error = {this.state.EPassword}
                            // Setting State Values
                            onChangeText={ password => this.setState({password}) }

                        />
                    </View>
                    {/* Remember/Forgot links */}
                    <View style={styles.RFContainer}>
                        <View style={styles.rememberMe}>
                            {/* Remember Me Checkbox */}
                            <Checkbox
                                marked = {this.state.remember}
                                iconSize = {WScale(18)}
                                fontSize = {WScale(12)}
                                interPadding = { WScale(6.1) }
                                iconColor = "#b3bfd0"
                                message = "Remember me"
                                messageColor="#a6a6a6"
                                rememberMe = {this.checkBoxStatus}
                            />
                            {/* Forgot password field. */}
                            <Text style={styles.forgotPassword}>
                                Forgot password?
                            </Text>
                        </View>
                    </View>
                    {/* Login Button */}
                    <TouchableOpacity style={styles.loginButton} onPress={this.ValidateAndForwardSubmission}>
                        <View style={styles.loginButtonView}>
                            {/* Text Component */}
                            <Text style={styles.loginButtonText}>
                                LOGIN
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* New user signup & terms/conditions */}
                    <View style={styles.STFields}>
                        {/* Fields container */}
                        <View style={styles.STFieldsContainer}>
                            <Text style={styles.NUserField}>New user? </Text>
                            <TouchableOpacity onPress={this.props.navigateToSignup}>
                                <Text style={styles.NSignupField}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Terms and Conditions */}
                        <Text style={styles.termsNConditions}>Terms & Condition</Text>
                    </View>
                </View>
            </View>
        )
    }
}

// Style Sheet
const styles = StyleSheet.create({
    loginContainer:
        {
            flex:0.7
        },
        loginFieldsContainer:
        {
            flex:1,
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"center"
        },
        loginInputFields:
        {
            width:'85%'
        },
        RFContainer:
        {
            width:"85%",
            flexDirection:"column"
        },
        rememberMe:
        {
            flexDirection:"row",
            justifyContent:"space-between",
            paddingTop:WScale(16.5),
            paddingBottom:WScale(36)
        },
        forgotPassword:
        {
            color: "#4a90e2",
            textAlignVertical:"center",
            fontSize:WScale(12)
        },
        loginButton:
        {
            width:'85%',
            height:WScale(45),
            backgroundColor:"#4a90e2",
            borderRadius: 6,
            shadowColor: "#00000019",
            elevation:2,
            shadowOffset: {
                width: 0,
                height: 5
            },
            shadowRadius: 65,
            shadowOpacity: 1
        },
        loginButtonView:
        {
            width:'100%',
            height:WScale(45)
        },
        loginButtonText:
        {
            flex:1,
            textAlign:"center",
            textAlignVertical:"center",
            fontSize:WScale(15),
            fontWeight:'900',
            color:'white'
        },
        STFields:
        {
            flex:1,
            flexDirection:"column",
            justifyContent:"space-between",
        },
        STFieldsContainer:
        {
            paddingTop:WScale(44),
            flexDirection:"row"
        },
        NUserField:
        {
            color:"#4a4a4a",
            fontSize:WScale(14)
        },
        NSignupField:
        {
            color:"#4a90e2",
            fontSize:WScale(14)
        },
        termsNConditions:
        {
            color: "#a6a6a6",
            paddingBottom:WScale(18),
            fontSize:WScale(12)
        }
})

// Exporting component
export default LoginInput;
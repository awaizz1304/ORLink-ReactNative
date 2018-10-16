// Stateful component containing the input fields of the
// signup component.

// Fetching dependencies.
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'

// Importing sub-components
import Checkbox from './AgreementCheckBox'

// Importing Custom Modules
import { WScale, HScale } from '../../Modules/Multi-Resolution/MultiResolution'

// Third Parties Dependencies.
import Textinput from 'react-native-material-textinput'
import { Dropdown } from 'react-native-material-dropdown'
import PasswordInputText from 'react-native-hide-show-password-input'

class SignupInputs extends Component {

    // State Variables.
    state =
        {
            firstName: "",
            lastName: "",
            phNumber: "",
            emailId: "",
            password: "",
            confirmPassword: "",
            identity: "",
            acknowledgement: false,
            Efname:undefined,
            Elname:undefined,
            Epnumber:undefined,
            Eeid:undefined,
            Epassword:undefined,
            Ecpassowrd:undefined,
            Eidentity:undefined,
            Eacknowledgement:undefined
        }

    // Process Submitted Data.
    processSignup = () =>
    {
        // Running Test Conditions
        this.setState({Efname:this.state.firstName===""?"Enter firstname!":undefined})
        this.setState({Elname:this.state.lastName===""?"Enter lastname!":undefined})
        this.setState({Epnumber:this.state.phNumber===""?"Enter Phone number!":undefined})
        this.setState({Eeid:this.state.emailId===""?"Enter Email ID!":undefined})
        this.setState({Epassword:this.state.password===""?"Enter password!":undefined})
        this.setState({Ecpassowrd:this.state.password!==this.state.confirmPassword?"Both passwords should match!":undefined})
        this.setState({Eidentity:this.state.identity===""?"Select your identity!":undefined})
        this.setState({Eacknowledgement:(!this.state.acknowledgement)?"Mark agree for terms & policies!":undefined})

        // Need to update it to better code.
        if(this.state.firstName.length>0 && this.state.lastName.length>0 && this.state.phNumber.length>0 && this.state.emailId.length >0 && this.state.password.length>0 && this.state.confirmPassword===this.state.password && this.state.identity.length>0 && this.state.acknowledgement)
            this.props.submitForm({...this.state})

    }

    // Checkbox callback.
    termsAgreement = () =>
    {
        this.setState({acknowledgement:(this.state.acknowledgement?false:true)})
    }

    // Rendering component
    render() {
        return (
            /* Signup Fields Container */
            <View style={styles.fieldsContainer}>
                <ScrollView style={styles.containerScrollView}>

                    {/* Setting up the signup fields container */}
                    <View style={styles.containerSignupContainer}>

                        {/* Top Heading View */}
                        <View style={styles.headingContainer}>

                            {/* Text Views Container  */}
                            <View style={styles.headingContentContainer}>

                                {/* Heading */}
                                <Image source={require('../../assets/logo/logo.png')} style={styles.headingLogoContainer} />

                                {/* Description */}
                                <Text style={styles.headingLogoDescription}>
                                    An intuitive surgical{"\n"}
                                    workflow platform
                                </Text>

                                {/* Sign up signature */}
                                <Text style={styles.headingPageName}>
                                    SIGN UP
                                </Text>

                            </View>

                        </View>

                        {/* First Name Field */}
                        <View style={styles.loginTextInput}>

                            <Textinput
                                label='First Name'
                                labelColor="#a6a6a6"
                                labelActiveColor="#a6a6a6"
                                labelActiveScale={WScale(0.6)}
                                underlineColor="#d3dfef"
                                underlineActiveColor="#00a0e3"
                                fontSize={WScale(12)}
                                labelActiveTop={-30}
                                color="#4a4a4a"
                                paddingBottom={WScale(25)}
                                marginBottom={WScale(27)}
                                error={this.state.Efname}
                                onChangeText={firstName => this.setState({firstName})}
                            />

                        </View>
                        {/* Last Name Field */}
                        <View style={styles.loginTextInput}>

                            <Textinput
                                label='Last Name'
                                labelColor="#a6a6a6"
                                labelActiveColor="#a6a6a6"
                                labelActiveScale={WScale(0.6)}
                                underlineColor="#d3dfef"
                                underlineActiveColor="#00a0e3"
                                fontSize={WScale(12)}
                                labelActiveTop={-30}
                                color="#4a4a4a"
                                paddingBottom={WScale(25)}
                                marginBottom={WScale(27)}
                                error={this.state.Elname}
                                onChangeText={lastName => this.setState({lastName})}
                            />

                        </View>

                        {/* Phone Number Field */}
                        <View style={styles.loginTextInput}>

                            <Textinput
                                label='Phone Number'
                                labelColor="#a6a6a6"
                                labelActiveColor="#a6a6a6"
                                labelActiveScale={WScale(0.6)}
                                underlineColor="#d3dfef"
                                underlineActiveColor="#00a0e3"
                                fontSize={WScale(12)}
                                labelActiveTop={-30}
                                color="#4a4a4a"
                                paddingBottom={WScale(25)}
                                marginBottom={WScale(27)}
                                error={this.state.Epnumber}
                                onChangeText={phNumber => this.setState({phNumber})}
                            />

                        </View>

                        {/* Email Id Field */}
                        <View style={styles.loginTextInput}>

                            <Textinput
                                label='Email Id'
                                labelColor="#a6a6a6"
                                labelActiveColor="#a6a6a6"
                                labelActiveScale={WScale(0.6)}
                                underlineColor="#d3dfef"
                                underlineActiveColor="#00a0e3"
                                fontSize={WScale(12)}
                                labelActiveTop={-30}
                                color="#4a4a4a"
                                paddingBottom={WScale(25)}
                                marginBottom={WScale(27)}
                                error={this.state.Eeid}
                                onChangeText={emailId => this.setState({emailId})}
                            />

                        </View>

                        {/* Password Field */}
                        <View style={styles.loginTextInput}>

                            <Textinput
                                label='Password'
                                labelColor="#a6a6a6"
                                labelActiveColor="#a6a6a6"
                                labelActiveScale={WScale(0.6)}
                                underlineColor="#d3dfef"
                                underlineActiveColor="#00a0e3"
                                fontSize={WScale(12)}
                                labelActiveTop={-30}
                                color="#4a4a4a"
                                paddingBottom={WScale(25)}
                                marginBottom={WScale(27)}
                                error={this.state.Epassword}
                                onChangeText={password => this.setState({password})}
                            />

                        </View>

                        {/* Confirm Password Field */}
                        <View style={styles.loginTextInput}>

                            <Textinput
                                label='Confirm Password'
                                labelColor="#a6a6a6"
                                labelActiveColor="#a6a6a6"
                                labelActiveScale={WScale(0.6)}
                                underlineColor="#d3dfef"
                                underlineActiveColor="#00a0e3"
                                fontSize={WScale(12)}
                                labelActiveTop={-30}
                                color="#4a4a4a"
                                paddingBottom={WScale(25)}
                                marginBottom={WScale(27)}
                                error={this.state.Ecpassowrd}
                                onChangeText={confirmPassword => this.setState({confirmPassword})}
                            />

                        </View>

                        {/* I am */}
                        <View style={styles.loginTextInput}>

                            <Dropdown
                                label='I am'
                                labelFontSize={WScale(12)}
                                textColor="#a6a6a6"
                                value={"Choose Option"}
                                fontSize={WScale(14)}
                                data={[{
                                    value: 'A',
                                }, {
                                    value: 'B',
                                }, {
                                    value: 'C',
                                }]}
                                error={this.state.Eidentity}
                                onChangeText={(identity,index,data) => this.setState({identity})}
                            />

                        </View>

                        {/* Terms/Aggrement */}
                        <View style={styles.termsContainer}>

                            <View style={styles.termsContainerContent}>

                                {/* Remember Me Checkbox */}
                                <Checkbox
                                    marked={true}
                                    iconSize={WScale(22)}
                                    fontSize={WScale(12)}
                                    interPadding={WScale(18)}
                                    iconColor="#979797"
                                    message="I acknowledge the"
                                    messageColor="#979797"
                                    linkColors="#4a90e2"
                                    errorColor="#fc1f4a"
                                    marked={this.state.acknowledgement}
                                    error={this.state.Eacknowledgement}
                                    acknowledgement={this.termsAgreement}

                                />

                            </View>

                        </View>



                    </View>

                </ScrollView>

                {/* Button Container  */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={this.processSignup}>
                        {/* Login Button */}
                        <View style={styles.buttonLooks}>

                            {/* Text Component */}
                            <Text style={styles.buttonText}>
                                SIGN UP
                            </Text>

                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

// Component Stylesheet
const styles = StyleSheet.create({
    fieldsContainer: { flex: 1 },
    containerScrollView: { width: "100%", height: "100%" },
    containerSignupContainer: { flex: 1, flexDirection: "column", justifyContent: "flex-start", alignItems: "center" },
    headingContainer: { flex: 0.3 },
    headingContentContainer: { flex: 1, flexDirection: 'column' },
    headingLogoContainer: { resizeMode: "contain", marginTop: WScale(26), width: WScale(106), height: HScale(21), marginBottom: WScale(12) },
    headingLogoDescription: { fontSize: WScale(12), fontWeight: '300', textAlign: 'center' },
    headingPageName: { paddingTop: WScale(30), paddingBottom: WScale(33), fontSize: WScale(16), fontWeight: '900', textAlign: 'center', color: '#4a4a4a' },
    loginTextInput: { width: '85%' },
    termsContainer: { width: "85%", flexDirection: "column", marginTop: WScale(33) },
    termsContainerContent: { flexDirection: "row", justifyContent: "space-between", paddingTop: WScale(16.5), paddingBottom: WScale(36) },
    buttonContainer: { flexDirection: "row", justifyContent: "center" },
    buttonLooks: {
        width: '100%',
        height: WScale(45),
        backgroundColor: "#4a90e2",
        borderRadius: 6,
        shadowColor: "#00000019",
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 65,
        shadowOpacity: 1
    },
    buttonText: { flex: 1, textAlign: "center", textAlignVertical: "center", fontSize: WScale(15), fontWeight: '900', color: 'white' },
    buttonTouchable:{width:"85%",marginBottom: WScale(8.5)}
})

// Exporting component
export default SignupInputs;
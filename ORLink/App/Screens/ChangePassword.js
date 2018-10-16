import React , {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import ClientLayer from '../Components/Layers/ClientLayer';
import { connect } from "react-redux";
import {changePassword} from '../Store/Actions/Password/actions'
import  PasswordChangeDataModel from '../Components/Services/Authentication/DataModels/PasswordChangeDataModels'
import TopComponent from '../UIComponents/TopComponent'
import CustomButton, { ButtonType } from '../UIComponents/CustomButton'
import { WScale,HScale } from '../Modules/Multi-Resolution/MultiResolution'
import CustomPopup, { PopupType } from '../UIComponents/CustomPopup'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class ChangePassword extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentPassText : "",
            newPassText : "",
            confirmNewPassText : "",
            invalidCurrentPass : "",
            invalidNewPass : "",
            invalidConfirmNewPass : "",
            passErrorText : "",
            passMatch : true,
            showResponsePopup : false,
            responseText : "",
            responseTitle : "",
            response : null
        }
    }
    componentDidUpdate () {
        if(this.props.response != null){
            if(this.state.response == null){
                setTimeout(()=>{
                    this.setState({showResponsePopup : true , responseText : "Password Change Success",responseTitle : "Success",response : this.props.response})
                },0)
            }
        }
        // if(this.state.response == null){
        //     this.setState({showResponsePopup : true , responseText : "Password Change Success",responseTitle : "Success",response : this.props.response})
        // }
        // if(this.props.error != null){
        //     this.setState({showResponsePopup : true , responseText : "Something went wrong",responseTitle :"Error"})
        // }
    }
    OnPressSave = () => {
        
        this.setState({invalidCurrentPass: "",invalidNewPass: "",invalidConfirmNewPass : "",passWordMatchText : "",passMatch:true,response : null})
        if(this.state.currentPassText == ""){
            console.log("Invalid current pass")
            this.setState({invalidCurrentPass : "Password not valid"})
            return
        }
        else if(this.state.newPassText == ""){
            console.log("Invalid neww pass")
            this.setState({invalidNewPass : "Password not valid"})
            return
        }
        else if(this.state.confirmNewPassText == ""){
            console.log("Invalid confirn pass")
            this.setState({invalidConfirmNewPass : "Password not valid"})
            return
        }
        if(this.state.newPassText != this.state.confirmNewPassText){
            this.setState({passErrorText : "Password did not match",passMatch : false})
            return
        }
        if(this.state.currentPassText == this.state.newPassText){
            this.setState({passErrorText : "Current and new password can't be same"})
            return
        }

        passChangeData = new PasswordChangeDataModel()
        passChangeData.currentPass = this.state.currentPassText
        passChangeData.newPass = this.state.newPassText

        this.props.onChangePasssword(passChangeData)
    }
    OnPressBack = () => {

    }
    OnPressClosePopup = () => {
        this.setState({showResponsePopup : false})
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.topBar}>
                    <TopComponent
                        heading = "Change Password"
                        leftButton = "Back"
                        leftButtonAction = {this.OnPressBack}
                    />
                </View>
                <View style ={styles.middleConatiner}>
                    <Text style = {this.state.invalidCurrentPass == "" ? styles.validHeading : styles.invalidText}>Current Password</Text>
                    <TextInput style = {this.state.invalidCurrentPass == "" ? styles.validInput: styles.invalidInput}
                        placeholder = "Enter"
                        placeholderTextColor = "#000"
                        returnKeyType = 'next'
                        autoCorrect = {false}
                        secureTextEntry = {true}
                        onSubmitEditing = {() => this.newPassInput.focus()}
                        onChangeText = {(text) => this.setState({currentPassText : text})}
                        ref = {(input) => this.currentPassInput = input}
                    />
                    {/* mark invalid input if password do not match or individual input is wrong */}
                    <Text style = {this.state.invalidNewPass == "" && this.state.passMatch ? styles.validHeading : styles.invalidText}>New Password</Text>
                    <TextInput style = {this.state.invalidNewPass == "" && this.state.passMatch ? styles.validInput: styles.invalidInput}
                        placeholder = "Enter"
                        placeholderTextColor = "#000"
                        returnKeyType = 'next'
                        autoCorrect = {false}
                        secureTextEntry = {true}
                        onSubmitEditing = {() => this.confirmNewPassInput.focus()}
                        onChangeText = {(text) => this.setState({newPassText : text})}
                        ref = {(input) => this.newPassInput = input}
                    />
                    {/* mark invalid input if password do not match or individual input is wrong */}
                    <Text style = {this.state.invalidConfirmNewPass == "" && this.state.passMatch ? styles.validHeading : styles.invalidText}>Confirm new Password</Text>
                    <TextInput style = {this.state.invalidConfirmNewPass == "" && this.state.passMatch ? styles.validInput: styles.invalidInput}
                        placeholder = "Enter"
                        placeholderTextColor = "#000"
                        returnKeyType = 'go'
                        autoCorrect = {false}
                        secureTextEntry = {true}
                        onChangeText = {(text) => this.setState({confirmNewPassText : text})}
                        ref = {(input) => this.confirmNewPassInput = input}
                    />
                    <Text style = {styles.invalidText} >{this.state.passErrorText}</Text>
                </View>
                <View style = {styles.bottomButtonContainer}>
                    <CustomButton 
                        type = {ButtonType.BigBlueButton}
                        text = "Save"
                        action = {()=>this.OnPressSave()}
                    />
                </View>
                {this.props.changeRequest || this.state.showResponsePopup ? <CustomPopup
                    type = {this.state.response == null ? PopupType.Loading : PopupType.SingleButton}
                    loadingText = "Changing Password"
                    closeButtonText = "Ok"
                    title = {this.state.responseTitle}
                    description = {this.state.responseText}
                    popupOpen = {this.state.response == null ? this.props.changeRequest : this.state.showResponsePopup}
                    actionClose = {() => this.OnPressClosePopup()}
                /> : null
                }
            </View>
        )
    }
}
const mapStateToProps = state => {
    return{
        changeRequest : state.password.changeRequest,
        response : state.password.passChangeResponse,
        error : state.password.passChangeError
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onChangePasssword : (changePassData) =>
            dispatch(changePassword(changePassData))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword)

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fafbfd",
        alignItems :'center'
    },
    topBar : {
        flex : 0.11,
        backgroundColor : "#fff",
        width : '100%'
    },
    middleConatiner : {
        flex : 0.79,
        marginTop : WScale(30),
        width : window.width * 0.8,
    },
    bottomButtonContainer : {
        alignItems : 'center',
        flex : 0.1,
    },
    validHeading : {
        marginBottom : WScale(10),
        height: WScale(16),
        fontFamily: "Avenir",
        fontSize: WScale(14),
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: WScale(16),
        letterSpacing: 0,
        color: "#a6a6a6"
    },
    invalidText : {
        marginBottom : WScale(10),
        height: WScale(16),
        fontFamily: "Avenir",
        fontSize: WScale(14),
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: WScale(16),
        letterSpacing: 0,
        color: "red"
    },
    validInput : {
        marginBottom : WScale(30),
        
        opacity: 0.8,
        fontFamily: "Avenir",
        fontSize: WScale(15),
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: WScale(24),
        letterSpacing: 0,
        color: "#4a4a4a",
        borderBottomWidth: 1.5,
        borderColor : "#d3dfef"
    },
    invalidInput :{
        marginBottom : WScale(30),
        
        opacity: 0.8,
        fontFamily: "Avenir",
        fontSize: WScale(15),
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: WScale(24),
        letterSpacing: 0,
        color: "#4a4a4a",
        borderBottomWidth: 1.5,
        borderColor : "red"
    },
    
})
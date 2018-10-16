import React , {Component} from 'react'
import {Modal, Platform, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import CustomButton, { ButtonType } from '../UIComponents/CustomButton';
import StepsCountComponent from '../UIComponents/StepsCountComponent';
import TextInput from 'react-native-material-textinput'
import { WScale,HScale } from '../Modules/Multi-Resolution/MultiResolution'
import TeamDataModel from '../Components/Services/DataService/DataModels/TeamDataModel';
import FloatingLabelInput from '../UIComponents/FloatingInput';
import ClientLayer from '../Components/Layers/ClientLayer';
import CustomPopup, { PopupType } from '../UIComponents/CustomPopup';
import { validateTeamName } from '../Components/Utilities/Validator';
import TopComponent from '../UIComponents/TopComponent'
import { connect } from "react-redux";
import {createTeam} from '../Store/Actions/TeamActions'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class CreateTeam extends Component {
    teamData = null
    constructor (props){
        super(props)
        this.state = {
            nameText : "",
            invalidNameText : "",
        }
    }
    componentDidMount () {

    }
    componentDidUpdate () {
        if(this.props.data != null){
            this.props.navigation.navigate('InviteMemberScreen',{
                data : this.props.data,
            })
        }
    }
    OnPressNext = () => {
        

        if(!validateTeamName(this.state.nameText)){
            this.setState({invalidNameText : "Team name must be at least 5 characters long"})
            return
        }
        this.setState({invalidNameText : ""})
        this.teamData = new TeamDataModel()
        this.teamData.name = this.state.nameText

        this.props.onCreateTeam(this.teamData)

        // ClientLayer.getInstance().getDataService().CreateTeam (this.teamData,(date)=>{
            
        //     this.teamData.creationTime = date
        //     this.props.navigation.navigate('InviteMemberScreen',{
        //         data : this.teamData,
        //     })
        // },(error)=>{
            
        // })
        
    }
    OnPressBack = () => {
        this.props.navigation.goBack()
    }
    render () {
        return (
            <TouchableWithoutFeedback>
            <View style = {styles.container}>
                <View style = {styles.topBar}>
                <TopComponent
                    heading = "Create Team"
                    leftButton = "Back"
                    leftButtonAction = {()=>this.OnPressBack()}
                    rightButton = ""
                    rightButtonAction = {null}
                />
                </View>
                <View style = {styles.upperMiddleContainer}>
                    <StepsCountComponent count = "1" textFirstLine = "What you want to" textSecondLine = "call your team?"/>
                </View>
                <View style = {styles.lowerMiddleContainer}>
                <View style = {styles.textContainer}>
                    <TextInput
                        label='Team Name'
                        labelColor="#a6a6a6"
                        labelActiveColor="#a6a6a6"
                        labelActiveScale={WScale(0.8)}
                        underlineColor= {this.state.invalidNameText == "" ? "#d3dfef" : "red"}
                        underlineActiveColor="#00a0e3"
                        fontSize={WScale(12)}
                        labelActiveTop={-30}
                        color="#4a4a4a"
                        marginBottom={WScale(20)}
                        onChangeText = {(text)=> this.setState({nameText : text})}
                        ref = {(input) => this.teamName = input}
                    />
                    <Text style = {styles.invalidTextStyle}>{this.state.invalidNameText}</Text>
                </View>
                </View>
                <View style = {styles.bottomContainer}>
                    <CustomButton 
                        type = {ButtonType.BigBlueButton} 
                        text = "Next" 
                        action = {()=>this.OnPressNext()} />
                </View>
                {this.props.creatingTeam ? <CustomPopup
                    type = {PopupType.Loading}
                    loadingText = "Creating Team"
                    popupOpen = {this.props.creatingTeam}
                /> : null}
            </View>
            </TouchableWithoutFeedback>
        )
    }
}
const mapStateToProps = state => {
    return{
        creatingTeam : state.team.creatingTeam,
        data : state.team.teamData,
        error : state.team.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCreateTeam : (teamData) =>
            dispatch(createTeam(teamData))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateTeam)
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "#fafbfd",
    },
    topBar : {
        flex : 0.11,
        // shadowOffset:{  width: 0,  height: 2.5,  },
        // shadowColor: 'black',
        // backgroundColor : "#fff",
        // shadowOpacity: 0.1,
        // shadowRadius : 3,
        // elevation : 3,
        // justifyContent : "center",
        // alignItems : "center",
    },
    topBarContentContainer : {
        width : window.width * 0.95,
        marginTop : Platform.OS == 'ios' ? 8 : 0,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : "center"
    },
    backText : {
        fontFamily: "Avenir",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a90e2",
        marginRight : 5,
    },
    headingText : {
        fontFamily: "Avenir",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#020202"
    },
    topBarButtonContainer : {
        width : 50,
    },
    upperMiddleContainer : {
        flex : 0.15,
    },
    lowerMiddleContainer : {
        flex : 0.63,
        
        justifyContent : "center",
        alignItems : "center"
    },
    bottomContainer  : {
        flex : 0.1,
        alignItems : 'center',
    },
    textContainer : {
        width : window.width * 0.8,
        justifyContent : "center",
    },
    invalidTextStyle : {
        color : "red",
        fontSize : WScale(14)
    }
})
import React ,{Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity,Modal,TextInput, FlatList,Image} from 'react-native';
import StepsCountComponent from '../UIComponents/StepsCountComponent';
import CustomButton, { ButtonType } from '../UIComponents/CustomButton';
// import TextInput from 'react-native-material-textinput'
import { WScale,HScale } from '../Modules/Multi-Resolution/MultiResolution'
import Tabs from '../UIComponents/Tabs';
import { Switch } from 'react-native-switch';
import { getInitials } from '../Components/Utilities/Utilities';
import { validateEmail, validateMobileNumber } from '../Components/Utilities/Validator';
import TeamMemberDataModel, { InviteType } from '../Components/Services/DataService/DataModels/TeamMemberDataModel';
import ClientLayer from '../Components/Layers/ClientLayer';
import CustomPopup, { PopupType } from '../UIComponents/CustomPopup';
import CustomListItem from '../UIComponents/CustomListItem'
import TopComponent from '../UIComponents/TopComponent'

import { connect } from "react-redux";
import {IniviteTeamMembers} from '../Store/Actions/TeamActions'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


class InviteMember extends Component {
    inviteType = InviteType.InviteViaEmail
    dummyDataArray = []
    dataItem = null
    constructor(props){
        console.log("Constructor")
        super(props)
        this.state = {
            phoneNumber : "",
            email : "",
            addAsAdmin : true,
            data : [],
            canAdd : true,
            adminRights : [],
            invalidEmail : false,
            invalidPhone : false,
            teamData : null,
            showIntroTopBar : true,
            responseData : null
        }
    }
    componentDidMount () {
        memberData = new TeamMemberDataModel()
        memberData.name = "Jon Snow"
        memberData.email = "jonsnow@gameofthrones.com"
        memberData.addAsAdmin = true
        memberData.id = 12

        this.dummyDataArray.push(memberData)
        this.setState({data : this.dummyDataArray},()=>{
            var checks = []
            this.state.data.forEach((_data) => {
            checks.push(_data.addAsAdmin)
            })
            this.setState({adminRights : checks})
        })
        
        const teamData = this.props.navigation.getParam('data',null)
        this.setState({teamData : teamData})
    }
    componentDidUpdate () {
        if(this.props.membersData != null){
            if(this.state.showIntroTopBar){
                this.props.navigation.navigate('InviteCompleteScreen',{
                    membersData : this.state.data,
                    teamData : this.state.teamData,
                    returnData : this.OnGettingBack.bind(this)
                })
                
            }
        }
    }


    AddMemberToList = (type) => {
        memberData = new TeamMemberDataModel()
        memberData.name = "Awais Khan"
        memberData.email = this.state.email
        memberData.phoneNumber = this.state.phoneNumber
        memberData.addAsAdmin = this.state.addAsAdmin
        memberData.id = 14
        memberData.inviteType = type
        this.dummyDataArray.push(memberData)
        this.setState({data : this.dummyDataArray},()=>{
            var checks = []
            this.state.data.forEach((_data) => {
            checks.push(_data.addAsAdmin)
            })
            this.setState({adminRights : checks})
        })
    }

    OnGettingBack (){
        this.setState({showIntroTopBar : false})
    }

    OnPressBack = () => {
        this.props.navigation.goBack()
    }
    OnPressAdd = () => {
        this.setState({invalidEmail : false,invalidPhone : false})
        if(this.inviteType == InviteType.InviteViaEmail ){
            this.dataItem = this.state.data.find(e => e.email === this.state.email)
            if(!validateEmail(this.state.email) || this.dataItem != undefined){
                this.setState({invalidEmail : true})
            }
            else{
                this.AddMemberToList(InviteType.InviteViaEmail)
            }
        }
        else{
            this.dataItem = this.state.data.find(e => e.phoneNumber === this.state.phoneNumber)
            if(!validateMobileNumber(this.state.phoneNumber || this.dataItem != undefined)){
                this.setState({invalidPhone : true})
            }
            else{
                this.AddMemberToList(InviteType.InviteViaPhone)
            }
        }
        
    }
    OnPressInvite = () => {
        this.setState({showIntroTopBar : true})
        this.props.onInviteMembers(this.dummyDataArray)
    }
    renderSwitch = (props) => {
        return(
            <Switch 
                value={props.valueType == "main"? this.state.addAsAdmin : props.isOn}
                circleSize={WScale(23)}
                onValueChange={(val) => props.valueType == "main" ? this.setState({addAsAdmin : !this.state.addAsAdmin}):props.isOn}
                barHeight={WScale(18)}
                circleBorderWidth={0}
                backgroundActive={'rgba(74, 144, 226, 0.2)'}
                backgroundInactive={'lightgray'}
                circleActiveColor={'rgb(74, 144, 226)'}
                circleInActiveColor={'gray'}
            />
        )
    }
    renderMessageIcon = () => {
        return(
            <View style = {styles.messageIcon}>
                <Image source = {require('../assets/Invite/invitation3x.png')} />
            </View>
        )
    }
    ListSwitchToggle = (index) => {
        this.setState({adminRights : !this.state.adminRights[index]})
        console.log("Swicth")
    }
    ListItem = (props) => {
        const item = props.item
        const index = props.index
        return (
            <View style = {styles.listItem}>
                <View style = {styles.imageView}>
                    <Text style = {styles.initialsText}>{getInitials(item.name)}</Text>
                </View>
                <View style = {styles.rowItemTextContainer}>
                    <Text style = {styles.nameStyle}>{item.name}</Text>
                    <Text style = {styles.emailStyle}>{item.inviteType == InviteType.InviteViaEmail ? item.email : item.phoneNumber}</Text>
                    <Text />
                    <View style = {styles.separatorStyle} />
                    <Text></Text>
                    <View style = {styles.listItemBottomContainer}>
                        <Text style = {styles.headingsTextSmall} >Admin</Text>
                        <Switch
                            value={this.state.adminRights[index]}
                            circleSize={WScale(23)}
                            onValueChange={(val) => this.setState({adminRights : !this.state.adminRights[index]})}
                            barHeight={WScale(18)}
                            circleBorderWidth={0}
                            backgroundActive={'rgba(74, 144, 226, 0.2)'}
                            backgroundInactive={'lightgray'}
                            circleActiveColor={'rgb(74, 144, 226)'}
                            circleInActiveColor={'gray'}
                        />
                        <View style = {styles.emptySpace}/>
                        <TouchableOpacity style = {styles.removeItem}>
                            <Text style = {styles.headingsTextSmall} >Remove</Text>
                        </TouchableOpacity>
                        <View style = {styles.emptySpaceEnd}/>
                    </View>
                    
                </View> 
                </View>
        )
    }
    renderMembersList = () => {
        
        return(
            <FlatList 
            scrollsToTop = {false}
            data = {this.state.data}
            extraData={this.state}
            renderItem={({item,index}) =>
                <CustomListItem
                 content = {<this.ListItem item = {item} index = {index}/>}
                 />
            }
            keyExtractor={item => item.email}
            /> 
        )
    }
    renderBottomContent = (props) => {
        const memberData = props.memberData
        if(memberData.length > 0){
            return <this.renderMembersList/>
        }
        else{
            return <this.renderMessageIcon/>
        }
    }
    renderUpperContainer = (props) => {
        const show = props.show
        if(show){
            return(
                <View style = {styles.upperContainer}>
                    <StepsCountComponent count = "2" textFirstLine = "Lets invite members" textSecondLine = "to your team."/>
                </View>
            )
        }
        return null
    }
    render () {
        return(
            <View style = {styles.container}>
                <View style = {styles.topBar}>
                <TopComponent
                    heading = "Invite Members"
                    leftButton = "Back"
                    leftButtonAction = {()=>this.OnPressBack()}
                    rightButton = ""
                    rightButtonAction = {null}
                />
                </View>
                <this.renderUpperContainer show = {this.state.showIntroTopBar}/>
                <View style = {styles.upperMiddleContainer}>
                <View style = {styles.upperMiddleInnerConatiner}>
                    <View style = {styles.tabsContainer} >
                        <Text style = {styles.headingsTextSmall}>Invite via</Text>
                        <Text />
                        <Tabs>
                        <View title = "Email" id = {1}  style = {styles.tabContent}>
                            <Text style={[(!this.state.invalidEmail ? styles.headingsTextSmall : styles.invalidEmailHeadingText),styles.emailHeadingText]}>Email</Text>
                            <TextInput style = {!this.state.invalidEmail ? styles.input : styles.invalidInput}
                                // underlineColor= {"#d3dfef" }
                                // underlineActiveColor="#00a0e3"
                                // fontSize={WScale(12)}
                                // color="#4a4a4a"
                                onChangeText = {(text)=> this.setState({email : text})}
                                onFocus = {()=> this.inviteType = InviteType.InviteViaEmail}
                                ref = {(input) => this.emailInput = input}
                            />
                        </View>
                        <View title = "Phone" id = {2} style = {styles.tabContent}>
                            <Text style= {[(!this.state.invalidPhone ? styles.headingsTextSmall : styles.invalidEmailHeadingText),styles.emailHeadingText]}>Phone</Text>
                            <TextInput style = {!this.state.invalidPhone ? styles.input : styles.invalidInput}
                                // underlineColor= {"#d3dfef" }
                                // underlineActiveColor="#00a0e3"
                                // fontSize={WScale(12)}
                                // color="#4a4a4a"
                                onChangeText = {(text)=> this.setState({phoneNumber : text})}
                                onFocus = {()=> this.inviteType = InviteType.InviteViaPhone}
                                ref = {(input) => this.phoneInput = input}
                            />
                            
                        </View>
                        </Tabs>
                    </View>
                    <View style = {styles.addAsAdmin}>
                        <View style = {styles.addAsAdminInnerContainerLeft}>
                            <Text style = {styles.headingsTextSmall} >Admin</Text>
                            <this.renderSwitch valueType = "main"/>
                        </View>
                        <CustomButton 
                            type = {ButtonType.BorderButton}
                            text = "ADD"
                            action = {()=>this.OnPressAdd()}
                            style = {{width : WScale(80),height : WScale(30),backgroundColor : "transparent",
                            borderColor : "rgba(74,144,226,1)"}}
                            textStyle = {{color : 'rgba(74,144,226,1)'}}
                        />
                    </View>
                </View>
                </View>
                <View style = {styles.lowerMiddleContainer}>
                <View style = {styles.lowerMiddleContentContainer}>
                    <Text style = {styles.textDocs}>Orlink Docs</Text>
                    <Text style = {styles.textDocs}>
                        <Text>{this.state.data.length}</Text>
                        <Text> Members</Text>
                    </Text>
                </View>
                </View>
                <View style = { this.state.showIntroTopBar ? styles.bottomContainer : styles.bottomButtonContainerExtended}>
                   <this.renderBottomContent memberData = {this.state.data}/>
                </View>
                <View style = {styles.bottomButtonContainer}>
                    <CustomButton 
                        type = {this.state.data.length > 0 ? ButtonType.BigBlueButton : ButtonType.BigDisabledButton} 
                        text = {this.state.data.length > 0 ? "INVITE" : "NEXT"} 
                        action = {this.state.data.length > 0 ? ()=>this.OnPressInvite() : null} />
                </View>
                {this.props.invitingMembers ? <CustomPopup 
                    type = {PopupType.Loading}
                    popupOpen = {this.props.invitingMembers}
                    loadingText = "Sending Request"
                /> : null }
            </View>

        )
    }
}
const mapStateToProps = state => {
    return{
        invitingMembers : state.team.invitingMembers,
        membersData : state.team.membersData,
        error : state.team.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInviteMembers : (membersData) =>
            dispatch(IniviteTeamMembers(membersData))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InviteMember)
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "#fafbfd",
    },
    topBar : {
        flex : 0.11,
        shadowOffset:{  width: 0,  height: 2.5,  },
        shadowColor: 'black',
        backgroundColor : "#fff",
        shadowOpacity: 0.1,
        shadowRadius : 3,
        elevation : 3,
        justifyContent : "center",
        alignItems : "center",
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
    upperContainer : {
        flex : 0.15,
        
    },
    upperMiddleContainer : {
        flex : 0.3,
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor : 'transparent',
    },
    upperMiddleInnerConatiner : {
        flex : 0.8,
        justifyContent : 'space-between',
        width : window.width * 0.8,
    },
    tabsContainer : {
        flex : 0.75,
    },
    tabContent : {
        flex: 1,
    },
    headingsTextSmall : {
        fontFamily: "Avenir",
        fontSize: WScale(14),
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a6a6a6"
    },
    emailHeadingText : {
        marginTop : WScale(5)
    },
    invalidEmailHeadingText : {
        color : 'red'
    },
    addAsAdmin : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    addAsAdminInnerContainerLeft: {
        flex : 0.5,
        justifyContent : 'space-between',
        flexDirection : 'row',
    },
    lowerMiddleContainer : {
        flex : 0.07,
        backgroundColor : 'rgba(54,68,78,1)',
        alignItems : 'center',
        justifyContent : 'center',
    },
    lowerMiddleContentContainer : {
        width : window.width * 0.9,
        justifyContent : 'space-between',
        flexDirection : 'row'
    },
    textDocs : {
        color : "#fff"
    },
    textMembers :{
        color : "#fff"
    },
    bottomContainer : {
        flex : 0.26,
        backgroundColor : 'transparent',
        justifyContent : "center",
        alignItems : "center",
    },
    bottomButtonContainerExtended : {
        flex : 0.41,
        backgroundColor : 'transparent',
        justifyContent : "center",
        alignItems : "center",
    },
    bottomButtonContainer : {
        flex : 0.1,
        alignItems : 'center',
    },
    input : {
        marginTop : WScale(8),
        borderBottomWidth: 1.5,
        borderColor : "#d3dfef"
    },
    invalidInput : {
        marginTop : WScale(8),
        borderBottomWidth: 1.5, 
        borderColor : 'red'
    },
    listItemContiner : {
        justifyContent : "center",
        alignItems : "center",
        
    },
    listItemInnerContiner :{
        width : window.width * 0.9,
        
    },
    listItem : {
        width : window.width * 0.9,
        borderRadius : 10,
        height : WScale(100),
        backgroundColor : "#fff",
        shadowOffset:{  width: 2.5,  height: 2.5,  },
        shadowColor: 'black',
        backgroundColor : "#fff",
        shadowOpacity: 0.1,
        shadowRadius : 10,
        elevation : 3,
        marginTop : WScale(10),
        
        justifyContent : 'flex-start',
        alignItems : 'center',
        flexDirection : 'row',
    },
    imageView : {
        width : WScale(67),
        height : WScale(67),
        marginLeft : WScale(16),
        borderRadius : WScale(67)/2,
        borderWidth : 1.5,
        borderColor : "rgb(211,223,239)",
        justifyContent : 'center',
        alignItems : 'center',
    },
    initialsText : {
        fontSize : 20,
        color : 'rgb(166, 166, 166)'
    },
    rowItemTextContainer : {
        marginLeft : WScale(20),
        // width : '100%'
        flex : 1,
    },
    nameStyle : {
        fontSize : 16,
        color : 'rgb(166, 166, 166)'
    },
    emailStyle : {
        fontSize : 12,
        color : 'rgb(166, 166, 166)'
    },
    separatorStyle : {
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: 'rgb(248, 248, 248)',
        width: '100%', 
        height: 1
    },
    listItemBottomContainer : {
        justifyContent : 'space-between',
        flexDirection : 'row',
    },
    emptySpace : {
        flex : 0.4,
    },
    emptySpaceEnd : {
        flex : 0.3,
    },
    messageIcon : {
        // width : WScale(20),
        // height : WScale(20),
    },
    extraFlex : {
        flex : 0.15,
    }
})
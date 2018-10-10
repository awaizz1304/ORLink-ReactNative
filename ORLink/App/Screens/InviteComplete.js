import React ,{Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity,Modal,TextInput, FlatList} from 'react-native';
import CustomButton, { ButtonType } from '../UIComponents/CustomButton';
import { WScale,HScale } from '../Modules/MultiResolution'
import { getInitials, formatDate } from '../Components/Utilities/Utilities';
import ClientLayer from '../Components/Layers/ClientLayer';
import MemberInviteDataModel, { InviteType } from '../Components/Services/DataService/DataModels/MemberInviteDataModel';
import { Switch } from 'react-native-switch';
import CustomPopup, { PopupType } from '../UIComponents/CustomPopup';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class InviteComplete extends Component {
    fromCreateTeamScreen = false
    constructor (props){
        super(props)
        this.state = {
            teamData : null,
            data : [],
            adminRights : [],
            sendingInvite : false,
            teamCreationDate : null
        }
    }
    componentDidMount () {
        const membersData = this.props.navigation.getParam('membersData',null)
        const teamData = this.props.navigation.getParam('teamData',null)
        this.setState({data : membersData,teamData : teamData},()=>{
            var checks = []
            this.state.data.forEach((_data) => {
            checks.push(_data.addAsAdmin)
            })
            formattedDate = formatDate(this.state.teamData.creationTime)
            this.setState({adminRights : checks,teamCreationDate : formattedDate})
            
        })
        fromCreateTeamScreen = true
    }
    OnPressHome () {

    }
    OnPressInviteNewMember () {
        this.props.navigation.state.params.returnData()
        this.props.navigation.goBack()
    }
    OnPressResendInvite = (index) => {
        this.setState({sendingInvite : true})
        dataItem = this.state.data[index]
        ClientLayer.getInstance().getDataService().SingleInvite(dataItem,()=>{
            this.setState({sendingInvite : false})
        },(error)=>{
            this.setState({sendingInvite : false})
        })
    }
    renderMembersList = () => {
        return(
            <FlatList 
            scrollsToTop = {false}
            data = {this.state.data}
            extraData={this.state}
            renderItem={({item,index}) =>
                <View style = {styles.listItemContiner}>
                    <View style = {styles.listItem} >
                    <View style = {styles.imageView}>
                        <Text style = {styles.initialsText}>{getInitials(item.name)}</Text>
                    </View>
                    <View style = {styles.rowItemTextContainer}>
                        <Text style = {styles.nameStyle}>{item.name}</Text>
                        <Text style = {styles.emailStyle}>{item.inviteType == InviteType.InviteViaEmail ? item.email : item.phoneNumber}</Text>
                        <TouchableOpacity onPress = {this.OnPressInviteNewMember}> 
                            <Text style = {styles.resendInvite}>Resend Invite?</Text>
                        </TouchableOpacity>
                        <View style = {styles.separatorStyle} />
                        <Text />
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
                </View>
            }
            keyExtractor={item => item.email}
            /> 
        )
    }
    render () {
        return(
            <View style = {styles.container}>
            <View style = {styles.topBar}>
            <View style = {styles.topBarContentContainer}>
                <View style = {styles.topBarButtonContainer}>
                <TouchableOpacity onPress = {this.OnPressHome}>
                    <Text style = {styles.backText}>Home</Text>
                </TouchableOpacity>
                </View>
                <Text style = {styles.headingText}>Orlink Docs</Text>
                <View style = {styles.topBarButtonContainer}></View>
                
            </View>
            </View>
            <View style = {styles.upperContainer}>
            <View style = {styles.upperContentContainer}>
                <Text style = {styles.textIntro}>We have sent an invitation to your {"\n"}team members.</Text>
                <Text />
                <CustomButton 
                    type = {ButtonType.BorderButton}
                    text = "GREAT! SHOW ME HOME SCREEN"
                    action = {()=>this.OnPressHome()}
                    style = {{width : WScale(220),height : WScale(40),backgroundColor : "transparent",
                    borderColor : "#fff"}}
                    textStyle = {{color : '#fff'}}
                />
            </View>
            </View>
            <View style = {styles.middleContainer}>
            <View style = {styles.middleContentContainer}>
                <Text style = {styles.textDocs}>
                    <Text>Created on : </Text>
                    <Text>{this.state.teamCreationDate}</Text>
                </Text>
                <Text style = {styles.textDocs}>
                    <Text>{this.state.data.length}</Text>
                    <Text> Members</Text>
                </Text>
            </View>
            </View>
            <View style = {styles.bottomContainer}>
                <this.renderMembersList />
            </View>
            <View style = {styles.bottomButtonContainer}>
                <CustomButton 
                    type = {ButtonType.BigBlueButton} 
                    text = {"INVITE NEW MEMBER" } 
                    action = {()=>this.OnPressInviteNewMember()} />
            </View>
            {this.state.sendingInvite ? <CustomPopup
                type = {PopupType.Loading}
                popupOpen = {this.state.sendingInvite}
                loadingText = "Sending Invite"
            /> : null }
        </View>
        )
    }
}
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
    upperContainer :{
        flex : 0.25,
        backgroundColor : 'green',
        justifyContent : 'center',
        alignItems : 'center'
    },
    upperContentContainer : {
        width : window.width * 0.85,
    },
    textIntro : {
        fontFamily: "Avenir",
        fontSize: WScale(20),
        fontWeight: "300",
        fontStyle: "normal",
        // lineHeight: 13,
        letterSpacing: 0,
        color: "#ffffff"
    },
    middleContainer : {
        flex : 0.07,
        backgroundColor : 'rgba(54,68,78,1)',
        alignItems : 'center',
        justifyContent : 'center',
    },
    bottomContainer : {
        flex : 0.46,
        backgroundColor : "transparent",
        justifyContent : "center",
        alignItems : "center",
    },
    bottomButtonContainer : {
        flex : 0.1,
        alignItems : 'center',
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
        height : WScale(120),
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
        height: 1.5
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
    middleContentContainer : {
        width : window.width * 0.9,
        justifyContent : 'space-between',
        flexDirection : 'row'
    },
    textDocs : {
        color : "#fff"
    },
    headingsTextSmall : {
        color : 'rgb(166, 166, 166)'
    },
    resendInvite : {
        marginTop : WScale(5),
        marginBottom : WScale(5),
        fontFamily: "Avenir",
        fontSize: WScale(12),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a90e2"
    }
})

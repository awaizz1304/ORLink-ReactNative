import React , {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity,Image, FlatList} from 'react-native';
import ClientLayer from '../Components/Layers/ClientLayer';
import TopComponent from '../UIComponents/TopComponent'
import { WScale,HScale } from '../Modules/Multi-Resolution/MultiResolution'
import CustomListItem from '../UIComponents/CustomListItem'
import TeamDataModel from '../Components/Services/DataService/DataModels/TeamDataModel'
import { GetAllTeams } from '../Store/Actions/TeamActions';
import CustomPopup, { PopupType } from '../UIComponents/CustomPopup'
import { connect } from 'react-redux'
import { formatDate } from '../Components/Utilities/Utilities';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class Team extends Component {
    constructor(props){
        super(props)
        this.state = {
            teamsList : []
        }
    }
    componentDidMount () {
        this.props.onGetTeams()
    }
    componentDidUpdate () {
        if(this.props.teamsList != null){
            if(this.state.teamsList.length == 0){
                this.setState({teamsList : this.props.teamsList})
            }
        }
    }
    OnPressTeamItem = (item) => {
        this.props.navigation.navigate('InviteCompleteScreen',{
            membersData : item.members,
            teamData : item,
            introBar : false
        })
    }
    OnPressExitTeam = (index) => {

    }
    ListItem = (props) => {
        const item = props.item
        const index = props.index
        return (
            <TouchableOpacity onPress = {()=>this.OnPressTeamItem(item)}>
            <View style = {styles.listItem}>
                <View style = {styles.rowItemTextContainer}>
                    <Text style = {styles.nameStyle}>{item.name}</Text>
                    <Text style = {styles.createdByText}>
                        <Text>Created by </Text>
                        <Text style = {styles.creatorNameText}>{item.createdBy}</Text>
                    </Text>
                    <View style = {styles.separatorStyle} />
                    <View style = {styles.bottomContainer} >
                        <Text style = {styles.exitText}>{item.creationTime}</Text>
                        <TouchableOpacity onPress = {this.OnPressExitTeam(index)}>
                        <View style = {styles.exitImageContainer}>
                            <Text style = {styles.exitText}>Exit team  </Text>
                            <Image style = {styles.exitIcon} source = {require('../assets/Common/DoorIcon/logout1.png')} />
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
    renderList = () => {
        return (
            <FlatList
                scrollsToTop = {false}
                data = {this.state.teamsList}
                extraData={this.state}
                renderItem={({item,index}) =>
                    <CustomListItem
                        content = {<this.ListItem item = {item} index = {index}/>}
                    />
                }
                keyExtractor={item => item.id}
            /> 
        
        )
    }
    render (){
        return(
            <View style = {styles.container}>
                <View style = {styles.topBar}>
                    <TopComponent
                        heading = "Team"
                    />
                </View>
                <View style = {styles.upperContainer}>
                    <TouchableOpacity>
                    <View style = {styles.addButtonContainer}>
                            <Image style = {styles.addIcon} source = {require('../assets/Common/AddButton/add.png')} />
                            <Text style = {styles.addTeamText}>Add new team</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.listContainer}>
                    <this.renderList />
                </View>
            {this.props.loadingData ?<CustomPopup 
                type = {PopupType.Loading}
                loadingText = "Getting teams"
                popupOpen = {this.props.loadingData}
            /> : null }
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        loadingData : state.team.loadingTeams,
        teamsList : state.team.teamsList,
    }

}
const mapDispatchToProps = dispatch =>{
    return {
        onGetTeams:() => 
            dispatch(GetAllTeams())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Team)
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff"
    },
    topBar : {
        flex : 0.11,
        width : '100%'
    },
    upperContainer : {
        flex : 0.08,
        alignItems : 'center',
    },
    listContainer : {
        marginTop : WScale(18),
        flex : 0.81,
    },
    addButtonContainer : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'flex-end',
    },
    addIcon : {
        width : WScale(18),
        height : WScale(18),
    },
    addTeamText : {
        marginLeft : WScale(10),
        height: WScale(19),
        // fontFamily: "SFProText",
        fontFamily : "Avenir",
        fontSize: WScale(14),
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.04,
        // textAlign: "center",
        color: "#4a90e2"
    },
    createdByText : {
        marginTop : WScale(5),
        fontFamily: "Avenir",
        fontSize: WScale(12),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a6a6a6"
    },
    creatorNameText : {
        fontFamily: "Avenir",
        fontSize: WScale(12),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a"
    },
    listItem : {
        width : window.width * 0.9,
        borderRadius : 10,
        height : WScale(115),
        backgroundColor : "#fff",
        shadowOffset:{  width: 2.5,  height: 2.5,  },
        shadowColor: 'black',
        backgroundColor : "#fff",
        shadowOpacity: 0.1,
        shadowRadius : 10,
        elevation : 5,
        marginTop : WScale(12),
        
        justifyContent : 'flex-start',
        alignItems : 'center',
        flexDirection : 'row',
    },
    rowItemTextContainer : {
        marginLeft : WScale(20),
        // width : '100%'
        flex : 1,
    },
    nameStyle : {
        fontFamily: "Avenir",
        fontSize: WScale(19),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a"
    },
    separatorStyle : {
        marginTop: WScale(10),
        marginBottom: 1,
        backgroundColor: 'rgb(248, 248, 248)',
        width: '60%', 
        height: 1
    },
    bottomContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    exitText : {
        marginTop : WScale(10),
        fontFamily: "Avenir",
        fontSize: WScale(12),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a6a6a6"

    },
    exitIcon : {
        marginRight : WScale(10),
        marginTop : WScale(10),
        width: WScale(15),
        height: WScale(15)
    },
    exitImageContainer : {
        flexDirection : 'row'
    }
})
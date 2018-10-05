import React , {Component} from 'react'
import {Modal, Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomPopup from './CustomPopup';
import CustomButton, { ButtonType } from './CustomButton';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


class WelcomeScreen extends Component {
    constructor (props){
        super(props)
        this.state = {
            modalVisible : false
        }
    }
    componentDidMount () {

    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    OnPressCreateTeam = () =>{
        this.props.navigation.navigate('CreateTeam')
    }
    render () {
        return(
            <View style = {styles.container}>
                <View style = {styles.topBar}>
                    <Text></Text>
                    <TouchableOpacity>
                        <Text style = {styles.skipText}>Skip Now</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.upperContainer}>
                    <View style = {styles.boxContainer}>
                        <Text style = {styles.memberCount}>45</Text>
                        <Text></Text>
                        <Text style = {styles.textCointainer}>
                            <Text style = {styles.introText}> members from your{"\n"} hospital are using{"\n"}</Text>
                            <Text style = {styles.orLinkText}> Orlink</Text>
                            <Text style = {styles.introText}> for collaboration.</Text>
                        </Text>
                    </View>
                </View>
                <View style = {styles.upperMiddleContainer}></View>
                <View style = {styles.middleContainer}>
                    <Text style = {styles.infoText1}>Create you surgical team and {"\n"}start collaborating on your {"\n"}preference card</Text>
                </View>
                <View style = {styles.bottomContainer}>
                    <CustomButton 
                        type = {ButtonType.BigBlueButton} 
                        text = "CREATE TEAM" 
                        action = {()=>this.OnPressCreateTeam()} />
                </View>
                
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
        justifyContent : 'center',
        alignItems : 'flex-end',
        
    },
    skipText : {
        fontFamily: "Avenir",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a90e2",
        marginRight : 5,
    },
    upperContainer : {
        flex : 0.54,
        justifyContent : "center",
        alignItems : "center",
    },
    boxContainer : {
        width : window.width * 0.85,
        height : window.height * 0.40,
        borderRadius : 10,
        shadowColor: "rgba(202, 202, 202, 0.42)",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 37,
        shadowOpacity: 1,
        backgroundColor : 'green',
        elevation : 3,

    },
    memberCount : {
        fontWeight : "bold",
        fontSize : 70,
        marginLeft : '8%',
        marginTop : '9%',
        color : "#fff",
    },
    introText : {
        fontSize : 25,
        color : "#fff",
    },
    orLinkText : {
        fontSize : 25,
        fontWeight : "bold",
        color : "#fff",
    },
    textCointainer : {
        marginLeft : '8%',
    },
    upperMiddleContainer : {
        flex : 0.04,
    },
    middleContainer : {
        flex : 0.20,
    },
    bottomContainer : {
        flex : 0.1,
        alignItems : "center",
    },
    infoText1 : {
        fontFamily: "Avenir",
        fontSize: 16,
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a",
        marginLeft : "12%"
    },
    createTeamButton: {
        width: window.width * 0.8,
        height: window.height * 0.075,
        borderRadius: 6,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowRadius: 65,
        shadowOpacity: 1,
        backgroundColor : 'rgba(74,144,226,1)',
        alignItems : 'center',
        justifyContent : "center",
    },
    teamButtonText : {
        color : '#fff',
        fontSize : 13,
    },

})
export default WelcomeScreen
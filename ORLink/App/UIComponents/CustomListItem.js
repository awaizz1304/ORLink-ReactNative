import React , {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,TouchableWithoutFeedback} from 'react-native';
import { WScale,HScale } from '../Modules/Multi-Resolution/MultiResolution'
import { getInitials } from '../Components/Utilities/Utilities';
import { InviteType } from '../Components/Services/DataService/DataModels/TeamMemberDataModel';
import { Switch } from 'react-native-switch';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


const CustomListItem = ({content}) =>{
    return(
        <View style = {styles.listItemContiner}>
            {content}
        </View>
    )
}

export default CustomListItem

const styles = StyleSheet.create({
    listItemContiner : {
        justifyContent : "center",
        alignItems : "center",
    },
    listItem : {
        width : window.width * 0.9,
        borderRadius : 10,
        height : WScale(100),
        backgroundColor : "#fff",
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: 'black',
        backgroundColor : "#fff",
        shadowOpacity: 0.3,
        shadowRadius : 20,
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
    headingsTextSmall : {
        fontFamily: "Avenir",
        fontSize: WScale(14),
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a6a6a6"
    },
})
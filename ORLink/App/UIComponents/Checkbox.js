/*
   
    **Checkbox component**
    Note! Make sure to install and set the required component
    dependencies from this link before getting started ......
    https://www.npmjs.com/package/react-native-vector-icons

*/

// Importing core module
import React from 'react'
import { Text,View } from 'react-native'

// Importing 3rd party dependencies
import Icon from 'react-native-vector-icons/FontAwesome'

const Checkbox = (props) => {

    let selectedIcon = props.marked ? "circle-o" : "circle"

    return (
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            
            <Text style={{color:props.messageColor}}>
                <Icon name={selectedIcon} size={props.iconSize} color={props.iconColor} />
            </Text>

            <Text style={{color:props.messageColor,fontSize:props.fontSize,paddingLeft:props.interPadding}}>
                {props.message}
            </Text>
        </View>
    )
}

// Module Exports.
module.exports = {Checkbox}

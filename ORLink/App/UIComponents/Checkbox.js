/*
   
    **Checkbox component**
    Note! Make sure to install and set the required component
    dependencies from this link before getting started ......
    https://www.npmjs.com/package/react-native-vector-icons

*/

// Importing core module
import React from 'react'
import { Text,View,TouchableOpacity } from 'react-native'

// Importing 3rd party dependencies
import Icon from 'react-native-vector-icons/FontAwesome'

// Renders the Circle Checkbox
const Checkbox = (props) => {

    let selectedIcon = props.marked ? "circle" : "circle-o"

    return (
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            
            <TouchableOpacity onPress={props.rememberMe}>
                <Text style={{color:props.messageColor}}>
                    <Icon name={selectedIcon} size={props.iconSize} color={props.iconColor} />
                </Text>
            </TouchableOpacity>

            <Text style={{color:props.messageColor,fontSize:props.fontSize,paddingLeft:props.interPadding}}>
                {props.message}
            </Text>
        </View>
    )
}

// Module Exports.
module.exports = { Checkbox }

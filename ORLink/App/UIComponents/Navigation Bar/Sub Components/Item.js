// Contains a single navigation item,
// basically the icons for the bottom bar.

// Importing core libraries
import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

// Importing Custom Modules.
import { WScale, HScale } from '../../../Modules/Multi-Resolution/MultiResolution'

// Importing 3rd party dependencies
import IonicIcon from 'react-native-vector-icons/Ionicons'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import Fontawesome from 'react-native-vector-icons/FontAwesome'

// Component Concreate Implementation

const Item = (props) => {

    let cColor = props.selected ? "#4a90e2" : "#a6a6a6"
    let IconList = [IonicIcon,FoundationIcon,Fontawesome]
    let Icon = IconList[props.type]

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.touchableContainer}>
                {/* Action Item */}
                <Text style={styles.decsStyle}>

                    {/* Icon */}
                    <Icon name={props.iconName} size={WScale(9.5 * 2)} color={cColor} />{"\n"}

                    {/* Description */}
                    <Text style={
                        {
                            fontSize: WScale(5 * 2),
                            fontWeight: "900",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "center",
                            color: cColor
                        }
                    }>{props.title}</Text>

                </Text>
            </TouchableOpacity>

        </View>
    );

};

// Exporting Component
export default Item;

// Component Style Sheet
const styles = StyleSheet.create({
    container:
    {
        height: "100%",
        justifyContent: "center"
    },
    touchableContainer:
    {
        alignItems: "center"
    },
    iconStyle:
    {
        width: WScale(9.5 * 2),
        height: WScale(9.5 * 2),
        resizeMode: "stretch"
    },
    decsStyle:
    {
        textAlign: "center"
    },
    innerText:
    {
        fontSize: WScale(5 * 2),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#4a90e2"
    }
})
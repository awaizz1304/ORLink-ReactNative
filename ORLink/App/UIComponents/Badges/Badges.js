/*
    Badges used for determining the status of the procedures.
*/

// Importing core libraries.
import React from 'react'
import { View, Text } from 'react-native'

// Importing core modules
import { WScale, HScale } from '../../Modules/Multi-Resolution/MultiResolution'

// Concrete Implementation.
const Badges = (props) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "center",alignItems:"center",borderRadius:100,backgroundColor:props.color }}>
            <Text style={
                {
                    fontSize: WScale(4 * 2),
                    fontWeight: "900",
                    fontStyle: "normal",
                    letterSpacing: 1,
                    color: "#ffffff",
                    paddingHorizontal: WScale(5.5 * 2),
                    paddingVertical: WScale(1.5 * 2)
                }
            }>
                {props.status}
            </Text>
        </View>
    )
};

// Exporting module.
export default Badges
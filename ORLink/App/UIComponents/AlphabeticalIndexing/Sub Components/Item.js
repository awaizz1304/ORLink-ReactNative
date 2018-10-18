/*
    Defines the single item to be rendered
    inside of the search listing.
 */

//  Importing core modules
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

// Importing Modules
import { WScale, HScale } from '../../../Modules/Multi-Resolution/MultiResolution'

// Concrete implementation
const Item = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={
                {
                    flex: 1,
                    flexDirection: "column",
                    fontSize: WScale(5.5*2),
                    fontWeight: "900",
                    fontStyle: "normal",
                    textAlign: "center",
                    color: "#cccccc"
                }
            }>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};

// Exporting component
export default Item;

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})
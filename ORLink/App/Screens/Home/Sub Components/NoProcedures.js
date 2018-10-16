// Contains the section rendered when there are
// no procedures to render.

// Importing Core Components
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

// Importing modules
import { WScale, HScale } from '../../../Modules/Multi-Resolution/MultiResolution'
import CustomButton, { ButtonType } from '../../../UIComponents/CustomButton'

// Component Defination
const NoProcedures = () => {
    return (
        // Container
        <View style={styles.container}>

            {/* Render Icon */}
            <Image source={require('../assets/scalpelCopy.png')} style={styles.containerIcon} />

            {/* Description */}
            <Text style={styles.description}>You have no procedure</Text>

            {/* Rendering Button */}
            <View style={styles.button}>
                <CustomButton type={ButtonType.BigBlueButton} text="CREATE PROCEDURE" />
            </View>

        </View>
    );

};

// Exporting component
export default NoProcedures;

// Comppnent Stylesheet
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerIcon:
    {
        width: WScale(31 * 2),
        height: HScale(36.5 * 2),
        resizeMode: "contain"
    },
    description:
    {
        fontFamily: "Avenir",
        fontSize: WScale(9 * 2),
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#9b9b9b",
        marginTop: WScale(13.5 * 2)
    },
    button:
    {
        marginTop: WScale(15.5 * 2)
    }
})
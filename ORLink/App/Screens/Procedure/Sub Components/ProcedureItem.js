/*
    Defines the single procedure instance and its rendered display.
*/

// Importing core libraries.
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

// Importing Core Modules
import { WScale, HScale } from '../../../Modules/Multi-Resolution/MultiResolution'

// Importing UI Components
import Badges from '../../../UIComponents/Badges/Badges'

// Importing 3rd Parties Components.
import Icon from 'react-native-vector-icons/Feather'

// Defines the core body of the procedure.
const ProcedureItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.itemsContainer}>
                <View style={styles.pImage}>
                    <Image source={require('../assets/avatar.png')} style={styles.image} />
                </View>
                <View style={styles.pData}>
                    <Text style={styles.procdureType}>Foot Surgery</Text>
                    <Text style={styles.attendeName}>Dr. Jason Harris</Text>
                    <Badges color="#966c26" status="Draft" />

                    {/* Data and Download */}
                    <View style={styles.dateNdownload}>
                        <Text style={styles.date}>12 August 2018</Text>
                        <TouchableOpacity>
                            <Text style={styles.download}>Download <Icon name="download" size={WScale(5.5 * 2)} /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

// Exporting Contents.
export default ProcedureItem;

// Stylesheet
const styles = StyleSheet.create({
    container:
    {
        flexDirection: "row",
        width: WScale(162.5 * 2),
        height: WScale(67 * 2),
        borderRadius: 5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(227, 227, 227, 0.38)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 15,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: "#f0f0f0",
        marginBottom: WScale(6 * 2)
    },
    itemsContainer:
    {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    pImage:
    {
        flex: 0.3,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    pData:
    {
        flex: 0.7,
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    image:
    {
        width: WScale(32.5 * 2),
        height: WScale(32.5 * 2),
        borderRadius: 100,
        marginTop: WScale(8.5 * 2)
    },
    procdureType:
    {
        fontFamily: "Avenir",
        fontSize: WScale(8 * 2),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a"
    },
    attendeName:
    {
        opacity: 0.99,
        fontFamily: "Avenir",
        fontSize: WScale(8 * 2),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a"
    },
    dateNdownload:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: WScale(10.5 * 2)
    },
    date:
    {
        fontSize: WScale(6 * 2),
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a6a6a6"
    },
    download:
    {
        fontSize: WScale(6 * 2),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a90e2"
    }
})
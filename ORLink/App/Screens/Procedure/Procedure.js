/*
    Procedure window for rendering the list of procedures in process,
    to be completed.
*/

// Importing React Core Components
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native'

// Importing Sub Components
import Title from './Sub Components/Title'
import Search from './Sub Components/Search'
import ProcedureItem from './Sub Components/ProcedureItem'

// Importing Icons
import Icon from 'react-native-vector-icons/Ionicons'

// Importing Custom Components
import { WScale, HScale } from '../../Modules/Multi-Resolution/MultiResolution'
import Indexing from '../../UIComponents/AlphabeticalIndexing'

// Core Class Component Implementation
class Procedure extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/* Top-Bar */}
                <Title />

                {/* Search */}
                <Search />

                {/* Procedure Rendering */}
                <View style={styles.mainContentContainer}>

                    {/* Contains Procedure Listing */}
                    <View style={styles.procedureContainer}>

                        {/* Create Procedure */}
                        <View style={styles.addNewProcedure}>

                            {/* Add new procedure */}
                            <TouchableOpacity>
                                <Text>
                                    <Icon name="ios-add-circle-outline" size={WScale(11 * 2)} color={"#4a90e2"} /> {" "}
                                </Text>
                            </TouchableOpacity>

                            {/* Follow up text */}
                            <Text style={styles.textStyling}>
                                Create New Procedure
                            </Text>

                        </View>

                        {/* Procedures */}
                        <View style={styles.scrollViewContainer}>
                            {/* TODO! Need to update it to flat list */}

                            {/* <ProcedureItem /> */}
                            <FlatList
                                data={[{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }]}
                                renderItem={ProcedureItem}
                            />

                        </View>

                    </View>

                    {/* Contains Procedure Indexing */}
                    <View style={styles.indexingContainer}>

                        <Indexing
                            sortElement={['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']}
                        />

                    </View>

                </View>

            </View>
        );
    }
}

// Exporting Component
export default Procedure

// Component Style Sheet
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#fff"
    },
    mainContentContainer:
    {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "red"
    },
    procedureContainer:
    {
        flex: 0.97,
        backgroundColor: "#fafbfd",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    indexingContainer:
    {
        flex: 0.03,
        backgroundColor: "#fff"
    },
    addNewProcedure:
    {
        flex: 0.1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: WScale(7.5 * 2)
    },
    textStyling:
    {
        fontFamily: "Avenir",
        fontSize: WScale(7 * 2),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0.04,
        textAlign: "center",
        color: "#4a90e2"
    },
    scrollViewContainer:
    {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: WScale(3 * 2)
    }
})
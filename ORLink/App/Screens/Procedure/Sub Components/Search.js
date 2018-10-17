/*
    Data filtering input component.
*/

// Importing core libraries.
import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

// Importing 3rd parties
import Icon from 'react-native-vector-icons/EvilIcons'

// Importing Custom Modules
import { WScale, HScale } from '../../../Modules/Multi-Resolution/MultiResolution'

// Core component implementation.
const Search = (props) => {
    return (
        <View style={styles.searchArea}>
            <View style={styles.searchAreaContent}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Videos"
                    // onChangeText={(text) => this.searchFilterFunction(text)}
                    />
                    <Icon style={styles.iconStyle} name="search" size={WScale(9 * 2)} />
                </View>
                <TouchableOpacity>
                    <View style={styles.filterIconContainer}>
                        <Image style={styles.filerIcon} source={(require('../../../assets/Common/FilterIcon/filterCopy3x.png'))} />
                        <Text style={styles.filterText}>Filter</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

};

// Exporting component values.
export default Search;

// Component Style Sheet
const styles = StyleSheet.create({
    searchArea: {
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: WScale(6.5 * 2)
    },
    searchAreaContent: {
        width: window.width * 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: WScale(5.5 * 2)
    },
    searchInput: {
        width: WScale(266),
        height: WScale(37),
        borderRadius: WScale(18.6),
        paddingLeft: WScale(15.5 * 2),
        paddingRight: WScale(16 * 2),
        paddingVertical: WScale(4.5 * 2),
        borderStyle: "solid",
        borderWidth: WScale(1),
        borderColor: "#e8e8e8",
    },
    filterText: {
        width: WScale(36),
        height: WScale(20),
        fontFamily: "Avenir",
        fontSize: WScale(15),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a90e2",
        marginLeft: WScale(3)
    },
    filerIcon: {
        width: WScale(14),
        height: WScale(13)
    },
    filterIconContainer: {
        marginLeft: WScale(20),
        flexDirection: 'row',
        alignItems: 'center'

    },
    iconStyle:
    {
        position: "absolute",
        zIndex: 1,
        right: WScale(4.5 * 2)
    },
    textInputContainer:
    {
        justifyContent: "center",
        alignItems: "center"
    }
})
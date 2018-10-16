// Sub Component of the login page holds the top bar,
// containing settings, title and edit profile button.
// The component itself is stateless.

// Importing required components
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

// Importing Custom Modules
import { WScale, HScale } from '../../../Modules/Multi-Resolution/MultiResolution'

// Component body
const ProfileView = (props) => {
    return (
        // Rendering top bar container
        <ScrollView style={styles.topBarContainer}>

            {/* Heading */}
            <View style={styles.heading}>

                {/* Profile Picture */}
                <View style={styles.profilePictureContainer}>

                    {/* Picture */}
                    <Image source={require('../assets/avatar.png')} style={styles.picture} />

                </View>

                {/* Profile Details */}
                <View style={styles.headingContentContainer}>
                    <Text style={styles.profileHeading} numberOfLines={1}>Rick Baker</Text>
                    <Text style={styles.designation} numberOfLines={1}>CTO</Text>
                    <Text style={styles.about} numberOfLines={1}>Oncology head and neck specialist</Text>
                </View>

            </View>


            {/* Line Break */}
            <View style={styles.lineBreak}></View>

            {/* Contact Section */}
            <View style={styles.contactInformationContainer}>

                {/* Contact Information */}
                <View style={{ marginBottom: WScale(11 * 2) }}><Text style={styles.sectionHeading}>CONTACT INFORMATION</Text></View>

                {/* Contact Preference */}
                <View style={{ marginBottom: WScale(10 * 2) }}><Text style={styles.contactPreference}>Prefers to be contacted by phone</Text></View>

                {/* Phone Number */}
                <View style={{ marginBottom: WScale(2.5 * 2) }}><Text style={styles.phNumber}>+1(409)323-4837638</Text></View>
                <View style={{ marginBottom: WScale(14.5 * 2) }}><Text style={styles.contactPreference}>Phone number</Text></View>

                {/* Email Address */}
                <View style={{ marginBottom: WScale(2.5 * 2) }}><Text style={styles.phNumber}>name@example.com</Text></View>
                <View style={{ marginBottom: WScale(14 * 2) }}><Text style={styles.contactPreference}>Email</Text></View>

                {/* Address */}
                <View style={{ marginBottom: WScale(2.5 * 2), width: WScale(63 * 2) }}><Text style={styles.phNumber}>Lorem ipsum dolar sit amet,lisym sosm can emre os</Text></View>
                <View style={{ marginBottom: WScale(13.5 * 2) }}><Text style={styles.contactPreference}>Address</Text></View>

            </View>

            {/* Line Break */}
            <View style={styles.lineBreak}></View>

            {/* Equipment Prefernces */}
            <View style={styles.contactInformationContainer}>

                {/* Preferences */}
                <View style={{ marginBottom: WScale(11 * 2) }}><Text style={styles.sectionHeading}>PREFERENCES</Text></View>

                {/* First Row */}
                <View style={styles.preferenceItemContainer}>
                    <View style={styles.preferenceItem}>
                        <Text style={styles.phNumber}>8</Text>
                        <Text style={styles.contactPreference}>Glove Size</Text>
                    </View>
                    <View style={styles.preferenceItem}>
                        <Text style={styles.phNumber}>Hypoallergenic</Text>
                        <Text style={styles.contactPreference}>Glove Type</Text>
                    </View>
                </View>

                {/* Second Row */}
                <View style={styles.preferenceItemContainer}>
                    <View style={styles.preferenceItem}>
                        <Text style={styles.phNumber}>65</Text>
                        <Text style={styles.contactPreference}>Bovie</Text>
                    </View>
                    <View style={styles.preferenceItem}>
                        <Text style={styles.phNumber}>56</Text>
                        <Text style={styles.contactPreference}>Bipolar</Text>
                    </View>
                </View>

                {/* Third Row */}
                <View style={styles.preferenceItemContainer}>
                    <View style={styles.preferenceItem}>
                        <Text style={styles.phNumber}>Soft music</Text>
                        <Text style={styles.contactPreference}>Music</Text>
                    </View>
                    <View style={styles.preferenceItem}>
                        <Text style={styles.phNumber}>Color blind</Text>
                        <Text style={styles.contactPreference}>Other</Text>
                    </View>
                </View>

            </View>

        </ScrollView>
    )
}

// Exporting component
export default ProfileView;

// Comppnent stylesheet
const styles = StyleSheet.create({
    topBarContainer:
    {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: WScale(9 * 2),
        marginTop: WScale(10.5 * 2),
        marginVertical: WScale(21.5 * 2),
        borderRadius: 5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(227, 227, 227, 0.38)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 15,
        shadowOpacity: 1
    },
    heading:
    {
        flex: 0.3,
        flexDirection: "row",
        marginVertical: WScale(13.5 * 2)
    },
    profilePictureContainer:
    {
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    picture:
    {
        width: WScale(32.5 * 2),
        height: WScale(32.5 * 2),
        resizeMode: "contain",
        borderRadius: 100
    },
    headingContentContainer:
    {
        flex: 0.7,
        marginLeft: WScale(10 * 2),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    profileHeading:
    {
        fontSize: WScale(8 * 2),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a"
    },
    designation:
    {
        fontSize: WScale(6 * 2),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a6a6a6",

    },
    about:
    {
        fontSize: WScale(6 * 2),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a",
        marginTop: WScale(3 * 2)
    },
    lineBreak:
    {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        borderStyle: "solid",
        borderWidth: WScale(0.5 * 2),
        borderColor: "#f5f5f5"
    },
    contactInformationContainer:
    {
        flex: 0.7,
        flexDirection: "column",
        justifyContent: "flex-start",
        marginVertical: WScale(13.5 * 2),
        marginHorizontal: WScale(12.5 * 2)
    },
    sectionHeading:
    {
        flex: 1,
        fontSize: WScale(6 * 2),
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 0.66,
        color: "#4a4a4a",
    },
    contactPreference:
    {
        flex: 1,
        fontSize: WScale(6 * 2),
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 0,
        color: '#a6a6a6'
    },
    phNumber:
    {
        flex: 1,
        fontFamily: "Avenir",
        fontSize: WScale(7.5 * 2),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: '#4a4a4a'
    },
    preferenceItemContainer:
    {
        flex: 1,
        flexDirection: "row",
        marginBottom: WScale(19 * 2)
    },
    preferenceItem:
    {
        flex: 1,
        flexDirection: "column"
    }
})
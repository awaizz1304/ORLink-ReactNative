// Stateless component for holding the top heading section
// of the Login section.

// Importing dependencies.
import React from 'react';
import { View,StyleSheet,Text } from 'react-native'

// Importing custom modules.
import { WScale,HScale } from '../../Modules/Multi-Resolution/MultiResolution'


const TopHeading = () => {
    return (
        // Top Heading View
        <View style={styles.topHeadingContainer}>
            {/* Text Views Container  */}
            <View style={styles.topTextViewContainer}>
                {/* Offset View */}
                <View style={styles.topOffsetView}/>
                {/* Heading */}
                <Text style={styles.topViewHeading}>
                    ORLINK
                </Text>
                {/* Description */}
                <Text style={styles.topViewDescription}>
                    An intuitive surgical{"\n"}
                    workflow platform
                </Text>
            </View>
        </View>
    )
}

// Style Sheet
const styles = StyleSheet.create({
    topHeadingContainer:
    {
        flex:0.3
    },
    topTextViewContainer:
    {
        flex:1,
        flexDirection:'column'
    },
    topOffsetView:
    {
        flex:0.35,
        flexDirection:"row"
    },
    topViewHeading:
    {
        fontSize:WScale(40),
        fontWeight:'bold',
        textAlign:'center'
    },
    topViewDescription:
    {
        fontSize:WScale(20),
        fontWeight:'300',
        textAlign:'center'
    }
})

export default TopHeading;
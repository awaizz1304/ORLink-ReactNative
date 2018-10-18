/* 
    Module for defining the alphabatical indexing of the content
*/

// Importing Core Modules
import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

// Importing Subcomponents
import Item from './Sub Components/Item'

class index extends PureComponent {

    indexClicked= (index) => 
    {
        
    }

    render() {

        return (
            <View style={styles.container}>

                {/* Rendering # */}
                <Item label="#"/>

                {/* Rendering Elements */}
                {this.props.idexingElements.map((item,key) => <Item key={key} label={item} onClick={this.indexClicked}/>)}

            </View>
        )
    }
}

// Exporting Component.
export default index;

// Stylesheet
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})
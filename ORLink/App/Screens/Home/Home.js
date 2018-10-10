import React , {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ClientLayer from '../../Components/Layers/ClientLayer';

class Home extends Component {
    constructor (props){
        super(props)
        this.state = {

        }
    }
    componentDidMount () {

    }
    OnPressLogout = () => {
        ClientLayer.getInstance().getDataManager().SaveValueForKey("Session","")
        this.props.navigation.navigate('Login')
    }
    render () {
        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress = {this.OnPressLogout}>
                <Text style = {styles.textLogout}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff"
    },
    textLogout : {
        marginTop : Platform.OS == 'ios' ? 20 : 0,
    }
})
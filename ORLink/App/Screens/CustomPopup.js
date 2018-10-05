import React , {Component} from 'react'
import {Modal, Platform, StyleSheet, Text, View, TouchableOpacity,ActivityIndicator} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export const PopupType = {
    Loading : 'loading',
    SingleButton : 'singleButton',
    DoubleButton : 'doubleButton',
}
type Props = {loadingText: string,
    title: string,
    description : string,
    actionClose : null,
    closeButtonText : string,
    okButtonText : string,
    actionOk : null,
};
class CustomPopup extends Component<Props> {
    constructor (props){
        super(props)
        this.state = {
            modalVisible : false
        }
    }
    componentDidMount () {
        console.log("CustomPopup")
        this.setState({modalVisible : this.props.modalVisible})
    }
    componentWillUnmount () {
        this.setState({modalVisible : false})
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    renderCustomPopup = (props) => {
        const type = props.type
        if(type == PopupType.Loading){
            return(
                <View style = {styles.popupContainer}>
                <View style = {styles.popupContentContainer}>
                    <ActivityIndicator size = "large" />
                    <Text style = {styles.loadingText}>{this.props.loadingText}</Text>
                </View>
                </View>
            )
        }
        else if (type == PopupType.SingleButton){
            return(
                <View style = {styles.popupContainer}>
                <View style = {styles.popupContentContainer}>
                    <Text style = {styles.titleText}>{this.props.title}</Text>
                    <Text style = {styles.descriptionText}>{this.props.description}</Text>
                    <View style = {styles.singleButtonContaiber}>
                    <TouchableOpacity onPress = {()=>{
                        this.props.actionClose()
                        this.setState({modalVisible : false})
                    }}>
                        <Text style = {styles.buttonText}>{this.props.closeButtonText}</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            )
        }
        else if(type == PopupType.DoubleButton)
        {
            return(
                <View style = {styles.popupContainer}>
                <View style = {styles.popupContentContainer}>
                    <Text style = {styles.titleText}>{this.props.title}</Text>
                    <Text style = {styles.descriptionText}>{this.props.description}</Text>
                    <View style = {styles.doubleButtonContainer}>
                        <TouchableOpacity onPress = {()=>{
                            this.setState({modalVisible : false})
                        }}>
                            <Text style = {styles.buttonText}>{this.props.closeButtonText}</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress = {()=>{
                        this.setState({modalVisible : false})
                        }}>
                            <Text style = {styles.buttonText}>{this.props.okButtonText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            )
        }
        
    }
    render () {
        return(
            <View>
                <Modal
                    animationType= "fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    presentationStyle = "overFullScreen"
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <this.renderCustomPopup type = {this.props.type} />
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    popupContainer : {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : 'rgba(0,0,0,0.3)',
    },
    popupContentContainer : {
        width : window.width * 0.8,
        height : window.height * 0.25,
        borderRadius : 5,
        backgroundColor : "#f9f9f9",
        justifyContent : 'center',
        alignItems : "center",
    },
    loadingText : {
        marginTop : 20,
        textAlign : 'center',
        fontSize : 20,
        fontWeight : "bold",
    },
    titleText : {
        textAlign : 'center',
        fontSize : 28,
        fontWeight : "bold",
    },
    descriptionText : {
        textAlign : 'center',
        marginTop : 15,
        fontSize : 14,
    },
    doubleButtonContainer : {
        flexDirection : 'row',
        marginTop : 30,
        width : window.width * 0.6 / 1.2,
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    singleButtonContaiber : {
        marginTop : 30,
        width : window.width * 0.6 / 1.2,
        alignItems : 'center',
        justifyContent : 'center',
    },
    buttonText : {
        textAlign : 'center',
        fontSize : 22,
        fontWeight : "bold",
        color : 'blue',
    },
})
export default CustomPopup
import React , {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,Modal} from 'react-native';
import Swiper from 'react-native-swiper';
import { actions } from '../Store/module'
import { connect } from 'react-redux';
import ClientLayer from '../Components/Layers/ClientLayer';
import CustomPopup, { PopupType } from '../UIComponents/CustomPopup';
import CustomButton, { ButtonType } from '../UIComponents/CustomButton';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class LandingPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      isPopupOpen : false
    }
  }
  OnPressSignUp = () => {
    this.props.navigation.navigate('Signup')
  }
  OnPressSignIn = () => {
    this.props.navigation.navigate('Login')
  }
  popUpClosePressed () {
    this.setState({isPopupOpen : false})
  }
  render(){
      return(
        <View style = {styles.container}>
          <View style = {styles.swiperContainer}>
              <Swiper loop = {false} paginationStyle = {styles.swiperPaginationStyle} 
              dot={<View style ={styles.dotsStyle} />}
              activeDot={<View style={styles.activeDotSyle} />}
              >
                <View style={styles.slide1}>
                <Text style={styles.text}>Image 1</Text>
                </View>
                <View style={styles.slide2}>
                <Text style={styles.text}>Image 2</Text>
                </View>
                <View style={styles.slide3}>
                <Text style={styles.text}>Image 3</Text>
                </View>
              </Swiper>
          </View>
          <View style = {styles.middleContainer} />
          <View style = {styles.bottomContainer}>
            <CustomButton text = "SIGN UP" action = {()=>this.OnPressSignUp()} type = {ButtonType.BigBlueButton}/>
            <View style = {styles.existingUserContainer}>
              <Text style = {styles.existingUserText}>Existing User ? </Text>
              <TouchableOpacity onPress = {this.OnPressSignIn}>
                <Text style = {styles.signInText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View></View>
            <TouchableOpacity>
              <Text style = {styles.termsAndConditionsText}>Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
          {this.state.isPopupOpen ? <CustomPopup 
            type = {PopupType.Loading}
            popupOpen = {this.state.isPopupOpen}
            loadingText = "Sending Request"
            // title = "Title"
            // description = "Test description"
            // closeButtonText = "Cancel"
            // actionClose = {()=>this.popUpClosePressed()}
            /> : null }
        </View>

        
      )
  }
}
const mapStateToProps = state =>{
  return {
  }
}
// connects the app with required actions
const mapDispatchToProps = dispatch =>{
  return {
    Login : (userName,accessToken) => 
      dispatch(actions.user.Login(userName,accessToken))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LandingPage)

const styles = StyleSheet.create({
    swiperContainer: {
      // width : window.width,
      height : '100%',
      flex : 0.675,
      marginTop : (Platform.OS == 'ios') ? 8 : 0,
      backgroundColor : '#92BBD9',
    },
    swiperPaginationStyle: {
      bottom: -23,
    },
    container: {
      flex : 1,
      backgroundColor: '#F5FCFF',
      justifyContent : 'center',
      alignItems : 'center'
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    middleContainer: {
      flex : 0.08
    },
    bottomContainer : {
      flex : 0.20,
      alignItems : 'center',
      justifyContent : 'space-between'
    },
    dotsStyle : {
      backgroundColor: '#fff', 
      width: 11, 
      height: 11, 
      borderWidth: 1,
      borderRadius : 5.5,
      borderColor : '#d7d7d7',
      marginLeft: 5, 
      marginRight: 5
    },
    activeDotSyle : {
      backgroundColor : "#0ac8b8",
      width: 13,
      height: 13, 
      borderRadius: 6.5, 
      marginLeft: 5, 
      marginRight: 5
    },
    signUpButton: {
      width: window.width * 0.8,
      height: window.height * 0.075,
      borderRadius: 6,
      shadowColor: "rgba(0, 0, 0, 0.1)",
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowRadius: 65,
      shadowOpacity: 1,
      backgroundColor : 'rgba(74,144,226,1)',
      alignItems : 'center',
      justifyContent : "center"
    },
    signupTextStyle : {
      color : '#fff',
      fontSize : 13,
    },
    existingUserContainer : {
      flexDirection : 'row'
    },
    existingUserText : {
      fontFamily: "Avenir",
      fontSize: 14,
      fontWeight: "300",
      fontStyle: "normal",
      lineHeight: 14,
      letterSpacing: 0,
      color : "#4a4a4a"
    },
    signInText : {
      fontFamily: "Avenir",
      fontSize: 14,
      fontWeight: "300",
      fontStyle: "normal",
      lineHeight: 14,
      letterSpacing: 0,
      color : "#3d96f7"
    },
    termsAndConditionsText : {
      fontFamily: "Avenir",
      fontSize: 12,
      fontWeight: "300",
      fontStyle: "normal",
      lineHeight: 14,
      letterSpacing: 0,
      textAlign: "center",
      color: "#a6a6a6"
    },
    
  });
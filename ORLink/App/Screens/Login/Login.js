/*
    Login
*/

// Fetching dependencies.
import React , {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'

// 3rd Parties
import { connect } from 'react-redux'

// Importing Redux Actions.
import { login } from '../../Store/Actions/Login/index'

// Importing custom modules.
import SharedPrefences from '../../Components/DataManager/SharedPreferences'
import Session from '../../Components/Common/Session'

// Sub Components
import TopHeading from './TopHeading'
import Logininput from './LoginInput'
import CustomPopup, { PopupType } from '../../UIComponents/CustomPopup'
// Creating Statefull Component.
class Login extends Component
{
  
    // Request Login.
    MakeLoginRequest = (username,password,remember) => 
    {
        // Dispatching actions.
        this.props.onLogin(username,password,remember)
    }

    // Navigate to signup
    navigateToSignup = () => 
    {
        this.props.navigation.navigate('Signup')
    }

    loginUser = () =>
    {
        
        if(this.props.login_flag == true)
        {
            // Setting Session
            user_session = new Session()
            user_session.userID=this.props.user_id
            user_session.sessionToken=this.props.login_token

            // Saving Session
            asyncStorage = new SharedPrefences()
            asyncStorage.SaveValueForKey('Session',JSON.stringify(user_session))

            // Redirect User
            this.props.navigation.navigate('Home')

        }

        if(this.props.login_error == true)
        {
            alert('Login Error! Try again.')
        }

    }

    // Rendering Component.
    render()
    {
        // Login user.
        this.loginUser()
        

        return (
            // Main layout container
            <View style={styles.mainContainer}>
                
                {/* Heading Fields Component */}
                <TopHeading/>

                {/* Input Fields Component */}
                <Logininput login={this.MakeLoginRequest} navigateToSignup={this.navigateToSignup}/>
            {this.props.logging_flag ? <CustomPopup
                type = {PopupType.Loading}
                loadingText = "Logging In"
                popupOpen = {this.props.logging_flag}
            /> : null }
            </View>
        )
    }
}

// Mapping State to props.
const mapStateToProps = state => {
    return{
        username:state.login.username,
        password:state.login.password,
        remember:state.login.remember,
        login_flag:state.login.login_flag,
        login_token:state.login.login_token,
        logging_flag:state.login.logging_flag,
        login_error:state.login.login_error,
        user_id:state.login.user_id
    }
}

// Mapping dispatches to props.
const mapDispatchToProps = dispatch => {
    return {
        onLogin:(username,password,remember) => dispatch(login(username,password,remember))
    }
}

// Creating Stylesheet.
const styles = StyleSheet.create(
    {
        mainContainer:
        {
            flex: 1,
            flexDirection: 'column',
            backgroundColor:"#fafbfd"
        }
    }
)

// Exporting Component.
export default connect(mapStateToProps,mapDispatchToProps)(Login)
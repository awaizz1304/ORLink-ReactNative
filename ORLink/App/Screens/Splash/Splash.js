/*
    Splash component called only once throghout the life cycle of the applicaiton.
    Most of the pre-script execution, instance creation(Data managers) etc are done
    at this spot in time.
*/

// Fetching dependencies.
import React, { Component } from 'react'
import { View,StyleSheet,ActivityIndicator } from 'react-native'

// Fetching Subcomponent.
import TopHeading from './TopHeading'

// Fetching custom modules.
import ClientLayer from '../../Components/Layers/ClientLayer'
import { APP_DATA } from '../../Cache/Address'

// Fetching custom UI Components.
import CustomPopup,{ PopupType } from '../../UIComponents/CustomPopup'

// Fechting Redux Connection and Actions.
import { resume } from '../../Store/Actions/Splash/index'
import { connect } from 'react-redux'

// Creating Statefull Component.
class Splash extends Component
{

    // Post Component Mounting.
    componentDidMount()
    {
        ClientLayer.getInstance().getDataManager().GetValueForKey(APP_DATA,app_data => {

            // Dispatching app resume trigger.
            this.props.onResume(app_data)

        })
    }

    // Post component update callback.
    componentDidUpdate()
    {
        if(this.props.navigation_target)
            this.props.navigation.navigate(this.props.navigation_target)
    }

    // Rendering Component.
    render()
    {
        return (
            // Main layout container
            <View style={styles.mainContainer}>
                
                {/* Logo */}
                <TopHeading/>

                {/* Background Processing Indicator */}
                {this.props.loading ? 
                    (<View>
                        <ActivityIndicator size="large" color="#0ac8b8"/>
                    </View>) : null
                }
                
                
            </View>
        )
    }
}

// Integrating Redux.

// Mapping State To Props
const mapStateToProps = state => 
{
    return {
        APP_DATA_USER_ID:state.APP_DATA.USER_ID,
        APP_DATA_USER_NAME:state.APP_DATA.USER_NAME,
        APP_DATA_USER_EMAIL:state.APP_DATA.USER_EMAIL,
        APP_DATA_USER_PASSWORD:state.APP_DATA.USER_PASSWORD,
        APP_DATA_USER_SESSION:state.APP_DATA.USER_SESSION,
        APP_DATA_USER_LAUNCH_COUNT:state.APP_DATA.USER_LAUNCH_COUNT,
        loading:state.APP_DATA.loading,
        navigation_target:state.APP_DATA.navigation_target
    }
}

// Mapping Dispatch to Props
const mapDispatchToProps = dispatch => 
{
    return {
        onResume: (app_data) => dispatch(resume(app_data))
    }
}

// Exporting component.
export default connect(mapStateToProps,mapDispatchToProps)(Splash)

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

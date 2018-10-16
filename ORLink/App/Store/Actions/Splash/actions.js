// Core actions present on login view.

// Fetching action types.
import { PUSH_DATA_INTO_STORE,RESUME,PROCESSING,HOME,LANDING,LOGIN,TOKEN_REFRESH_PENDING,TOKEN_REFRESH_FULFILLED,TOKEN_REFRESH_REJECTED,LOGIN_PENDING,LOGIN_FULFILLED,LOGIN_REJECTED } from './actionTypes'

// Importing Custom Modules.
import ClientLayer from '../../../Components/Layers/ClientLayer'

// Importing Cache Addresses.
import { APP_DATA } from '../../../Cache/Address'

// Actions

// Pushing application data into store
export const push_app_data_into_store = (app_data) =>
{
    return{
        type:PUSH_DATA_INTO_STORE,
        payload:app_data
    }
}

// Resume Action
export const resume = (app_data) =>
{
    return (dispatch) => 
    {
        // Render Activity Indicator
        dispatch(processing())
        
        // Check Data
        if(app_data==null)
        {
            // First App Launch.
            ClientLayer.getInstance().getDataManager().SaveValueForKey(APP_DATA,JSON.stringify({USER_LAUNCH_COUNT:1}))

            // Routing application to landing page.
            setTimeout(() => dispatch(landing(1,'LandingPage')),5000)

        }
        else
        {
            
            // Converting data to object.
            let DATA = JSON.parse(app_data)

            // Incrementing launch count.
            DATA.USER_LAUNCH_COUNT+=1

            if (DATA.hasOwnProperty("USER_SESSION"))
            {
                // Route to home
                setTimeout(() => dispatch(home(DATA.USER_LAUNCH_COUNT,'Home',DATA.USER_ID,DATA.USER_EMAIL,DATA.USER_NAME,DATA.USER_PASSWORD,DATA.USER_SESSION)),5000)
            }
            else
            {
                // Route to login
                setTimeout(() => dispatch(login(DATA.USER_LAUNCH_COUNT,'Login')),5000)
            }

            // Saving Data Unless/Until Data is changes which will change,
            // when remaining states are employed.
            ClientLayer.getInstance().getDataManager().SaveValueForKey(APP_DATA,JSON.stringify(DATA))

        }

    }
}

// Loading Action
export const processing = () =>
{
    return{
        type:PROCESSING,
        payload:{loading:true}
    }
}

// Landing Action
export const landing = (USER_LAUNCH_COUNT,navigation_target) => 
{
    return{
        type:LANDING,
        payload:{USER_LAUNCH_COUNT,navigation_target,loading:false}
    }
}

// Login Action
export const login = (USER_LAUNCH_COUNT,navigation_target) =>
{
    return{
        type:LOGIN,
        payload:{USER_LAUNCH_COUNT,navigation_target,loading:false}
    }
}

export const home = (USER_LAUNCH_COUNT,navigation_target,USER_ID,USER_EMAIL,USER_NAME,USER_PASSWORD,USER_SESSION) =>
{
    return{
        type:HOME,
        payload:{USER_LAUNCH_COUNT,navigation_target,USER_ID,USER_EMAIL,USER_NAME,USER_PASSWORD,USER_SESSION,loading:false}
    }
}

// Token Refresh Pending Action
export const token_refresh_pending = () => 
{

}

// Token Refresh FulFilled Action
export const token_refresh_fulfilled = () => 
{

}

// Token Refresh Rejected Action
export const token_refresh_rejected = () =>
{

}

// Login Pending Action
export const login_pending = () =>
{

}

// Login Fulfilled Action
export const login_fulfilled = () =>
{

}

// Login Rejected Action
export const login_rejected = () => 
{

}
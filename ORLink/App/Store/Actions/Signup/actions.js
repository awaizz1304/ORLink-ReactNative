// Core action present on signup view.

// Importing available action types.
import { SIGN_UP,SIGN_UP_PENDING,SIGN_UP_FULFILLED,SIGN_UP_REJECTED } from './actionTypes'

// Importing Custom Modules.
import ClientLayer from '../../../Components/Layers/ClientLayer'

// Importing Cache Addresses.
import { APP_DATA } from '../../../Cache/Address'

// Importing actions.
import { push_app_data_into_store } from '../Splash/index'

// Signup action.
export const signup = (app_data) =>
{
    // Start signup process.
    return (dispatch) => 
    {

        // Start processing backend requests.
        dispatch(signup_pending())

        // Signup completed
        setTimeout(() => 
        {

            // Sampling Data
            SIGN_UP_DATA={USER_ID:"123",USER_NAME:app_data.firstName,USER_EMAIL:app_data.emailId,USER_PASSWORD:app_data.password,USER_SESSION:"asd"}

            // Saving data to user local cache.
            ClientLayer.getInstance().getDataManager().SaveValueForKey(APP_DATA,JSON.stringify(SIGN_UP_DATA))

            // Saving data to application store via main spalsh reducer.
            dispatch(push_app_data_into_store(SIGN_UP_DATA))

            // Making Signup Successful
            dispatch(signup_fulfilled())

        },5000)
    
    }
}

// Signup action.
export const signup_pending = () =>
{
    return{
        type:SIGN_UP_PENDING
    }
}

// Signup action.
export const signup_fulfilled = () =>
{
    return{
        type:SIGN_UP_FULFILLED,
        payload:{message:"Signup Successful!"}
    }
}

// Signup action.
export const signup_rejected = () =>
{
    return{
        type:SIGN_UP_REJECTED,
        payload:{message:"Signup Failed!"}
    }
}


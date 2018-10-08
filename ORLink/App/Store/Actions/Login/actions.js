// Core actions present on login view.

// Fetching action types.
import { LOGIN,LOGIN_PENDING,LOGIN_FULFILLED,LOGIN_REJECTED } from './actionTypes'

// Importing custom components.
import ClientLayer from '../../../../App/Components/Layers/ClientLayer'
import Session from '../../../../App/Components/Common/Session';

// Actions

// Making login request.
export const login = (username,password,remember) => 
{
    return (dispatch) => 
    {
        dispatch(loggingIn(username,password,remember))
        // ClientLayer.getInstance().getAuthService().Login({username,password,remember},
        //     () => {dispatch(loginSuccessful({login_flag:true,token:"asd"})) },
        //     () => {dispatch(loginFailed(error))})
        setTimeout(()=>{
            dispatch(loginSuccessful(true,"asd","X232"))
        },1000)
    }
}
// Login Pending.
export const loggingIn = (username,password,remember) => 
{

    return {
        type:LOGIN_PENDING,
        payload:{username,password,remember,logging_flag:true}
    }
}
// Login Successful.
export const loginSuccessful = (login_flag,login_token,user_id) => 
{
    return {
        type:LOGIN_FULFILLED,
        payload:{login_flag,login_token,user_id,logging_flag:false}
    }
}
// Login Rejected.
export const loginFailed = (error) => 
{
    return {
        type:LOGIN_REJECTED,
        payload:{error,logging_flag:false}
    }
}

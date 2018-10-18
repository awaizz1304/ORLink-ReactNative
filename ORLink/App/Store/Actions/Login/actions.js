// Core actions present on login view.

// Fetching action types.
import { LOGIN, LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from './actionTypes'

// Importing Cache Addresses.
import { APP_DATA } from '../../../Cache/Address'

// Importing actions.
import { push_app_data_into_store } from '../Splash/index'

// Importing custom components.
import ClientLayer from '../../../../App/Components/Layers/ClientLayer'
import Session from '../../../../App/Components/Common/Session';

// Actions

// Making login request.
export const login = (username, password, remember) => {
    return (dispatch) => {
        dispatch(loggingIn(username, password, remember))
        setTimeout(() => {

            // Sampling Data
            SERVER_DATA = { USER_ID: "X232", USER_NAME: "asd", USER_EMAIL: 'uzair@gmail.com', USER_PASSWORD: '123', USER_SESSION: "asd" }

            // Saving data to user local cache.
            ClientLayer.getInstance().getDataManager().SaveValueForKey(APP_DATA, JSON.stringify(SERVER_DATA))

            // Saving data to application store via main spalsh reducer.
            dispatch(push_app_data_into_store(SERVER_DATA))

            // Dispatching loginc successful case.
            dispatch(loginSuccessful(true, SERVER_DATA.USER_SESSION, SERVER_DATA.USER_ID))

        }, 1000)
    }
}
// Login Pending.
export const loggingIn = (username, password, remember) => {

    return {
        type: LOGIN_PENDING,
        payload: { username, password, remember, logging_flag: true }
    }
}
// Login Successful.
export const loginSuccessful = (login_flag, login_token, user_id) => {
    return {
        type: LOGIN_FULFILLED,
        payload: { login_flag, login_token, user_id, logging_flag: false }
    }
}
// Login Rejected.
export const loginFailed = (error) => {
    return {
        type: LOGIN_REJECTED,
        payload: { error, logging_flag: false }
    }
}
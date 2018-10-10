// Splash Reducer containing its concrete implementation.

// Importing action types available on splash.
import { PUSH_DATA_INTO_STORE,RESUME,PROCESSING,LANDING,LOGIN,HOME,TOKEN_REFRESH_PENDING,TOKEN_REFRESH_FULFILLED,TOKEN_REFRESH_REJECTED,LOGIN_PENDING,LOGIN_FULFILLED,LOGIN_REJECTED } from '../../Actions/Splash/actionTypes'

// Local state storage.
const APP_DATA={
    USER_ID:null,
    USER_NAME:null,
    USER_EMAIL:null,
    USER_PASSWORD:null,
    USER_SESSION:null,
    USER_LAUNCH_COUNT:null,
    loading:false,
    navigation_target:null
}

// Applicaton Reducer
const applicationReducer = (state=APP_DATA,action) => 
{
    switch (action.type) {
        case PUSH_DATA_INTO_STORE:
            return {
                USER_ID:action.payload.USER_ID,
                USER_EMAIL:action.payload.USER_EMAIL,
                USER_NAME:action.payload.USER_NAME,
                USER_PASSWORD:action.payload.USER_PASSWORD,
                USER_SESSION:action.payload.USER_SESSION
            }
        case PROCESSING:
            return {
                ...state,
                loading:action.payload.loading
            }
        case LANDING:
            return{
                ...state,
                loading:action.payload.loading,
                navigation_target:action.payload.navigation_target,
                USER_LAUNCH_COUNT:action.payload.USER_LAUNCH_COUNT
            }
        case LOGIN:
            return{
                ...state,
                loading:action.payload.loading,
                navigation_target:action.payload.navigation_target,
                USER_LAUNCH_COUNT:action.payload.USER_LAUNCH_COUNT
            }
        case HOME:
            return{
                ...state,
                loading:action.payload.loading,
                navigation_target:action.payload.navigation_target,
                USER_LAUNCH_COUNT:action.payload.USER_LAUNCH_COUNT,
                USER_ID:action.payload.USER_ID,
                USER_EMAIL:action.payload.USER_EMAIL,
                USER_NAME:action.payload.USER_NAME,
                USER_PASSWORD:action.payload.USER_PASSWORD,
                USER_SESSION:action.payload.USER_SESSION
            }
        /*
            Need to add remaining actions.
        */
        default:
            return state
    }
}

// Exporting application reducer.
export default applicationReducer


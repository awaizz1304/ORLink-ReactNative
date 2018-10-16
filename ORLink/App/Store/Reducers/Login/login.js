// Login Reducer containing its concrete implementation.

// Importing action types available on login.
import { LOGIN,LOGIN_PENDING,LOGIN_FULFILLED,LOGIN_REJECTED } from '../../Actions/Login/actionTypes'

// Defining initial reducer state.
const LoginState={
    username:null,
    password:null,
    remember:null,
    login_flag:null,
    login_token:null,
    user_id:null,
    logging_flag:null,
    login_error:null,
}

// Reducer Implementation
const loginReducer = (state=LoginState,action) => 
{   console.log("Action Type "+action.type)
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                logging_flag:action.payload.logging_flag,
                username:action.payload.username,
                password:action.payload.password,
                remember:action.payload.remember,
            }
        case LOGIN_FULFILLED:
            return {
                ...state,
                login_flag:action.payload.login_flag,
                login_token:action.payload.login_token,
                user_id:action.payload.user_id,
                logging_flag:action.payload.logging_flag,
                login_error:false
            }
        case LOGIN_REJECTED:
            return {
                ...state,
                login_error:action.payload.error,
                logging_flag:action.payload.logging_flag
            }
        default:
            return state
    }
}

// Exporting module
export default loginReducer
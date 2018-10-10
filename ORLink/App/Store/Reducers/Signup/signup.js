// Signup reducer containing data store related operations.

// Importing action types.
import { SIGN_UP,SIGN_UP_PENDING,SIGN_UP_FULFILLED,SIGN_UP_REJECTED } from '../../Actions/Signup/actionTypes'

// Data model of SIGN_UP
const SIGN_UP_DATA={
    sign_up_status:null,
    message:null
}

const signupReducer = (state=SIGN_UP_DATA,action) =>
{
    //alert(action.type)
    switch (action.type) {
        case SIGN_UP_PENDING:
            return {
                ...state,
                sign_up_status:"0",
                message:null
            }
        case SIGN_UP_FULFILLED:
            return {
                ...state,
                sign_up_status:"1",
                message:action.payload.message
            }
        case SIGN_UP_REJECTED:
            return {
                ...state,
                sign_up_status:"-1",
                error_message:action.payload.message
            }
    
        default:
            return state
    }
}

// Exporting Reducer
export default signupReducer
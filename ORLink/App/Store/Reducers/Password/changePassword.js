import { ChangingPassword, ChangePasswordSuccess, ChangePasswordFailure } from '../../../Components/Common/Constants'
const PasswordChangeState = {
    changeRequest : false,
    passChangeResponse : null,
    passChangeError : null,
}

const passwordChangeReducer = (state = PasswordChangeState , action ) => {
    switch(action.type){
        case ChangingPassword:
            return {
                ...state,
                changeRequest : action.payload.changeRequest,
                passChangeResponse : action.payload.passChangeResponse,
                passChangeError : action.payload.error
            }
        case ChangePasswordSuccess:
            return {
                ...state,
                changeRequest : action.payload.changeRequest,
                passChangeResponse : action.payload.passChangeResponse
            }
        case ChangePasswordFailure:
            return {
                ...state,
                changeRequest : action.payload.changeRequest,
                passChangeResponse : action.payload.passChangeResponse,
                passChangeError : action.payload.passChangeError
            }
        default:
            return state
    }
}
export default passwordChangeReducer
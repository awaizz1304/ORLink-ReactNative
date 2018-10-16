import { ChangingPassword , ChangePasswordSuccess,ChangePasswordFailure } from '../../../Components/Common/Constants';
// User password change actions
export const changePassword = (passChangeData) => {
    return (dispatch) => {
        dispatch(changingPassword(true))
        ClientLayer.getInstance().getAuthService().ChangePassword(passChangeData,()=>{
            dispatch(changingPasswordResponse(false,'success'))
        },(error)=>{
            dispatch(changingPasswordResponse(false,null,error))
        })
    }
}
const changingPassword = (changeRequest,passChangeResponse = null,error = null) => {
    return{
        type : ChangingPassword,
        payload : {changeRequest,passChangeResponse,error}
    }
}
const changingPasswordResponse = (changeRequest,passChangeResponse = null,error = null) => {
    if(error == null){
        return{
            type : ChangePasswordSuccess,
            payload : {changeRequest,passChangeResponse}
        }
    }
    else {
        return {
            type : ChangePasswordFailure,
            payload : {changeRequest,error}
        }
    }
}
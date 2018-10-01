import { LOADING, LOGIN } from "../Common/Constants";


export const Login = (userName : string , accessToken : string) => {
    return {
        type: LOGIN,
        payload: {
            userID: userName,
        }
    }
}

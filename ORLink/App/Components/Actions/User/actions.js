import * as types from '../../Common/Constants'

export const Login = (userName : string ,accessToken : String) => {
    return {
      type: types.LOGIN,
      payload: {
          userID : userName,
          accessToken : accessToken,
      }
    }
}
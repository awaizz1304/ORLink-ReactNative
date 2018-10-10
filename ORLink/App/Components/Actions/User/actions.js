import * as types from '../../Common/Constants'
import { actions } from '../../../Store/module';

export const Login = (userSession : object) => {
    return {
        type: types.LOGIN,
        payload: {
            session : userSession
        }
    }
}
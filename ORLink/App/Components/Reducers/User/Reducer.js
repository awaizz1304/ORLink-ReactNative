import { handleActions } from 'redux-actions'
import { LOGIN } from '../../Common/Constants'
import ClientLayer from '../../Layers/ClientLayer';

export type UserState = {
    loggedIn : boolean,
    session : object,
}

const initialState : UserState = {
    loggedIn : false,
    session : null,
}

export default handleActions(
    {
        [LOGIN]: (state: UserState = initialState, action): UserState => {
            const p = action.payload
            return {
                loggedIn: true,
                session : p.session,
            }
        },
    },
    initialState
)
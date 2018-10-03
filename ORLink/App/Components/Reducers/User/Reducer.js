import { handleActions } from 'redux-actions'
import { LOGIN } from '../../Common/Constants'

export type UserState = {
    loggedIn : boolean,
    userID : string,
}

const initialState : UserState = {
    loggedIn : false,
    userID : "",
}

export default handleActions(
    {
        [LOGIN]: (state: UserState = initialState, action): UserState => {
            const p = action.payload
            return {
            loggedIn: true,
            userId: p.userId,
            fullName: p.fullName
            }
        },
    },
    initialState
)
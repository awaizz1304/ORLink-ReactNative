import { AppState , app } from '../module/App'
import { UserState ,    user } from '../module/User'

/**
 * Root states.
 */
export type States = {
    app: AppState,
    user: UserState
}

// Root reducers 

export const reducers = {
    app : app.reducer,
    user : user.reducer
}

//Root actions

export const actions = {
    app : app.actions,
    user : user.actions
}

export {app,user}
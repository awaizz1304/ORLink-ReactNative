import { handleActions } from 'redux-actions'
import { SET_Loading, AppLaunchCount } from '../../Common/Constants'

export type AppState = {
    loading: boolean,
    launchCount : int
}

const initialState: AppState = {
    loading: false,
    launchCount : 0,
}

export default handleActions(
    {
      [SET_Loading]: (state: AppState = initialState.loading, action): AppState => {
        return {
          loading: action.payload
        }
      },
      [AppLaunchCount] : (state: AppState = initialState.launchCount, action) : AppState => {
        return {
            launchCount: action.payload
        }
       }
    },
    initialState
)
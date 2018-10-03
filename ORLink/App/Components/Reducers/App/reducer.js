import { handleActions } from 'redux-actions'
import { SET_Loading } from '../../Common/Constants'

export type AppState = {
    loading: boolean
}

const initialState: AppState = {
    loading: false
}

export default handleActions(
    {
      [SET_Loading]: (state: AppState = initialState, action): AppState => {
        return {
          loading: action.payload
        }
      }
    },
    initialState
)
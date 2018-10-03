import * as types from '../../Common/Constants'

export const loading = (yes: boolean = true) => {
    return {
      type: types.SET_Loading,
      payload: yes
    }
}

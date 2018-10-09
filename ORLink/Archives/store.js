import {createStore as _createStore,combineReducers,applyMiddleware } from 'redux'
import { reducers,actions } from '../App/Components/Store/module'
export { States } from '../App/Components/Store/module'
import thunk from 'redux-thunk'

const middlewear = applyMiddleware(thunk)


const createStore = (data : Object = {}) => {
    return _createStore(combineReducers(reducers),data,middlewear)
}

export {createStore,actions}

/*
    Basic data storage for centeral data management.
*/

// Importing 3rd Party Dependencies.
import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //Provides timeout async support.
import promise from 'redux-promise-middleware'  //Suited for promise based async response.

// Importing Reducers.
import loginReducer  from './Reducers/Login/login'

// Store Reducers
import { reducers } from '../Components/Store/module'

// Setting up root reducer i.e. all the fellow reducers merge into it.
const rootReducer = combineReducers({login:loginReducer})

// Setting up middlewares for the application.
const middleWares = applyMiddleware(thunk,promise())

// Configuring Store.
const configureStore = () => {
    return createStore(rootReducer,{},middleWares)
}

// Exporting Store
export default configureStore
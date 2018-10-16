/*
    Sets up all the required dependencies inclusive of Redux and Client Service,
    initialization.
*/

// Importing core dependencies.
import React, {Component} from 'react';

// Importing 3rd parties.
import  {Provider}  from 'react-redux'

// Importing custom modules.
import  configureStore  from './Store/configureStore'
import { NavigationStack } from './Components/Navigation/NavigationStack'
import ClientLayer from './Components/Layers/ClientLayer'

// Passing in store configuration.
const store = configureStore()

// export default class Root extends Component{
//     componentDidMount () 
//     {
        
//     }
//     render () {
//         return (
//             <Provider store = {store}>
//                 <NavigationStack />
//             </Provider>
//         )
//     }
// }

// Initializing Client Layer.
const InitializeClientLayer = () => 
{
    // Create & Initialize Client Layer.
    ClientLayer.createInstance()
    ClientLayer.getInstance().InitializeWithCallBack(()=>{
        console.log("initialized")
    },()=>{

    })
}

const root = () => {

    // Initializing Client.
    InitializeClientLayer()

    return (
        <Provider store = {store}>
            <NavigationStack/>
        </Provider>
    );
};

export default root;
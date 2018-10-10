/** @format */

import {AppRegistry} from 'react-native';
import root from './App/root'
import Splash from './App/Screens/Splash/Splash'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => root);
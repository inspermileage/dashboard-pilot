/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Register from './src/Pages/Register';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Register);

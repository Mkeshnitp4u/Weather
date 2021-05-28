import {AppRegistry} from 'react-native';
import Entrypoint from './Src/Entrypoint';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Entrypoint);

/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import Splash from "./app/components/Splash";
import Login from "./app/components/Login";

AppRegistry.registerComponent(appName, () => Login);

/**
 * @format
 */
console.disableYellowBox = true;

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import { name as appName } from "./app.json";
import Splash from "./app/components/Splash";
import Login from "./app/components/Login";
import store from "./app/store";
import Fire from "./Fire";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "Splash"
    };
    setTimeout(() => {
      this.setState({ currentScreen: "Login" });
    }, 3000);
  }
  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === "Splash" ? <Splash /> : <Login />;
    return <Provider store={store}>{mainScreen}</Provider>;
  }
}

AppRegistry.registerComponent(appName, () => Main);

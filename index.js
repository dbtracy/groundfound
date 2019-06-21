/**
 * @format
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import Splash from "./app/components/Splash";
import Login from "./app/components/Login";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "Splash"
    };
    console.log("start for 3");
    setTimeout(() => {
      console.log("Done for 3");
      this.setState({ currentScreen: "Login" });
    }, 3000);
  }
  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === "Splash" ? <Splash /> : <Login />;
    return mainScreen;
  }
}

AppRegistry.registerComponent(appName, () => Main);

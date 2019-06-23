/**
 * @format
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import { name as appName } from "./app.json";
import Splash from "./app/components/Splash";
import Login from "./app/components/Login";
import store from "./app/store";

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
    }, 2000);
  }
  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === "Splash" ? <Splash /> : <Login />;
    return <Provider store={store}>{mainScreen}</Provider>;
  }
}

AppRegistry.registerComponent(appName, () => Main);

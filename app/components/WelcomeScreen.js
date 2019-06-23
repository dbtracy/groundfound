import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Log In"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        <Button title="Sign Up" onPress={() => alert("button pressed")} />
      </View>
    );
  }
}

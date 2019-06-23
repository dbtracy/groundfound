import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Profile extends Component {
  render() {
    console.log("STATE:", this.props.navigation.state);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

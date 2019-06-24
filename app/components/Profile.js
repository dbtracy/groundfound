import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import firebase from "firebase";

import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

export default class Profile extends Component {
  state = {
    Client: {
      Client1: {}
    }
  };

  componentDidMount() {
    firebase
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        this.setState(snapshot.val());
        console.log("HIHIHIH", snapshot.val());
        console.log(this.state.Client.Client1.firstName);
      });
  }

  render() {
    console.log("STATE:", this.props.navigation.state);
    return (
      <View style={styles.container}>
        <ProfileHeader
          firstName={this.state.Client.Client1.firstName}
          lastName={this.state.Client.Client1.lastName}
        />
        <ProfileInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(226,226,226,1)",
    flexDirection: "column",
    alignItems: "center"
    // justifyContent: "center"
  }
});

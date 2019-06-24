import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

export default class Profile extends Component {
  render() {
    console.log("STATE:", this.props.navigation.state);
    return (
      <View style={styles.container}>
        <ProfileHeader />
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

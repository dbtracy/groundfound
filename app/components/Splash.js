import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0
    };
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>honest</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(32,53,70)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "white"
  }
});

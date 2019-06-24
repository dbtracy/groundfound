import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const headshot = require("../../images/profilepic.png");

export default class ProfileInfo extends Component {
  render() {
    return (
      <View>
        <View style={styles.spacer50} />
        <View style={styles.textWrap}>
          {/* <View style={styles.spacer10} /> */}
          <Text style={styles.text}>Today:</Text>
          <Text style={styles.text}>$1.50</Text>
        </View>
        <View style={styles.textWrap}>
          {/* <View style={styles.spacer10} /> */}
          <Text style={styles.text}>This month:</Text>
          <Text style={styles.text}>$6.78</Text>
        </View>
        <View style={styles.textWrap}>
          {/* <View style={styles.spacer10} /> */}
          <Text style={styles.text}>This year:</Text>
          <Text style={styles.text}>$28.03</Text>
        </View>
        <View style={styles.textWrap}>
          {/* <View style={styles.spacer10} /> */}
          <Text style={styles.text}>Total groundfound:</Text>
          <Text style={styles.text}> {"     "}$382.81</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profilePic: {
    // flex: 1,
    height: 200,
    width: 200,
    borderRadius: 100
  },
  text: {
    display: "flex",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  spacer50: {
    height: 50
  },
  spacer10: {
    height: 10
  },
  textWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

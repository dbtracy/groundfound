import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const headshot = require("../../images/profilepic.png");

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={styles.spacer50} />
        <Image source={headshot} style={styles.profilePic} />
        <View>
          <View style={styles.spacer10} />
          <Text style={styles.text}>
            {this.props.firstName} {this.props.lastName}
          </Text>
          <Text />
          <Divider style={{ height: 1, backgroundColor: "rgb(32,53,70)" }} />
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
  }
});

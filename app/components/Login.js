import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

const logo = require("../../images/580b57fcd9996e24bc43c52d.png");

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.title}>Account Information</Text>
          </View>
          <View style={styles.infoContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter username/email"
              placeholderTextColor="rgba(255,255,255,0.8)"
              keyboardType="email-address"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32, 53, 70)",
    flexDirection: "column"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    width: 128,
    height: 56
  },
  title: {
    color: "#f7c744",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
    backgroundColor: "red"
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)"
  }
});

import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import { Text, View, Button, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import { TextInput } from "react-native-gesture-handler";
import WelcomeScreen from "./app/components/WelcomeScreen";
import Login from "./app/components/Login";

class honest extends Component {
  static navigationOptions = {
    headerTitle: "groundFound",
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Settings"
        color="#fff"
      />
    ),
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "100"
    }
  };
  render() {
    return (
      <View style={{ display: "flex" }}>
        <View>
          <Text style={{ alignItems: "center", justifyContent: "center" }}>
            Found something?
          </Text>
        </View>
        <View>
          <View style={styles.logoContainer}>
            <Image source={penny} style={styles.logo} />
            <Button title="Add penny" style={styles.button}>
              Add penny
            </Button>
          </View>
          <View style={styles.logoContainer}>
            <Image source={nickel} style={styles.logo} />
            <Button title="Add nickel" style={styles.button}>
              Add nickel
            </Button>
          </View>
          <View style={styles.logoContainer}>
            <Image source={dime} style={styles.logo} />
            <Button title="Add dime" style={styles.button}>
              Add dime
            </Button>
          </View>
          <View style={styles.logoContainer}>
            <Image source={quarter} style={styles.logo} />
            <Button title="Add quarter" style={styles.button}>
              Add quarter
            </Button>
          </View>
        </View>

        <TextInput
          name="amount"
          style={{
            backgroundColor: "gray",
            marginLeft: 100,
            marginRight: 100,
            borderRadius: 5
          }}
          placeholder="  Enter amount"
          placeholderTextColor="rgba(255,255,255,0.8)"
          keyboardType="email-address"
          onSubmitEditing={() => this.refs.txtPassword.focus()}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            title="Go to Details"
            onPress={() =>
              this.props.navigation.navigate("Details", {
                itemId: 86,
                otherParam: "anything you want here"
              })
            }
          />
          {/* <Button
            title="See Clients"
            onPress={() => this.props.navigation.navigate("Clients")}
          /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red"
  },
  logo: {
    width: 65,
    height: 65
  },
  logoContainer: {
    alignItems: "center",
    paddingLeft: 10,
    paddingBottom: 10,
    flexDirection: "row"
  }
});

// AppRegistry.registerComponent("honest", () => honest);

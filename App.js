import React, { Component } from "react";
import { AppRegistry, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import DetailsScreen from "./app/components/DetailsScreen";
import ClientScreen from "./app/components/ClientScreen";

class honest extends Component {
  static navigationOptions = {
    headerTitle: "honest",
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here"
            })
          }
        />
        <Button
          title="See Clients"
          onPress={() => this.props.navigation.navigate("Clients")}
        />
      </View>
    );
  }
}

const ExampleScreen = View;

const RootStack = createStackNavigator(
  {
    Home: honest,
    Details: DetailsScreen,
    Clients: ClientScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "100"
      }
    },
    navigationOptions: {
      tabBarLabel: "Home!"
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

// AppRegistry.registerComponent("honest", () => honest);

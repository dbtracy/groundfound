import React, { Component } from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

const ExampleScreen = View;

const Home = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#000"
      }
    },
    navigationOptions: {
      tabBarLable: "Home!"
    }
  }
);

const Tabs = createBottomTabNavigator({ Home });
export default createAppContainer(Tabs);

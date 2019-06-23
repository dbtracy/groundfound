import React, { Component } from "react";
import { connect } from "react-redux";
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
  KeyboardAvoidingView,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  withNavigation
} from "react-navigation";
import { BottomTabBar } from "react-navigation-tabs";

import { login } from "../store";
import honest from "../../App";
import Profile from "./Profile";
import Home from "./Home";
import Settings from "./Settings";
import WelcomeScreen from "./WelcomeScreen";

const logo = require("../../images/580b57fcd9996e24bc43c52d.png");
const penny = require("../../images/US_One_Cent_Obv.png");

class DisconnectedLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onChangeTextEmail = this.onChangeTextEmail.bind(this);
    this.onChangeTextPassword = this.onChangeTextPassword.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
  };

  onChangeTextEmail(value) {
    this.setState({
      email: value
    });
  }

  onChangeTextPassword(value) {
    this.setState({
      password: value
    });
  }

  onButtonPress() {
    console.log("button pressed");
    // this.props.navigation.navigate()
  }

  onHandleSubmit(event) {
    this.props.handleSubmit(this.state.email, this.state.password);
  }

  render() {
    const { navigation, handleSubmit, autoCapitalize } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.logoContainer}>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={penny} />
                <Text style={styles.title}>find something</Text>
              </View>
              <View style={styles.infoContainer}>
                <TextInput
                  name="email"
                  value={this.state.email}
                  autoCapitalize="none"
                  style={styles.input}
                  placeholder="Enter email"
                  ref={el => {
                    this.username = el;
                  }}
                  onChangeText={(value = this.onChangeTextEmail)}
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="email-address"
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput
                  name="password"
                  value={this.state.password}
                  autoCapitalize="none"
                  style={styles.input}
                  placeholder="Enter password"
                  onChangeText={(value = this.onChangeTextPassword)}
                  onSubmitEditing={() =>
                    // this.onHandleSubmit(this.state.email, this.state.password)

                    this.props.navigation.navigate("Home", {
                      email: this.state.email
                    })
                  }
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  returnKeyType="go"
                  secureTextEntry={true}
                  ref={"txtPassword"}
                />
                <TouchableOpacity
                  // style={styles.buttonContainer}
                  onPress={() =>
                    this.props.navigation.navigate("Home", {
                      email: this.state.email
                    })
                  }
                >
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

// const mapLogin = state => {
//   return {
//     name: "login",
//     displayName: "Log In",
//     error: state.user.error
//   };
// };

// const mapSignup = state => {
//   return {
//     name: "signup",
//     displayName: "Sign Up",
//     error: state.user.error,
//     cart: state.cart
//   };
// };

const mapDispatch = dispatch => {
  return {
    handleSubmit(email, password) {
      // event.preventDefault();
      const userEmail = email;
      const userPassword = password;
      dispatch(login(userEmail, userPassword));
    }
  };
};

const Login = connect(
  null,
  mapDispatch
)(DisconnectedLogin);

// export const Signup = connect(
//   mapSignup,
//   mapDispatch
// )(AuthForm);

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName === "Home" ? `Found something?` : routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} name="md-menu" size={30} />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component {
  render() {
    return <AppContainer params={(tom = "jerry")} />;
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
    width: 56,
    height: 56
  },
  title: {
    color: "#f7c744",
    fontFamily: "Snell Roundhand",
    fontSize: 35,
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
    backgroundColor: "rgb(16, 27, 35)",
    opacity: 0.9
  },
  input: {
    height: 40,
    borderRadius: 7,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "rgb(32, 53, 70)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#f7c744",
    fontWeight: "bold",
    fontSize: 18
  }
});

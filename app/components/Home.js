import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

import DetailsScreen from "./DetailsScreen";

const penny = require("../../images/US_One_Cent_Obv.png");
const nickel = require("../../images/1988-d-jefferson-nickel.png");
const dime = require("../../images/2017-D_Roosevelt_dime_obverse_transparent.png");
const quarter = require("../../images/780px-2006_Quarter_Proof.png");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Dan",
      lastName: "Tracy",
      email: "dan@email.com",
      pennies: 0,
      nickels: 0,
      dimes: 0,
      quarters: 0,
      singles: 0,
      fives: 0,
      tens: 0,
      twenties: 0,
      fifties: 0,
      benjies: 0
    };
    this.handleClickPenny = this.handleClickPenny.bind(this);
    this.handleClickNickel = this.handleClickNickel.bind(this);
    this.handleClickDime = this.handleClickDime.bind(this);
    this.handleClickQuarter = this.handleClickQuarter.bind(this);
  }

  handleClickPenny() {
    this.setState({
      pennies: this.state.pennies + 1
    });
    console.log("STATE HERE:", this.state);
  }

  handleClickNickel() {
    this.setState({
      nickels: this.state.nickels + 1
    });
    console.log("STATE HERE:", this.state);
  }

  handleClickDime() {
    this.setState({
      dimes: this.state.dimes + 1
    });
    console.log("STATE HERE:", this.state);
  }

  handleClickQuarter() {
    this.setState({
      quarters: this.state.quarters + 1
    });
    console.log("STATE HERE:", this.state);
  }

  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.bigContainer}>
        <View style={{ display: "flex", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={this.handleClickPenny}
          >
            <Image source={penny} style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={this.handleClickNickel}
          >
            <Image source={nickel} style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={this.handleClickDime}
          >
            <Image source={dime} style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={this.handleClickQuarter}
          >
            <Image source={quarter} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 50 }} />
        <View style={{ display: "flex" }}>
          <View style={styles.textWrap}>
            <Text style={styles.text}>Pennies: </Text>
            <Text style={styles.text}>{this.state.pennies}</Text>
          </View>
          <View style={styles.spacer10} />
          <View style={styles.textWrap}>
            <Text style={styles.text}>Nickels: </Text>
            <Text style={styles.text}>{this.state.nickels}</Text>
          </View>
          <View style={styles.spacer10} />
          <View style={styles.textWrap}>
            <Text style={styles.text}>Dimes: </Text>
            <Text style={styles.text}>{this.state.dimes}</Text>
          </View>
          <View style={styles.spacer10} />
          <View style={styles.textWrap}>
            <Text style={styles.text}>Quarters:</Text>
            <Text style={styles.text}>{this.state.quarters}</Text>
          </View>
          <View style={styles.spacer10} />
          <View style={styles.textWrap}>
            <Text style={styles.text}>Total monies: </Text>
            <Text style={styles.text}>
              $
              {(
                (parseInt(this.state.pennies) +
                  5 * parseInt(this.state.nickels) +
                  10 * parseInt(this.state.dimes) +
                  25 * parseInt(this.state.quarters) +
                  100 * parseInt(this.state.singles) +
                  500 * parseInt(this.state.fives) +
                  1000 * parseInt(this.state.tens) +
                  2000 * parseInt(this.state.twenties) +
                  5000 * parseInt(this.state.fifties) +
                  10000 * parseInt(this.state.benjies)) /
                100
              ).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(Home);

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    backgroundColor: "rgba(226,226,226,1)" // light grey
  },
  button: {
    backgroundColor: "gray",
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 5,
    height: 65,
    padding: 20,
    textAlign: "center"
  },
  logo: {
    width: 67,
    height: 65
  },
  logoContainer: {
    alignItems: "center",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    margin: 5,
    marginBottom: 0,
    borderRadius: 7,
    flexDirection: "row",
    backgroundColor: "rgba(82, 138, 183, 1)"
  },
  inputLogoContainer: {
    alignItems: "center",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    margin: 5,
    marginBottom: 0,
    borderRadius: 7,
    flexDirection: "row",
    backgroundColor: "rgba(226,226,226,1)"
  },
  text: {
    display: "flex",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  textWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  spacer10: {
    height: 10
  }
});

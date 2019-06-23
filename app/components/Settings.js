import React, { Component } from "react";
import { Text, View, Button, Switch } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSwitchValue: false,
      notificationSwitchValue: false
    };
  }

  onLocationSwitchChange(value) {
    this.setState({
      locationSwitchValue: value
    });
  }

  onNotificationSwitchChange(value) {
    this.setState({
      notificationSwitchValue: value
    });
  }

  render() {
    return (
      <View style={styles.bigContainer}>
        <View styles={styles.greyContainer}>
          <Text> </Text>
        </View>
        <View style={styles.container}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon style={{ paddingRight: 10 }} name="ios-navigate" size={30} />
            <Text style={{ fontWeight: "400", fontSize: 20 }}>
              Share my location
            </Text>
          </View>

          <Switch
            value={this.state.locationSwitchValue}
            onValueChange={value => this.onLocationSwitchChange(value)}
          />
        </View>
        <View styles={styles.greyContainer}>
          <Text> </Text>
        </View>
        <View style={styles.container}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon
              style={{ paddingRight: 10 }}
              name="ios-notifications"
              size={30}
            />
            <Text style={{ fontWeight: "400", fontSize: 20 }}>
              Notifications
            </Text>
          </View>

          <Switch
            value={this.state.notificationSwitchValue}
            onValueChange={value => this.onNotificationSwitchChange(value)}
          />
        </View>
        <View styles={styles.greyContainer}>
          <Text> </Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontWeight: "300", fontSize: 20 }}>
            Share my location
          </Text>
          <Switch
            value={this.state.switchValue}
            onValueChange={value => this.onSwitchChange(value)}
          />
        </View>
        <View styles={styles.greyContainer}>
          <Text> </Text>
        </View>
        <View styles={styles.greyContainer}>
          <Text> </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  bigContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    backgroundColor: "rgba(226,226,226,1)" // light grey
  },
  greyContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    height: 50,
    padding: 10,
    backgroundColor: "rgba(226,226,226,1)"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    padding: 10,
    backgroundColor: "rgba(255,255,255,1)"
  }
};

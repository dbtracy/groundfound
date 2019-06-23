import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, Image, Easing } from "react-native";

const penny = require("../../images/US_One_Cent_Obv.png");

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    };
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0);

    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentDidMount() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 1000,
      useNativeDriver: true
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 2500,
      useNativeDriver: true
    }).start();
  }

  render() {
    const truckStyle = {
      transform: [{ scale: this.animatedValue }]
    };
    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ring, truckStyle]}>
          <Animated.Image
            source={penny}
            style={[
              {
                resizeMode: "contain",
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>
        <Text style={styles.title}>groundFound</Text>
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

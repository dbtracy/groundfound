import React, { Component } from "react";
import { AppRegistry, Text, View, Button } from "react-native";
import axios from "axios";

dummyClient = {
  name: "Dan"
};

export default class ClientScreen extends Component {
  constructor() {
    super();
    this.state = {
      clients: []
    };
  }
  async componentDidMount() {
    console.log("IM IN HERE!!!");
    try {
      const clients = await axios.get("http://localhost:8080/api/client");
      console.log(clients.data);
      this.setState({
        clients: clients.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {this.state.clients.map(client => {
          return <Text>{client.firstName}</Text>;
        })}
      </View>
    );
  }
}

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
    const clients = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(clients);
    this.setState({
      clients: clients
    });
  }

  // fetchClients() {
  //   const clients = await axios.get("/");
  //   this.setState({
  //     clients: clients
  //   });
  // }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {this.state.clients.map(client => {
          return <Text>{client.title}</Text>;
        })}
      </View>
    );
  }
}

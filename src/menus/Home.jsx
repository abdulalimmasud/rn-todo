import React, { Component } from "react";
import { View } from "react-native";
import Header from "../components/Header";
import CustomTabNavigator from "../components/CustomTabNavigator";

class Home extends Component {
  static router = CustomTabNavigator.router;
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation} />
        <CustomTabNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Home;

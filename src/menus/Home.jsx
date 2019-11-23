import React, { Component } from "react";
import Header from "../components/Header";
import CustomTabNavigator from "../components/CustomTabNavigator";
import Body from "../components/Body";

class Home extends Component {
  static router = CustomTabNavigator.router;
  render() {
    return (
      <Body>
        <Header navigation={this.props.navigation} />
        <CustomTabNavigator navigation={this.props.navigation} />
      </Body>
    );
  }
}

export default Home;

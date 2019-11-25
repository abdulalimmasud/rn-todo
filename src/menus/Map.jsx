import React, { Component } from "react";
import Header from "../components/Header";
import MapNavigator from "../components/maps/MapNavigator";
import Body from "../components/Body";

class Map extends Component {
  static router = MapNavigator.router;
  render() {
    return (
      <Body>
        <Header navigation={this.props.navigation} />
        <MapNavigator navigation={this.props.navigation} />
      </Body>
    );
  }
}

export default Map;

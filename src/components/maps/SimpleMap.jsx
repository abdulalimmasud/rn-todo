import React, { Component } from "react";
import { Text, Button, StyleSheet, Dimensions } from "react-native";
import Body from "../Body";
import gsmConfig from "../utils/gsmConfig";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
let { width, height } = Dimensions.get("window");
const aspect_ratio = width / height;
const latDelta = 60 / 22;
const lonDelta = latDelta / aspect_ratio;
const lat = 23.7009;
const lon = 90.4071;
class SimpleMap extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta
      }
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: latDelta,
            longitudeDelta: lonDelta
          }
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  componentWillMount() {
    //navigator.geolocation.clearWatch(tihs.watchID);
  }
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        region={this.state.region}
        showsUserLocation={true}
        onRegionChange={region => {
          this.setState({ region });
        }}
        onRegionChangeComplete={region => {
          this.setState({ region });
        }}
      >
        <Marker coordinate={this.state.region} />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%"
  }
});
export default SimpleMap;

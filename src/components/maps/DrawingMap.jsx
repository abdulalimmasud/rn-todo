import React from "react";
import { Text, Button, StyleSheet, Dimensions } from "react-native";
import Body from "../Body";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
let { width, height } = Dimensions.get("window");
const aspect_ratio = width / height;
const latDelta = 60 / 22;
const lonDelta = latDelta / aspect_ratio;
const lat = 23.7009;
const lon = 90.4071;

const DrawingMap = props => (
  <Body style={styles.container}>
    <Text>DrawingMap Page</Text>
  </Body>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DrawingMap;

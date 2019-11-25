import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import Body from "../Body";

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

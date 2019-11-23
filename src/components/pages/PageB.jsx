import React from "react";
import { Text, StyleSheet } from "react-native";
import Body from "../Body";

const PageB = props => (
  <Body style={styles.container}>
    <Text>Page B</Text>
  </Body>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PageB;

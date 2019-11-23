import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import Body from "../Body";

const Secondary = props => (
  <Body style={styles.container}>
    <Text>Secondary Page</Text>
    <Button
      title="Back"
      onPress={() => {
        props.navigation.navigate("Main");
      }}
    />
  </Body>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Secondary;

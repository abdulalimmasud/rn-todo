import React from "react";
import { Button, StyleSheet } from "react-native";
import Body from "../Body";

const PageAMain = props => (
  <Body style={styles.container}>
    <Button
      title="To Secondary"
      onPress={() => props.navigation.navigate("Secondary")}
    />
  </Body>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple"
  }
});

export default PageAMain;

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PageB = props => (
  <View style={styles.container}>
    <Text>Page B</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PageB;

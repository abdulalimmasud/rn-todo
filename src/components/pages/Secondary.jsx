import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Secondary = props => (
  <View style={styles.container}>
    <Text>Secondary Page</Text>
    <Button
      title="Back"
      onPress={() => {
        props.navigation.navigate("Main");
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Secondary;

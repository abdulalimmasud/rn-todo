import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Body from "../Body";

const PageAMain = props => (
  <Body style={styles.container}>
    <Button
      title="To Secondary"
      onPress={() => props.navigation.navigate("Secondary")}
    />
    <View style={styles.txtContainer}>
      <Text style={styles.txt}>Hello Mr.</Text>
      <Text style={{ ...styles.txt, color: "#fff" }}>Welcome</Text>
    </View>
  </Body>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple"
  },
  txtContainer: {
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },
  txt: {
    fontSize: 20
  }
});

export default PageAMain;

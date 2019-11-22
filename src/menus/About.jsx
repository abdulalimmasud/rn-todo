import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";

const About = props => (
  <View style={styles.container}>
    <Header navigation={props.navigation} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  }
});
export default About;

import React from "react";
import { StyleSheet } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import Colors from "../components/utils/colors";

const About = props => (
  <Body style={styles.container}>
    <Header navigation={props.navigation} />
  </Body>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary
  }
});
export default About;

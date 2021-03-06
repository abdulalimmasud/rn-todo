import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";

const TitleHeader = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "#000",
    fontSize: 18
  }
});
export default TitleHeader;

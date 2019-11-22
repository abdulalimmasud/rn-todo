import React from "react";
import { View, Button, StyleSheet } from "react-native";

const PageAMain = props => (
  <View style={styles.container}>
    <Button
      title="To Secondary"
      onPress={() => props.navigation.navigate("Secondary")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple"
  }
});

export default PageAMain;

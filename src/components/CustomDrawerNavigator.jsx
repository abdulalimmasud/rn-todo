import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItems } from "react-navigation-drawer";

const CustomDrawerNavigator = props => (
  <View style={styles.container}>
    <DrawerItems
      activeBackgroundColor={"#000"}
      activeTintColor={"#fff"}
      iconContainerStyle={styles.icons}
      {...props}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icons: {
    width: 30
  }
});

export default CustomDrawerNavigator;

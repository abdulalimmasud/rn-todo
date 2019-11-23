import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import Body from "./Body";

const CustomDrawerNavigator = props => (
  <Body>
    <DrawerItems
      activeBackgroundColor={"#000"}
      activeTintColor={"#fff"}
      iconContainerStyle={styles.icons}
      {...props}
    />
  </Body>
);
const styles = StyleSheet.create({
  icons: {
    width: 30
  }
});

export default CustomDrawerNavigator;

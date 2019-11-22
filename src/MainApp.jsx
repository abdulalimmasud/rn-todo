import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import CustomDrawerNavigator from "./components/CustomDrawerNavigator";
import Home from "./menus/Home";
import Settings from "./menus/Settings";
import About from "./menus/About";
import Goal from "./menus/Goal";

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: Home
    },
    Goal: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-heart" style={{ color: tintColor }} />
        ),
        drawerLabel: "Goal"
      },
      screen: Goal
    },
    Settings: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "Settings"
      },
      screen: Settings
    },
    About: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-about" style={{ color: tintColor }} />
        ),
        drawerLabel: "About"
      },
      screen: About
    }
  },
  {
    contentComponent: CustomDrawerNavigator
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;

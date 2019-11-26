import { Ionicons, AntDesign } from "@expo/vector-icons";
import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import CustomDrawerNavigator from "./components/CustomDrawerNavigator";
import Home from "./menus/Home";
import Settings from "./menus/Settings";
import About from "./menus/About";
import Goal from "./menus/Goal";
import Game from "./menus/Game";
import DataList from "./menus/DataList";
import Map from "./menus/Map";
import Wallet from "./menus/Wallet";

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
    Map: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <AntDesign name="enviroment" style={{ color: tintColor }} />
        ),
        drawerLabel: "Map"
      },
      screen: Map
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
    Game: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-play" style={{ color: tintColor }} />
        ),
        drawerLabel: "Game"
      },
      screen: Game
    },
    // Wallet_Box: {
    //   navigationOptions: {
    //     drawerIcon: ({ tintColor }) => (
    //       <Ionicons name="md-wallet" style={{ color: tintColor }} />
    //     ),
    //     drawerLabel: "Wallet"
    //   },
    //   screen: Wallet
    // },
    DataList: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-cloud" style={{ color: tintColor }} />
        ),
        drawerLabel: "Data"
      },
      screen: DataList
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
    contentComponent: CustomDrawerNavigator,
    style: { marginTop: 20, fontSize: 20 },
    initialRouteName: "Home"
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;

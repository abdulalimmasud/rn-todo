import React from "react";
import _ from "loadsh";
import { Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import WALLET_DATA from "./walletData";
import Colors from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../common/Screen";
import WalletScreen from "./WalletScreen";
import HeaderDropdown from "./HeaderDropdown";

const headerStyle = {
  headerTintColor: Colors.white,
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: Colors.malibu,
    shadowColor: Colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  }
};

const Icon = ({ name, focused }) => {
  <Ionicons
    name={`$md-{name}`}
    size={30}
    color={focused ? Colors.malibu : Colors.silver_chalice}
  />;
};

const WalletNavigator = createBottomTabNavigator(
  {
    TAB_WALLET: {
      screen: createStackNavigator({
        Wallet: {
          screen: () => <WalletScreen wallets={WALLET_DATA} />,
          path: "wallet/:selectedWalletId",
          navigationOptions: ({ navigation }) => {
            const selectedWalletId = navigation.getParam("selectedWalletId");
            const title = selectedWalletId
              ? WALLET_DATA.find(w => w.id === selectedWalletId).label
              : WALLET_DATA[0].label;
            return {
              headerTitle: () => <HeaderDropdown title={title} />,
              ...headerStyle
            };
          }
        }
      }),
      navigationOptions: ({ navigation }) => {
        const walletScreen = navigation.state.routes.find(
          obj => obj.routeName === "Wallet"
        );
        const isTabBarVisible = _.get(
          walletScreen,
          "params.isWalletDropdownVisible"
        );
        return {
          tabBarVisible: !isTabBarVisible,
          tabBarLabel: "Wallet",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="wallet" focused={tintColor} />
          )
        };
      }
    },
    TAB_SEND: {
      screen: createStackNavigator({
        Send: {
          screen: () => (
            <Screen>
              <Text style={{ textAlign: "center" }}>Send Screen</Text>
            </Screen>
          ),
          path: "/send",
          navigationOptions: {
            title: "Send",
            ...headerStyle
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: "Send",
        tabBarIcon: ({ tintColor }) => <Icon name="send" focused={tintColor} />
      }
    },
    TAB_ACTIVITIES: {
      screen: createStackNavigator({
        Activities: {
          screen: () => (
            <Screen>
              <Text style={{ textAlign: "center" }}>Activities Screen</Text>
            </Screen>
          ),
          path: "/activities",
          navigationOptions: {
            title: "Activities",
            ...headerStyle
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: "Activities",
        tabBarIcon: ({ tintColor }) => <Icon name="list" focused={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.malibu,
      inactiveTintColor: Colors.silver_chalice,
      showLabel: true,
      style: {
        borderTopWidth: 0,
        paddingTop: 3,
        paddingBottom: 4,
        height: 60,
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 0 }
      }
    }
  }
);

export default WalletNavigator;

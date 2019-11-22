import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

const CustomTabNavigator = createMaterialTopTabNavigator(
  {
    PageA: {
      navigationOptions: {
        tabBarLabel: "First Page"
      },
      screen: PageA
    },
    PageB: {
      navigationOptions: {
        tabBarLabel: "Second Page"
      },
      screen: PageB
    }
  },
  {
    tabBarPosition: "bottom"
  }
);

export default CustomTabNavigator;

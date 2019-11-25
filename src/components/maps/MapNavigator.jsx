import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import DrawingMap from "./DrawingMap";
import SimpleMap from "./SimpleMap";

const MapNavigator = createMaterialTopTabNavigator(
  {
    SimpleMap: {
      navigationOptions: {
        tabBarLabel: "Simple"
      },
      screen: SimpleMap
    },
    DrawingMap: {
      navigationOptions: {
        tabBarLabel: "Drawing"
      },
      screen: DrawingMap
    }
  },
  {
    tabBarPosition: "bottom"
  }
);

// MapNavigator.navigationOptions = ({ navigation }) => ({
//   tabBarVisible: navigation.state.index === 0,
//   swipeEnabled: navigation.state.index === 0
// });

export default MapNavigator;

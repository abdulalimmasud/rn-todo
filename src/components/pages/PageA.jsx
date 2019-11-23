import { createStackNavigator } from "react-navigation-stack";
import PageAMain from "./PageAMain";
import Secondary from "./Secondary";
import Profile from "./Profile";

const PageANavigator = createStackNavigator({
  Main: {
    navigationOptions: {
      header: null
    },
    screen: PageAMain
  },
  Secondary: {
    navigationOptions: {
      header: null
    },
    screen: Secondary
  },
  Profile: {
    navigationOptions: { header: null },
    path: "people/:name",
    screen: Profile
  }
});

PageANavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
  swipeEnabled: navigation.state.index === 0
});

export default PageANavigator;

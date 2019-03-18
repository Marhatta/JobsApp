import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";
import ReviewScreen from "../screens/ReviewScreen";

const AppNavigator = createBottomTabNavigator({
  home: { screen: WelcomeScreen,navigationOptions:{tabBarVisible:false} },
  auth: { screen: AuthScreen },
  main: {
    screen: createBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: createStackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen }
        })
      }
    })
  }
},{
    lazy:true
});

const AppContainer = createAppContainer(AppNavigator);


class AppNavigation extends Component {
  render() {
    return <AppContainer />;
  }
}

export default AppNavigation;

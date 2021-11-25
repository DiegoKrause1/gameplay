import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { LinearGradient } from "expo-linear-gradient";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor:"transparent" 
        },
        headerShown: false,
        presentation: 'transparentModal'
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
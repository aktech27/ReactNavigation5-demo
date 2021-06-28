import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import InnerHome from "../screens/innerHome";
import FinalHome from "../screens/finalHome";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="InnerHome" component={InnerHome} />
    <Stack.Screen name="FinalHome" component={FinalHome} />
  </Stack.Navigator>
);

export default Navigator;

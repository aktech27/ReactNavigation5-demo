import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import InnerAbout from "../screens/innerAbout";
import FinalAbout from "../screens/finalAbout";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="InnerAbout" component={InnerAbout} />
    <Stack.Screen name="FinalAbout" component={FinalAbout} />
  </Stack.Navigator>
);

export default Navigator;

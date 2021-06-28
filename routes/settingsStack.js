import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "../screens/settings";
import InnerSettings from "../screens/innerSettings";
import FinalSettings from "../screens/finalSettings";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="InnerSettings" component={InnerSettings} />
    <Stack.Screen name="FinalSettings" component={FinalSettings} />
  </Stack.Navigator>
);

export default Navigator;

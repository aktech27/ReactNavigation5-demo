import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import InnerAbout from "../screens/innerAbout";
import FinalAbout from "../screens/finalAbout";
import CustomHeader from "../shared/customHeader";

const screenOptions = {
  headerStyle: {
    backgroundColor: "#0d6eff",
  },
};
const options = (name) => {
  return {
    headerTitle: <CustomHeader Title={name} />,
  };
};

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="About" component={About} options={({ route }) => options(route.name)} />
    <Stack.Screen name="InnerAbout" component={InnerAbout} />
    <Stack.Screen name="FinalAbout" component={FinalAbout} />
  </Stack.Navigator>
);

export default Navigator;

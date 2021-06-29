import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import InnerHome from "../screens/innerHome";
import FinalHome from "../screens/finalHome";
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
    <Stack.Screen name="Home" component={Home} options={({ route }) => options(route.name)} />
    <Stack.Screen name="InnerHome" component={InnerHome} />
    <Stack.Screen name="FinalHome" component={FinalHome} />
  </Stack.Navigator>
);

export default Navigator;

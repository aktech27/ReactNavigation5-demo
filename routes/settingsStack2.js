import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/settings";
import InnerSettings from "../screens/innerSettings";
import FinalSettings from "../screens/finalSettings";
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
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={({ route }) => options(route.name)}
    />
    <Stack.Screen name="InnerSettings" component={InnerSettings} />
    <Stack.Screen name="FinalSettings" component={FinalSettings} />
  </Stack.Navigator>
);

export default Navigator;

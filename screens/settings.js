import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Settings = ({ navigation }) => (
  <View style={styles.container}>
    <Text>This is Settings Screen</Text>
    <Button
      title="NEXT"
      onPress={() => {
        navigation.navigate("InnerSettings");
      }}
    />
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;

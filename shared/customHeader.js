import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ Title }) => {
  const navigation = useNavigation();
  const open = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <Ionicons onPress={open} name="menu" size={42} color="white" />
      </View>
      <Text style={styles.headerText}>{Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerIcon: {
    marginRight: 30,
  },
  headerText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 24,
  },
});

export default CustomHeader;

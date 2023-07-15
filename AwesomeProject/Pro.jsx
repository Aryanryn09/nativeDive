import React from "react";
import { View, StyleSheet, Text, useColorScheme } from "react-native";

function Pro() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={styles.main}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        main item
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteText: {
    color: "white",
  },
  darkText: {
    color: "black",
  },
});

export default Pro;

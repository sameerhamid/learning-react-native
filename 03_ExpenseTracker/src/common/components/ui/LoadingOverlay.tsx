import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constansts/stylex";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

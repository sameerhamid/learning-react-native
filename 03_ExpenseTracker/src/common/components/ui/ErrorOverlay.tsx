import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constansts/stylex";
import Button from "./Button";

const ErrorOverlay = ({
  message,
  onConfirm,
}: {
  message: string;
  onConfirm: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Occured</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm} title="Okay" />
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});

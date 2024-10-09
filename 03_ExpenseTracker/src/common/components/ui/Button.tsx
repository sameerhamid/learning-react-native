import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { GlobalStyles } from "../../constansts/stylex";

interface ButtonTypes {
  onPress: () => void;
  mode?: "flat";
  title: string;
  buttonStyle?: ViewStyle;
}
const Button = ({ onPress, mode, title, buttonStyle }: ButtonTypes) => {
  return (
    <TouchableOpacity
      style={[styles.container, mode === "flat" && styles.flat, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
});

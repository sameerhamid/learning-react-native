import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import { KeyboardEnums } from "../../constansts/enums";
interface InputTypes {
  label: string;
  textInputConfig?: TextInputProps;
}

const Input = ({ label, textInputConfig }: InputTypes) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {},
});

import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

import { GlobalStyles } from "../../constansts/stylex";
interface InputTypes {
  label: string;
  textInputConfig?: TextInputProps;
  style?: ViewStyle;
  isError?: boolean;
  errorMessage?: string;
}

const Input = ({
  label,
  style,
  textInputConfig,
  isError,
  errorMessage,
}: InputTypes) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...textInputConfig}
        style={[
          styles.input,
          textInputConfig?.multiline && styles.inputMultiline,
          {
            backgroundColor: isError
              ? GlobalStyles.colors.error50
              : GlobalStyles.colors.primary100,
          },
        ]}
      />
      {isError && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  error: {
    color: GlobalStyles.colors.error500,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 8,
    textAlign: "left",
    textTransform: "capitalize",
  },
});

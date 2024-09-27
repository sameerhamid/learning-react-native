import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const onNubmerChange = (text) => {
    setEnteredNumber(text);
  };

  const handleConfirm = () => {};
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={onNubmerChange}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#3c0619",
    marginHorizontal: 26,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    rowGap: 20,
  },
  button: {
    flex: 1,
  },
});
export default StartGameScreen;

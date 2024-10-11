import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";

const ExpenseForm = () => {
  const [inputValues, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const amountChangeHandler = (
    name: "amount" | "date" | "description",
    amount: string
  ) => {
    setInputValue((prev) => ({
      ...prev,
      [name]: amount,
    }));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: amountChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: amountChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    rowGap: 12,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    columnGap: 10,
  },
  rowInput: {
    flex: 1,
  },
});

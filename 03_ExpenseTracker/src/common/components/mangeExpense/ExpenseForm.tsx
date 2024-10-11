import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "../ui/Button";
import { goBack } from "../../utils/navigatorUtils";
import { ExpenseType } from "../expensesOutpus/ExpensesSummary";

interface ExpenseFormTypes {
  onSubmit: (expense: ExpenseType) => void;
  submitButtonText: string;
}
const ExpenseForm = ({ onSubmit, submitButtonText }: ExpenseFormTypes) => {
  const [inputValues, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });

  //--------- handlers--------
  const amountChangeHandler = (
    name: "amount" | "date" | "description",
    amount: string
  ) => {
    setInputValue((prev) => ({
      ...prev,
      [name]: amount,
    }));
  };

  const submitHandler = () => {
    const expenseData: ExpenseType = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
  };

  // render buttons view
  const renderCancelAndAddBtns = (): React.ReactElement => {
    return (
      <View style={styles.cancelAddContainer}>
        <Button
          mode="flat"
          buttonStyle={styles.buttons}
          title="Cancel"
          onPress={() => {
            goBack();
          }}
        />
        <Button
          buttonStyle={styles.buttons}
          title={submitButtonText}
          onPress={submitHandler}
        />
      </View>
    );
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

      {renderCancelAndAddBtns()}
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    rowGap: 12,
    // marginBottom: 30,
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
  cancelAddContainer: {
    flexDirection: "row",
    columnGap: 20,
    justifyContent: "center",
    marginTop: 20,
  },
  buttons: {
    minWidth: 120,
  },
});

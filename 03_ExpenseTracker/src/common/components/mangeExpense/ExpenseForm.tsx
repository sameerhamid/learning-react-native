import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "../ui/Button";
import { goBack } from "../../utils/navigatorUtils";
import { ExpenseType } from "../expensesOutpus/ExpensesSummary";
import { getFormattedDate } from "../../utils/dateUtils";
import { DateErrorMsg } from "../../constansts/enums";

interface ExpenseFormTypes {
  onSubmit: (expense: ExpenseType) => void;
  submitButtonText: string;
  defaultValue?: ExpenseType;
}
const ExpenseForm = ({
  onSubmit,
  submitButtonText,
  defaultValue,
}: ExpenseFormTypes) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue?.amount.toString() ?? "",
      isValid: true,
    },
    date: {
      value: defaultValue?.date ? getFormattedDate(defaultValue?.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValue?.description ?? "",
      isValid: true,
    },
  });

  //--------- handlers--------
  const inputChangeHandler = (
    name: "amount" | "date" | "description",
    value: string
  ) => {
    setInputs((prev) => ({
      ...prev,
      [name]: {
        value: value,
        isValid: true,
      },
    }));
  };

  const submitHandler = () => {
    const expenseData: ExpenseType = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid =
      expenseData.date.toString() !== DateErrorMsg.INVALID_DATE;
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert("Invalid input", "Please check your input values");
      setInputs((currenInputs) => {
        return {
          amount: {
            value: currenInputs.amount.value,
            isValid: amountIsValid,
          },
          date: {
            value: currenInputs.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: currenInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
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
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          isError={!inputs.amount.isValid}
          errorMessage="Please enter valid amount"
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
          isError={!inputs.date.isValid}
          errorMessage="Please enter valid date"
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
        isError={!inputs.description.isValid}
        errorMessage="Please enter valid description"
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

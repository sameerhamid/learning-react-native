import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary, { ExpenseType } from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constansts/stylex";

export const DUMMY_EXPENSES: ExpenseType[] = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 99.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A bag",
    amount: 19.99,
    date: new Date("2021-12-18"),
  },
  {
    id: "e3",
    description: "A book",
    amount: 14.99,
    date: new Date("2021-12-17"),
  },
];
const ExpensesOutput = ({
  expenses,
  expensePeriod,
}: {
  expenses: ExpenseType[];
  expensePeriod: string;
}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensePeriod} expenses={expenses} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});

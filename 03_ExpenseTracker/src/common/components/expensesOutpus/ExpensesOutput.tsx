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
    date: new Date("2021-12-3"),
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
  {
    id: "e4",
    description: "A pair of shoes",
    amount: 99.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e5",
    description: "A bag",
    amount: 19.99,
    date: new Date("2021-12-18"),
  },
  {
    id: "e6",
    description: "A book",
    amount: 14.99,
    date: new Date("2021-12-17"),
  },
  {
    id: "e7",
    description: "A pair of shoes",
    amount: 99.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e8",
    description: "A bag",
    amount: 19.99,
    date: new Date("2021-12-18"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.99,
    date: new Date("2021-12-17"),
  },
  {
    id: "e10",
    description: "A pair of shoes",
    amount: 99.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e11",
    description: "A bag",
    amount: 19.99,
    date: new Date("2021-12-18"),
  },
  {
    id: "e12",
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
  console.log("in como");
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensePeriod} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 10,
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    rowGap: 16,
  },
});

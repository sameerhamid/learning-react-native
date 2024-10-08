import { View, Text } from "react-native";
import React from "react";

export interface ExpenseType {
  id: string;
  description: string;
  date: Date;
  amount: number;
}
const ExpensesSummary = ({
  periodName,
  expenses,
}: {
  periodName: string;
  expenses: ExpenseType[];
}) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

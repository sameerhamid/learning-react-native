import { View, Text, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { Colors } from "../../model/themeModel";

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
  const theme = useTheme();
  const compStyles = styles(theme.colors);
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

type Styles = {
  container: ViewStyle;
};
export default ExpensesSummary;
const styles = (colors?: Colors): Styles =>
  StyleSheet.create<Styles>({
    container: {
      padding: 8,
      backgroundColor: colors?.primary50,
    },
  });

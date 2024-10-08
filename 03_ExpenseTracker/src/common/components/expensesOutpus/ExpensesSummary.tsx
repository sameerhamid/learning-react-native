import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { Colors } from "../../model/themeModel";
import { GlobalStyles } from "../../constansts/stylex";

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
  const compStyles = styles();
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={compStyles.container}>
      <Text style={compStyles.period}>{periodName}</Text>
      <Text style={compStyles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

type Styles = {
  container: ViewStyle;
  period: TextStyle;
  sum: TextStyle;
};
export default ExpensesSummary;
const styles = (colors?: Colors): Styles =>
  StyleSheet.create<Styles>({
    container: {
      padding: 8,
      backgroundColor: GlobalStyles.colors.primary50,
      borderRadius: 6,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    period: {
      fontSize: 12,
      color: GlobalStyles.colors.primary400,
    },
    sum: {
      fontSize: 16,
      fontWeight: "bold",
      color: GlobalStyles.colors.primary500,
    },
  });

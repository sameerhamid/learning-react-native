import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput, {
  DUMMY_EXPENSES,
} from "../../common/components/expensesOutpus/ExpensesOutput";

const RecentExpenses = () => {
  return (
    <ExpensesOutput expensePeriod="Last 7 days" expenses={DUMMY_EXPENSES} />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput, {
  DUMMY_EXPENSES,
} from "../../common/components/expensesOutpus/ExpensesOutput";

const AllExpenses = () => {
  return <ExpensesOutput expensePeriod="Total" expenses={DUMMY_EXPENSES} />;
};

export default AllExpenses;

const styles = StyleSheet.create({});

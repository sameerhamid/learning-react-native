import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../../common/components/expensesOutpus/ExpensesOutput";
import { ExpensesContext } from "../../common/store/ExpensesContext";
import { getDateMinusDays } from "../../common/utils/dateUtils";

const RecentExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    console.log("today>>>", today, date7DaysAgo);
    return expense.date >= date7DaysAgo;
  });
  return (
    <ExpensesOutput expensePeriod="Last 7 days" expenses={recentExpenses} />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});

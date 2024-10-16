import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../../common/components/expensesOutpus/ExpensesOutput";
import { ExpensesContext } from "../../common/store/ExpensesContext";
import { getDateMinusDays } from "../../common/utils/dateUtils";
import { fetchExpenses } from "../../common/utils/http";
import LoadingOverlay from "../../common/components/ui/LoadingOverlay";
import ErrorOverlay from "../../common/components/ui/ErrorOverlay";

const RecentExpenses = () => {
  const { expenses, loading, isError, handleIsErrorState } =
    useContext(ExpensesContext);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo;
  });

  if (loading) {
    return <LoadingOverlay />;
  }
  if (isError && !loading) {
    return (
      <ErrorOverlay
        message="Could not fetch expenses!"
        onConfirm={() => {
          handleIsErrorState(false);
        }}
      />
    );
  }
  return (
    <ExpensesOutput
      expensePeriod="Last 7 days"
      expenses={recentExpenses}
      fallbackTxt="No expenses registerd for the last 7 days."
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});

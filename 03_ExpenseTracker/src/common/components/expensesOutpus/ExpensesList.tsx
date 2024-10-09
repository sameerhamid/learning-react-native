import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ExpenseType } from "./ExpensesSummary";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }: { expenses: ExpenseType[] }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={expenses}
      renderItem={({ item }) => <ExpenseItem expense={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  contentContainer: {
    rowGap: 10,
  },
});

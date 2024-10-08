import { FlatList, View } from "react-native";
import React from "react";
import { ExpenseType } from "./ExpensesSummary";

const ExpensesList = ({ expenses }: { expenses: ExpenseType[] }) => {
  return <FlatList data={expenses} renderItem={() => <View></View>} />;
};

export default ExpensesList;

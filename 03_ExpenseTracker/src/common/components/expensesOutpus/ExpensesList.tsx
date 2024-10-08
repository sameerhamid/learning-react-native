import { FlatList, Text, View } from "react-native";
import React from "react";
import { ExpenseType } from "./ExpensesSummary";

function renderExpenseItem(itemData: ExpenseType) {
  return (
    <View>
      <Text>{itemData.description}</Text>
    </View>
  );
}

const ExpensesList = ({ expenses }: { expenses: ExpenseType[] }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => renderExpenseItem(item)}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

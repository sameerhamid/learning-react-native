import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ExpenseType } from "./ExpensesSummary";
import { GlobalStyles } from "../../constansts/stylex";
import { getFromatedDate } from "../../utils/dateUtils";

const ExpenseItem = ({
  expense,
  onPress,
}: {
  expense: ExpenseType;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.topContainer}>
        <Text style={[styles.textBase, styles.description]}>
          {expense.description}
        </Text>
        <Text style={styles.textBase}>{getFromatedDate(expense.date)}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{expense.amount.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },
  topContainer: {
    rowGap: 2,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amountContainer: {
    padding: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});

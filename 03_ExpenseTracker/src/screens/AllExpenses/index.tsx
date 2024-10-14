import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../../common/components/expensesOutpus/ExpensesOutput";
import { ExpensesContext } from "../../common/store/ExpensesContext";

const AllExpenses = () => {
  const { expenses } = useContext(ExpensesContext);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expensePeriod="Total"
        expenses={expenses}
        fallbackTxt="No registered expenses found"
      />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

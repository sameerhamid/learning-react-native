import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Images } from "../../common/constansts/Images";
import { goBack } from "../../common/utils/navigatorUtils";
import { GlobalStyles } from "../../common/constansts/stylex";
import useManageExpensesController from "./useManageExpensesController";

import ExpenseForm from "../../common/components/mangeExpense/ExpenseForm";
import LoadingOverlay from "../../common/components/ui/LoadingOverlay";
import ErrorOverlay from "../../common/components/ui/ErrorOverlay";

const ManageExpenses = ({ route }: { route: any }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const {
    onDeletePress,
    onAddOrUpdatePress,
    selectedExpenses,
    loading,
    error,
    handleError,
  } = useManageExpensesController(editedExpenseId, isEditing);

  const renderHeader = (): React.ReactElement => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>
          {isEditing ? "Edit Expense" : "Add Expense"}
        </Text>
        <TouchableOpacity style={styles.closeBtn} onPress={() => goBack()}>
          <Image source={Images.CROSS} style={styles.crossImg} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderDeleteBtn = (): React.ReactElement => {
    return (
      <View style={styles.deletContainer}>
        <TouchableOpacity onPress={onDeletePress}>
          <Image source={Images.DELETE} style={styles.deleteImg} />
        </TouchableOpacity>
      </View>
    );
  };

  if (loading) {
    return <LoadingOverlay />;
  }

  if (error && !loading) {
    return <ErrorOverlay onConfirm={handleError} message={error} />;
  }
  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      <View style={styles.container}>
        <ExpenseForm
          submitButtonText={isEditing ? "Update" : "Add"}
          onSubmit={onAddOrUpdatePress}
          defaultValue={selectedExpenses}
        />

        {isEditing && renderDeleteBtn()}
      </View>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 24,
    // justifyContent: "space-between",
  },
  headerContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 18,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  closeBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  crossImg: {
    width: 16,
    height: 16,
    tintColor: "white",
  },
  headerTxt: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  deletContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  deleteImg: {
    width: 40,
    height: 40,
    tintColor: GlobalStyles.colors.error500,
  },
});

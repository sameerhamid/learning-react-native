import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Images } from "../../common/constansts/Images";
import { goBack } from "../../common/utils/navigatorUtils";
import { GlobalStyles } from "../../common/constansts/stylex";
import useManageExpensesController from "./useManageExpensesController";
import Button from "../../common/components/ui/Button";

const ManageExpenses = ({ route }: { route: any }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const { onDeletePress, onAddOrUpdatePress } = useManageExpensesController(
    editedExpenseId,
    isEditing
  );

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

  const renderCancelAndAddBtns = (): React.ReactElement => {
    return (
      <View style={styles.cancelAddContainer}>
        <Button
          mode="flat"
          buttonStyle={styles.buttons}
          title="Cancel"
          onPress={() => {
            goBack();
          }}
        />
        <Button
          buttonStyle={styles.buttons}
          title={isEditing ? "Update" : "Add"}
          onPress={onAddOrUpdatePress}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      <View style={styles.container}>
        {renderCancelAndAddBtns()}
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
    // fontWeight: "bold",
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
  cancelAddContainer: {
    flexDirection: "row",
    columnGap: 20,
    justifyContent: "center",
  },
  buttons: {
    minWidth: 120,
  },
});

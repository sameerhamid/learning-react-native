import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Images } from "../../common/constansts/Images";
import { goBack } from "../../common/utils/navigatorUtils";
import { GlobalStyles } from "../../common/constansts/stylex";

const ManageExpenses = ({ route }: { route: any }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>
          {isEditing ? "Edit Expense" : "Add Expense"}
        </Text>
        <TouchableOpacity style={styles.closeBtn} onPress={() => goBack()}>
          <Image source={Images.CROSS} style={styles.crossImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

import { useContext } from "react";
import { ExpensesContext } from "../../common/store/ExpensesContext";
import { goBack } from "../../common/utils/navigatorUtils";
import { DUMMY_EXPENSES } from "../../common/components/expensesOutpus/ExpensesOutput";
import { getFormattedDate } from "../../common/utils/dateUtils";
import { ExpenseType } from "../../common/components/expensesOutpus/ExpensesSummary";

interface ManageExpenseController {
  onDeletePress: () => void;
  onAddOrUpdatePress: () => void;
}

const useManageExpensesController = (
  editedExpenseId: string,
  isEditing: boolean
): ManageExpenseController => {
  const { expenses, addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext);

  // delete expense handler
  const onDeletePress = (): void => {
    deleteExpense(editedExpenseId);
    goBack();
  };

  // add or update expense handler
  const onAddOrUpdatePress = (): void => {
    const id = `e${expenses.length + 1}`;
    const date = new Date();
    const dummyObject: ExpenseType = {
      id: isEditing ? editedExpenseId : id,
      description: ` ${isEditing ? editedExpenseId : id} New Expense`,
      amount: 99.99 + expenses.length,
      date: new Date(getFormattedDate(date)),
    };
    isEditing
      ? updateExpense(editedExpenseId, dummyObject)
      : addExpense(dummyObject);

    goBack();
  };

  return { onDeletePress, onAddOrUpdatePress };
};

export default useManageExpensesController;

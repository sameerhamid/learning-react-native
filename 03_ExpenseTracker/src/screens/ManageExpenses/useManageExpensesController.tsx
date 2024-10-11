import { useContext } from "react";
import { ExpensesContext } from "../../common/store/ExpensesContext";
import { goBack } from "../../common/utils/navigatorUtils";
import { DUMMY_EXPENSES } from "../../common/components/expensesOutpus/ExpensesOutput";
import { getFormattedDate } from "../../common/utils/dateUtils";
import { ExpenseType } from "../../common/components/expensesOutpus/ExpensesSummary";

interface ManageExpenseController {
  onDeletePress: () => void;
  onAddOrUpdatePress: (expense: ExpenseType) => void;
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
  const onAddOrUpdatePress = (expense: ExpenseType): void => {
    const id = `e${expenses.length + 1}`;
    const newExpense: ExpenseType = {
      ...expense,
      id: isEditing ? editedExpenseId : id,
      // date: new Date(getFormattedDate(expense.date)),
    };
    console.log("newExpense>>>>", newExpense);
    isEditing
      ? updateExpense(editedExpenseId, newExpense)
      : addExpense(newExpense);

    goBack();
  };

  return { onDeletePress, onAddOrUpdatePress };
};

export default useManageExpensesController;

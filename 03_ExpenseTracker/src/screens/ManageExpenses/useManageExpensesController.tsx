import { useContext } from "react";
import { ExpensesContext } from "../../common/store/ExpensesContext";
import { goBack } from "../../common/utils/navigatorUtils";
import { DUMMY_EXPENSES } from "../../common/components/expensesOutpus/ExpensesOutput";
import { getFormattedDate } from "../../common/utils/dateUtils";
import { ExpenseType } from "../../common/components/expensesOutpus/ExpensesSummary";
import {
  deleteExpenseBackend,
  storeExpense,
  updateExpenseBackend,
} from "../../common/utils/http";

interface ManageExpenseController {
  onDeletePress: () => void;
  onAddOrUpdatePress: (expense: ExpenseType) => void;
  selectedExpenses?: ExpenseType | undefined;
}

const useManageExpensesController = (
  editedExpenseId: string,
  isEditing: boolean
): ManageExpenseController => {
  const { expenses, addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext);
  const selectedExpenses: ExpenseType | undefined = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  // delete expense handler
  const onDeletePress = async (): Promise<void> => {
    deleteExpense(editedExpenseId);
    deleteExpenseBackend(editedExpenseId);
    goBack();
  };

  // add or update expense handler
  const onAddOrUpdatePress = async (expense: ExpenseType): Promise<void> => {
    const id = `e${expenses.length + 1}`;
    const newExpense: ExpenseType = {
      ...expense,
      id: isEditing ? editedExpenseId : id,
    };

    if (isEditing) {
      updateExpense(editedExpenseId, newExpense);
      updateExpenseBackend(editedExpenseId, {
        amount: newExpense.amount,
        date: newExpense.date,
        description: newExpense.description,
      });
    } else {
      console.log("add expense>>>");
      storeExpense(newExpense);
      addExpense(newExpense);
    }
    goBack();
  };

  return { onDeletePress, onAddOrUpdatePress, selectedExpenses };
};

export default useManageExpensesController;

import { useContext, useState } from "react";
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
  loading: boolean;
}

const useManageExpensesController = (
  editedExpenseId: string,
  isEditing: boolean
): ManageExpenseController => {
  const { expenses, addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext);
  const [loading, setLoading] = useState<boolean>(false);
  const selectedExpenses: ExpenseType | undefined = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  // delete expense handler
  const onDeletePress = async (): Promise<void> => {
    setLoading(true);
    deleteExpense(editedExpenseId);
    await deleteExpenseBackend(editedExpenseId);
    setLoading(false);
    goBack();
  };

  // add or update expense handler
  const onAddOrUpdatePress = async (expense: ExpenseType): Promise<void> => {
    setLoading(true);

    const newExpense: ExpenseType = {
      ...expense,
    };

    if (isEditing) {
      updateExpense(editedExpenseId, newExpense);

      await updateExpenseBackend(editedExpenseId, {
        amount: newExpense.amount,
        date: newExpense.date,
        description: newExpense.description,
      });
      setLoading(false);
    } else {
      const id = await storeExpense(newExpense);
      addExpense({ ...expense, id: id });
    }
    goBack();
  };

  return { onDeletePress, onAddOrUpdatePress, selectedExpenses, loading };
};

export default useManageExpensesController;

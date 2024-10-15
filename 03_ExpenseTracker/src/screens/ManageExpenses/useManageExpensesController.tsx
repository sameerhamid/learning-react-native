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
  error: string | null;
  handleError: () => void;
}

const useManageExpensesController = (
  editedExpenseId: string,
  isEditing: boolean
): ManageExpenseController => {
  const { expenses, addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const selectedExpenses: ExpenseType | undefined = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  // delete expense handler
  const onDeletePress = async (): Promise<void> => {
    setLoading(true);

    try {
      await deleteExpenseBackend(editedExpenseId);
      deleteExpense(editedExpenseId);
      goBack();
    } catch (error) {
      setError("Couldn't delete expense - please try again");
    }
    setLoading(false);
  };

  // add or update expense handler
  const onAddOrUpdatePress = async (expense: ExpenseType): Promise<void> => {
    setLoading(true);

    const newExpense: ExpenseType = {
      ...expense,
    };

    if (isEditing) {
      updateExpense(editedExpenseId, newExpense);

      try {
        await updateExpenseBackend(editedExpenseId, {
          amount: newExpense.amount,
          date: newExpense.date,
          description: newExpense.description,
        });
        goBack();
      } catch (error) {
        setError("Couldn't update expense - please try again");
      }
      setLoading(false);
    } else {
      try {
        const id = await storeExpense(newExpense);
        addExpense({ ...expense, id: id });
        goBack();
        setLoading(false);
      } catch (error) {
        setError("Couldn't add expense - please try again");
      }
    }
  };

  const handleError = (): void => {
    setError(null);
  };

  return {
    onDeletePress,
    onAddOrUpdatePress,
    selectedExpenses,
    loading,
    error,
    handleError,
  };
};

export default useManageExpensesController;

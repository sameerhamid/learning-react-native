interface ManageExpenseController {
  onDeletePress: () => void;
  onAddOrUpdatePress: () => void;
}

const useManageExpensesController = (): ManageExpenseController => {
  const onDeletePress = (): void => {};
  const onAddOrUpdatePress = (): void => {};
  return { onDeletePress, onAddOrUpdatePress };
};

export default useManageExpensesController;

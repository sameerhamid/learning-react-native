interface ManageExpenseController {
  onDeletePress: () => void;
}

const useManageExpensesController = (): ManageExpenseController => {
  const onDeletePress = (): void => {};
  return { onDeletePress };
};

export default useManageExpensesController;

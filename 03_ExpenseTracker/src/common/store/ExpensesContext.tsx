import React, { createContext, useReducer, PropsWithChildren } from "react";
import { ExpenseType } from "../components/expensesOutpus/ExpensesSummary";
import { ExpenseActionType } from "../constansts/enums";
import { DUMMY_EXPENSES } from "../components/expensesOutpus/ExpensesOutput";

// Define the context type
interface ExpenseContextType {
  expenses: ExpenseType[];
  addExpense: (expense: ExpenseType) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expense: ExpenseType) => void;
  setExpenses: (expenseData: ExpenseType[]) => void;
}

// Create a default value for the context
const defaultContextValue: ExpenseContextType = {
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
  setExpenses: () => [],
};

// Create the Expenses context
export const ExpensesContext =
  createContext<ExpenseContextType>(defaultContextValue);

// Define action types and payloads
type AddExpenseAction = {
  type: ExpenseActionType.ADD;
  payload: ExpenseType; // Specify the expected payload type for adding an expense
};

type UpdateExpenseAction = {
  type: ExpenseActionType.UPDATE;
  payload: { id: string; data: ExpenseType }; // Specify the expected payload type for updating an expense
};

type DeleteExpenseAction = {
  type: ExpenseActionType.DELETE;
  payload: string; // Specify the expected payload type for deleting an expense
};

type SetExpenseAction = {
  type: ExpenseActionType.SET_EXPENSES;
  payload: ExpenseType[]; // Specify the expected payload type for deleting an expense
};

// Define the action type union
type ExpenseAction =
  | AddExpenseAction
  | UpdateExpenseAction
  | DeleteExpenseAction
  | SetExpenseAction;

// Define the initial state for the reducer
const initialState: ExpenseType[] = [];

// Reducer function
const expensesReducer = (
  state: ExpenseType[],
  action: ExpenseAction // Use the union type for actions
) => {
  switch (action.type) {
    case ExpenseActionType.ADD:
      return [...state, action.payload]; // Add the new expense
    case ExpenseActionType.UPDATE:
      return state.map((expense) =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload.data } // Spread updated data
          : expense
      ); // Update the specified expense
    case ExpenseActionType.DELETE:
      return state.filter((expense) => expense.id !== action.payload); // Delete the specified expense
    case ExpenseActionType.SET_EXPENSES:
      return [...action.payload];
    default:
      return state; // Return the current state if no action matches
  }
};

// Define a provider component that accepts `children` as a prop
const ExpensesProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, initialState); // Pass the initial state to useReducer

  const addExpense = (expense: ExpenseType) => {
    dispatch({
      type: ExpenseActionType.ADD,
      payload: expense,
    });
  };

  const deleteExpense = (id: string) => {
    dispatch({
      type: ExpenseActionType.DELETE,
      payload: id,
    });
  };

  const updateExpense = (id: string, updatedExpense: ExpenseType) => {
    dispatch({
      type: ExpenseActionType.UPDATE,
      payload: { id, data: updatedExpense },
    });
  };

  const setExpenses = (expenseData: ExpenseType[]) => {
    dispatch({
      type: ExpenseActionType.SET_EXPENSES,
      payload: expenseData,
    });
  };
  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
        setExpenses,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;

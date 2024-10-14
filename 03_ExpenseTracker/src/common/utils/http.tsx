import { ExpenseType } from "../components/expensesOutpus/ExpensesSummary";
import axios from "axios";

const BASE_URL =
  "https://expense-tracker-390e7-default-rtdb.asia-southeast1.firebasedatabase.app/";
export function storeExpense(expensData: ExpenseType) {
  console.log("expense>>>", expensData);
  axios.post(`${BASE_URL}expenses.json`, expensData);
}

export async function fetchExpenses() {
  const response = await axios.get(`${BASE_URL}expenses.json`);

  const expensesArray: ExpenseType[] = [];
  for (const key in response.data) {
    expensesArray.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    });
  }
  return expensesArray;
}

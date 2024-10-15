import { ExpenseType } from "../components/expensesOutpus/ExpensesSummary";
import axios from "axios";

const BASE_URL =
  "https://expense-tracker-390e7-default-rtdb.asia-southeast1.firebasedatabase.app/";
export async function storeExpense(expensData: ExpenseType) {
  const response = await axios.post(`${BASE_URL}expenses.json`, expensData);
  console.log(JSON.stringify(response));
  return response.data.name;
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

export async function updateExpenseBackend(
  id: string,
  updateData: ExpenseType
) {
  return await axios.put(`${BASE_URL}expenses/${id}.json`, updateData);
}
export async function deleteExpenseBackend(id: string) {
  return await axios.delete(`${BASE_URL}expenses/${id}.json`);
}

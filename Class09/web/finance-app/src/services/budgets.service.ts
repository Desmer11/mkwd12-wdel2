import { BudgetCreationProps, BudgetUpdateProps } from "../types/budget.types";

export const fetchBudgets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/budgets");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    // TODO: Handle the error for better UX
  }
};

export const createBudget = async (createBudgetProps: BudgetCreationProps) => {
  try {
    const res = await fetch("http://localhost:3000/api/budgets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createBudgetProps),
    });
    const response = await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteBudget = async (budgetID: string) => {
  try {
    await fetch(`http://localhost:3000/api/budgets/${budgetID}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBudgetByID = async (budgetID: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/budgets/${budgetID}`);
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateBudget = async (
  budgetID: string,
  budget: BudgetUpdateProps
) => {
  try {
    const res = await fetch(`http://localhost:3000/api/budgets/${budgetID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(budget),
    });

    const result = await res.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

import fsPromises from "fs/promises";
import { Budget, BudgetCreationProps } from "../types/budget.types";

import { v4 } from "uuid";

class BudgetModel {
  async readBudgets() {
    const rawBudgets = await fsPromises.readFile(
      "src/db/budget.db.json",
      "utf-8"
    );

    const budgets = JSON.parse(rawBudgets);

    return budgets;
  }

  async createBudget(budgetCreationProps: BudgetCreationProps) {
    // TODO: Create Entity Class

    const ID = v4();
    const budget: Budget = {
      id: ID,
      fromPeriod: budgetCreationProps.fromPeriod,
      toPeriod: budgetCreationProps.toPeriod,
      totalAmmount: budgetCreationProps.totalAmmount,
      categories: budgetCreationProps.categories,
      currency: budgetCreationProps.currency,
      spentAmmount: 0, // TODO: Calculate this
      remainingAmmount: 0, // TODO: Calculate
    };

    const rawBudgets = await fsPromises.readFile(
      "src/db/budget.db.json",
      "utf-8"
    );

    const budgets = JSON.parse(rawBudgets);

    budgets.push(budget);

    await fsPromises.writeFile(
      "src/db/budget.db.json",
      JSON.stringify(budgets, null, 2)
    );

    return ID;
  }
}

export default BudgetModel;

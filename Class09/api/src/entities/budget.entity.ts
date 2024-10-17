import { Budget, BudgetCreationProps, Category } from "../types/budget.types";

export class BudgetEntity implements Budget {
  id: string;
  fromPeriod: number;
  toPeriod: number;
  totalAmmount: number;
  spentAmmount: number;
  remainingAmmount: number;
  currency: string;
  categories: Category[];

  constructor(budgetCreationProps: BudgetCreationProps) {
    this.id = budgetCreationProps.id!; // hey I am sure that this wont be undefined
    this.fromPeriod = budgetCreationProps.fromPeriod;
    this.toPeriod = budgetCreationProps.toPeriod;
    this.totalAmmount = budgetCreationProps.totalAmmount;
    this.currency = budgetCreationProps.currency;
    this.categories = budgetCreationProps.categories;
    this.spentAmmount = this.calculateSpentAmmount();
    this.remainingAmmount = this.calculateRemainingAmount();
  }

  private calculateSpentAmmount(): number {
    let count = 0;

    for (const category of this.categories) {
      count += category.spentAmount;
    }

    return count;
  }

  private calculateRemainingAmount(): number {
    return this.totalAmmount - this.spentAmmount;
  }
}

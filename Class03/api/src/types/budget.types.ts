export interface Category {
  category: string;
  spentAmount: number;
}

export interface BudgetCreationProps {
  id: string | undefined;
  fromPeriod: number; // timestamp
  toPeriod: number; // timestamp
  totalAmmount: number;
  currency: string;
  categories: Category[];
}

export interface Budget {
  id: string;
  fromPeriod: number;
  toPeriod: number;
  totalAmmount: number;
  spentAmmount: number;
  remainingAmmount: number;
  currency: string;
  categories: Category[];
}

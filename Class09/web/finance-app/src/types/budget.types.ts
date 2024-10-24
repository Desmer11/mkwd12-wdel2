export interface Category {
  category: string;
  spentAmount: number;
}

export interface BudgetCreationProps {
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

export interface BudgetUpdateProps {
  fromPeriod?: number; // timestamp
  toPeriod?: number; // timestamp
  totalAmmount?: number;
  currency?: string;
  categories?: Category[];
}

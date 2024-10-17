import { BudgetCreationProps, BudgetUpdateProps } from "../types/budget.types";

import { BudgetEntity } from "../entities/budget.entity";
import mongoose from "mongoose";
import BudgetSchema, { BudgetDocument } from "../types/budget.schema";
import { NotFoundError } from "../errors";

class BudgetModel {
  BudgetMongoModel;

  constructor() {
    this.BudgetMongoModel = mongoose.model("Budget", BudgetSchema, "budgets");
  }

  async readBudgets(): Promise<BudgetEntity[]> {
    const budgetsDocuments: BudgetDocument[] =
      await this.BudgetMongoModel.find();

    // Good practice: to always remap (denormalize) the data fetched from the DB

    // TODO: Move this into a mapper class
    const budgets = budgetsDocuments.map(
      (budgetDocument) => new BudgetEntity(budgetDocument)
    );

    return budgets;
  }

  async createBudget(budgetCreationProps: BudgetCreationProps) {
    const budgetEntity = new BudgetEntity(budgetCreationProps);

    const budget = new this.BudgetMongoModel(budgetEntity);

    const response = await budget.save();
    console.log(response);

    return response._id.toString();
  }

  async getBudgetByID(id: string): Promise<BudgetEntity> {
    const budgetDocument: BudgetDocument | null =
      await this.BudgetMongoModel.findById(id);

    if (!budgetDocument) {
      throw new NotFoundError(
        "NOT_FOUND",
        404,
        `Budget with id: ${id} was not found`
      );
    }

    return new BudgetEntity(budgetDocument);
  }

  async deleteByID(id: string) {
    const response = await this.BudgetMongoModel.findByIdAndDelete(id);

    if (!response) {
      throw new NotFoundError(
        "NOT_FOUND",
        404,
        `Budget with id: ${id} was not found`
      );
    }
  }

  async updateByID(id: string, budgetUpdateProps: BudgetUpdateProps) {
    const budgetDocument: BudgetDocument | null =
      await this.BudgetMongoModel.findById(id);

    if (!budgetDocument) {
      throw new NotFoundError(
        "NOT_FOUND",
        404,
        `Budget with id: ${id} was not found`
      );
    }

    const budgetNotUpdatedEntity = new BudgetEntity(budgetDocument);

    const updatedBudgetEntity = new BudgetEntity({
      ...budgetNotUpdatedEntity, // {totalAmount: 0, currency: "MKD", spentAmount: 500}
      ...budgetUpdateProps, // {totalAmount: 100, currency: "MKD"} => {totalAmount: 100, currency: "MKD", spentAmount: 500}
    });

    await this.BudgetMongoModel.findByIdAndUpdate(id, updatedBudgetEntity);
  }
}

export default BudgetModel;

import { Request, Response } from "express";
import BudgetModel from "../models/budget.model";

class BudgetController {
  private budgetModel: BudgetModel;

  constructor() {
    this.budgetModel = new BudgetModel();
  }

  async readBudgets(req: Request, res: Response) {
    try {
      const budgets = await this.budgetModel.readBudgets();

      res.send(budgets);
    } catch (error) {
      res.status(500).send({ message: "Something went wrong" }); // TODO: Handle errors
    }
  }

  async createBudget(req: Request, res: Response) {
    try {
      console.log(req.body);
      const id = await this.budgetModel.createBudget(req.body); // TODO: Validate the request and re-map-it

      res.status(201).send({ message: "Created", id });
    } catch (error) {}
  }
}

export default BudgetController;

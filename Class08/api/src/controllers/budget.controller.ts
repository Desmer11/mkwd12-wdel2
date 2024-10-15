import { Request, Response } from "express";
import BudgetModel from "../models/budget.model";
import { NotFoundError } from "../errors";
import { BudgetDTOValidator } from "./dto/validators";

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
      if (error instanceof NotFoundError) {
        res
          .status(error.status)
          .send({ message: error.message, reason: error.reason });
      }

      // TODO: Make a logging mechanism so we log each error that happened
      res.status(500).send();
    }
  }

  async createBudget(req: Request, res: Response) {
    try {
      const { value, error } = BudgetDTOValidator.validate(req.body);

      if (error) {
        res.status(400).send({
          message: "Validation Error",
          details: error.details.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        });

        return;
      }

      const id = await this.budgetModel.createBudget(value); // TODO: Validate the request and re-map-it

      res.status(201).send({ message: "Created", id });
    } catch (error) {
      res.status(500).send();
    }
  }

  async findById(req: Request, res: Response) {
    try {
      console.log("Request params ", req.params.id);
      const budget = await this.budgetModel.getBudgetByID(req.params.id);

      res.send(budget);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res
          .status(error.status)
          .send({ message: error.message, reason: error.reason });
      }

      // TODO: Make a logging mechanism so we log each error that happened
      res.status(500).send();
    }
  }

  async deleteBudgetById(req: Request, res: Response) {
    try {
      await this.budgetModel.deleteByID(req.params.id);

      res.status(204).send({ message: "Deleted" });
    } catch (error) {
      if (error instanceof NotFoundError) {
        res
          .status(error.status)
          .send({ message: error.message, reason: error.reason });
      }

      // TODO: Make a logging mechanism so we log each error that happened
      res.status(500).send();
    }
  }

  async updateBudgetById(req: Request, res: Response) {
    try {
      await this.budgetModel.updateByID(req.params.id, req.body);
      res
        .status(204)
        .send({ message: `Budget with id: ${req.params.id} updated.` });
    } catch (error) {
      if (error instanceof NotFoundError) {
        res
          .status(error.status)
          .send({ message: error.message, reason: error.reason });
      }

      // TODO: Make a logging mechanism so we log each error that happened
      res.status(500).send();
    }
  }
}

export default BudgetController;

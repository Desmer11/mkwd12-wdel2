import express from "express";
import BudgetController from "../controllers/budget.controller";

const budgetRouter = express.Router();

const budgetController = new BudgetController();

// EP: localhost:3000/api/budgets; METHOD: GET
budgetRouter.get("/api/budgets", async (req, res) =>
  budgetController.readBudgets(req, res)
);

// EP: localhost:3000/api/budgets; METHOD: POST
budgetRouter.post("/api/budgets", async (req, res) =>
  budgetController.createBudget(req, res)
);

export default budgetRouter;

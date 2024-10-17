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

// EP: localhost:3000/api/budgets/some_id; METHOD: GET
budgetRouter.get("/api/budgets/:id", async (req, res) =>
  budgetController.findById(req, res)
);

// EP: localhost:3000/api/budgets/some_id; METHOD: DELETE
budgetRouter.delete("/api/budgets/:id", async (req, res) => {
  budgetController.deleteBudgetById(req, res);
});

// EP: localhost:3000/api/budgets/some_id; METHOD: PUT
budgetRouter.put("/api/budgets/:id", async (req, res) => {
  budgetController.updateBudgetById(req, res);
});

export default budgetRouter;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Budgets from "./pages/Budgets/Budgets";
import CreateBudget from "./pages/CreateBudget/CreateBudget";
import { useEffect, useState } from "react";
import { fetchBudgets } from "./services/budgets.service";
import { Budget } from "./types/budget.types";
import BudgetDetails from "./pages/BudgetDetails/BudgetDetails";

function App() {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  useEffect(() => {
    fetchBudgets().then((data) => {
      setBudgets(data);
    });
  }, []); // load on initial render

  const refetchBudgets = () => {
    fetchBudgets().then((data) => {
      setBudgets(data);
    });
  };

  return (
    <BrowserRouter>
      <main className="container">
        <Sidebar />
        <section className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/budgets"
              element={
                <Budgets budgets={budgets} refetchBudgets={refetchBudgets} />
              }
            />
            <Route
              path="/budget-create"
              element={<CreateBudget refetchBudgets={refetchBudgets} />}
            />
            <Route
              path="/budget/:id"
              element={<BudgetDetails refetchBudgets={refetchBudgets} />}
            />

            <Route path="/settings" element={"Settings"} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;

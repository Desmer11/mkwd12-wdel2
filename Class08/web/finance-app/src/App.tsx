import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Budgets from "./pages/Budgets/Budgets";
import CreateBudget from "./pages/CreateBudget/CreateBudget";
import { useEffect, useState } from "react";
import { fetchBudgets } from "./services/budgets.service";
import { Budget } from "./types/budget.types";

function App() {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  useEffect(() => {
    if (budgets.length > 0) return;

    fetchBudgets().then((data) => {
      setBudgets(data);
    });
  }, [budgets]); // load on initial render

  return (
    <BrowserRouter>
      <main className="container">
        <Sidebar />
        <section className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/budgets" element={<Budgets budgets={budgets} />} />
            <Route path="/budget-create" element={<CreateBudget />} />
            <Route path="/budget/:id" element={"Budget by id"} />

            <Route path="/settings" element={"Settings"} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;

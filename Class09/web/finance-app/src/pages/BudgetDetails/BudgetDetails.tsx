import { useEffect, useState } from "react";
import "./BudgetDetails.css";
import { useParams } from "react-router-dom";
import { getBudgetByID } from "../../services/budgets.service";
import { Budget } from "../../types/budget.types";
import EditBudgetForm from "../../components/EditBudgetForm/EditBudgetForm";

interface BudgetDetailsProp {
  refetchBudgets: () => void;
}

const BudgetDetails = ({ refetchBudgets }: BudgetDetailsProp) => {
  const params = useParams();
  const id = params.id;

  const [budget, setBudget] = useState<Budget | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    if (!id) return;

    getBudgetByID(id).then((data) => {
      setBudget(data);
    });
  }, [id]);

  const refetchBudget = () => {
    if (!id) return;

    getBudgetByID(id).then((data) => {
      setBudget(data);
    });
  };

  return (
    <section className="budgetDetailsContainer">
      <h1>Budget details</h1>

      {budget && (
        <div>
          <p>Total amount: {budget.totalAmmount}</p>
          <p>Spent amount: {budget.spentAmmount}</p>
          <p>Remaining amount: {budget.remainingAmmount}</p>
        </div>
      )}

      <button className="editButton" onClick={toggleEdit}>
        {isEditing ? "Discard" : "Edit"}
      </button>

      {isEditing && budget && (
        <EditBudgetForm
          refetchBudgets={refetchBudgets}
          budget={budget}
          refetchBudget={refetchBudget}
        />
      )}
    </section>
  );
};

export default BudgetDetails;

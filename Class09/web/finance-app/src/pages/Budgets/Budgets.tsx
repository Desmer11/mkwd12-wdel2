import { deleteBudget } from "../../services/budgets.service";
import { Budget } from "../../types/budget.types";
import "./Budgets.css";
import { Link, useNavigate } from "react-router-dom";

interface BudgetsProps {
  budgets: Budget[];
  refetchBudgets: () => void; // 1.refetchBudgets is the name of the prop that we are going to provide; 2. :() => void means that the type of this prop is a function that RETURNS VOID
}

const Budgets = (props: BudgetsProps) => {
  const { budgets, refetchBudgets } = props;

  const navigate = useNavigate();

  const onCreateNew = () => {
    navigate("/budget-create");
  };

  const handleDelete = async (budgetID: string) => {
    // make the api request
    await deleteBudget(budgetID);
    refetchBudgets();
  };

  return (
    <div>
      <div className="budgetsOperations">
        <h2>Budgets</h2>
        <button onClick={onCreateNew}>Create New</button>
      </div>

      <table>
        <thead>
          <tr>
            <th align="left" className="tableHeading">
              Order #
            </th>

            <th align="left" className="tableHeading">
              Period
            </th>

            <th align="left" className="tableHeading">
              Total Amount
            </th>

            <th align="left" className="tableHeading">
              Spent Amount
            </th>

            <th align="left" className="tableHeading">
              Remaining Amount
            </th>

            <th align="left" className="tableHeading"></th>
          </tr>
        </thead>

        <tbody>
          {budgets.map((budget, index) => (
            <tr key={budget.id}>
              <td className="tableData">
                <Link to={`/budget/${budget.id}`}># {index + 1}</Link>
              </td>
              <td className="tableData">
                {new Date(budget.fromPeriod).toLocaleDateString()} -{" "}
                {new Date(budget.toPeriod).toLocaleDateString()}
              </td>

              <td className="tableData">
                {budget.currency} {budget.totalAmmount}
              </td>

              <td className="tableData">
                {budget.currency} {budget.spentAmmount}
              </td>

              <td className="tableData">
                {budget.currency} {budget.remainingAmmount}
              </td>

              <td
                onClick={() => handleDelete(budget.id)}
                className="tableData deleteIcon"
              >
                🗑️
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Budgets;

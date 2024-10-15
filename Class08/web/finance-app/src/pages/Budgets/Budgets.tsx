import { Budget } from "../../types/budget.types";
import "./Budgets.css";
import { Link, useNavigate } from "react-router-dom";

interface BudgetsProps {
  budgets: Budget[];
}

const Budgets = (props: BudgetsProps) => {
  const { budgets } = props;

  const navigate = useNavigate();

  const onCreateNew = () => {
    navigate("/budget-create");
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Budgets;

import { Todo } from "../../types/todo.interface";
import "./Todos.css";

interface TodosProps {
  todos: Todo[];
}

const Todos = (props: TodosProps) => {
  console.log("todos as props: ", props);
  const { todos } = props;

  const statusClass = {
    pending: "pendingTodo",
    in_progress: "inProgressTodo",
    done: "doneTodo",
  };

  const statusFormatter = (
    status: "pending" | "in_progress" | "done"
  ): string => {
    switch (status) {
      case "pending":
        return "Not even started";
      case "in_progress":
        return "Currently in progress...";
      case "done":
        return "Completed";
      default:
        return "Completed";
    }
  };

  return (
    <section className="todosContainer">
      {todos.map((todo) => (
        <div className={`todoCard ${statusClass[todo.status]}`} key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{statusFormatter(todo.status)}</p>
        </div>
      ))}
    </section>
  );
};

export default Todos;

import { useState } from "react";
import { Todo } from "../../types/todo.interface";
import { v4 as ID } from "uuid";

interface CreateTodoProps {
  addTodo: (todo: Todo) => void;
}

const CreateTodo = (props: CreateTodoProps) => {
  const { addTodo } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;

    setDescription(value);
  };

  const reset = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todo: Todo = {
      id: ID(),
      title: title,
      description: description,
      status: "pending",
    };

    console.log("Created todo:", todo);

    addTodo(todo);
    reset();
  };

  return (
    <section>
      <form onSubmit={(event) => handleSubmit(event)}>
        {/* "htmlFor" is the "for" argument in html tags */}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter todo title"
          onChange={(event) => handleChangeTitle(event)}
          value={title}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter description"
          cols={40}
          rows={5}
          onChange={(event) => handleChangeDescription(event)}
          value={description}
        />
        <button>Create</button>
      </form>
    </section>
  );
};

export default CreateTodo;

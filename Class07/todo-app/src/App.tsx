import { useState } from "react";

import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Todos from "./components/Todos/Todos";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import NotFound from "./components/NotFound/NotFound";
import { Todo } from "./types/todo.interface";

const dummyTodos: Todo[] = [
  {
    id: "1",
    title: "Walk the dog",
    description: "Walk the dog so he can sleep late",
    status: "pending",
  },
  {
    id: "2",
    title: "Learn react",
    description: "Learn react library to build cool web apps",
    status: "in_progress",
  },
  {
    id: "3",
    title: "Go to the gym",
    description: "Go to the gym since we work infront of the pc all day long",
    status: "done",
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(dummyTodos);

  const addTodo = (todo: Todo): void => {
    setTodos([...todos, todo]);
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* localhost:5173  */}
        <Route path="/" element={<Home />} />

        {/* localhost:5173/todos */}
        <Route path="todos" element={<Todos todos={todos} />} />

        {/* localhost:5173/create-todo */}
        <Route path="create-todo" element={<CreateTodo addTodo={addTodo} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

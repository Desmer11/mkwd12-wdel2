import { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [title, setTitle] = useState("");
  const [counter, setCounter] = useState(0);

  const handleSetTitle = useCallback((text: string) => {
    setTitle(text);
  }, []);

  const handleIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleDecrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  return (
    <>
      <h2>Parent</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
        dolore!
      </p>

      <input
        type="text"
        onChange={(event) => handleSetTitle(event.target.value)}
      />

      <hr />
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <hr />

      {/* If a parent component RERENDERS automaticaly the CHILD component is rerendered ALSO */}
      <Child text={title} />
    </>
  );
};

export default Parent;

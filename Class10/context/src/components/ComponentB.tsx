import { useContext } from "react";
import { ComponentC } from "./ComponentC";
import { AppContext } from "../context/app.context";

export const ComponentB = () => {
  const { handleChangeTitle } = useContext(AppContext);

  return (
    <div>
      <input type="text" onChange={(e) => handleChangeTitle(e.target.value)} />
      <hr />
      <ComponentC />
    </div>
  );
};

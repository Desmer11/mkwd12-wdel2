import { useContext } from "react";
import { AppContext } from "../context/app.context";

export const ComponentC = () => {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <div>
      <h3>{context.title}</h3>
    </div>
  );
};

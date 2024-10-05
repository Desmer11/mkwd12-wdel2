import { Child } from "./Child";
import { SecondChild } from "./SecondChild";

const Parent = () => {
  const title = "Parent Component";
  const msg = "To child";

  const valuesFromParent = ["Bread", "Milk", "Banana"];

  const secondChildTitle = "Hello second child";
  return (
    <>
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet.</p>

      {/* Provide the props from child to parent as KEY={VALUE} pairs */}
      <Child msg={msg} ingredients={valuesFromParent} />

      <hr />
      {/* Provide the props from child to parent as KEY={VALUE} pairs */}
      <SecondChild
        title={secondChildTitle}
        cities={["Skopje", "Bitola", "Gevgelija"]}
        // capitalCity={"Skopje"} // Will give us error, since this PROPERTY is not expected by the CHILD component =).
        // isAuthenticated={true}
      />
    </>
  );
};

export default Parent;

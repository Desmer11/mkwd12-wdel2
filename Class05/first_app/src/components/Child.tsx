export const Child = (props) => {
  console.log("Props in child:", props);
  return (
    <>
      <h3>I am child component</h3>
      <p>{props.msg}</p>

      <ul>
        <li>{props.ingredients[0]}</li>
        <li>{props.ingredients[1]}</li>
        <li>{props.ingredients[2]}</li>
      </ul>
    </>
  );
};

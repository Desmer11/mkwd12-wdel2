import { memo } from "react";

interface ChildProps {
  text: string;
}

// memo will return MEMOIZED version of the component, meaning the component will rerender if the value of the prop CHANGES!
const Child = memo((props: ChildProps) => {
  console.log("This is child component");
  return (
    <>
      <h2>Child</h2>
      <p>{props.text}</p>
    </>
  );
});

export default Child;

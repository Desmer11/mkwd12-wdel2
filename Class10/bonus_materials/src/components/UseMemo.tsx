import { useMemo, useState } from "react";

const complexCalculation = (value: number) => {
  console.log("complex calculation");

  let longNumber = 0;

  for (let index = 0; index < 2000000000; index++) {
    longNumber += index;
  }

  return longNumber * value;
};

export const UseMemoExample = () => {
  const [number, setNumber] = useState(2);
  const [text, setText] = useState("");

  const handleSetNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10);

    setNumber(randomNumber);
  };

  const handleChangeText = (text: string) => {
    setText(text);
  };

  // WITHOUT USEMEMO
  // const result = complexCalculation(number);

  // WITH USEMEMO
  const result = useMemo(() => {
    return complexCalculation(number);
  }, [number]);

  console.log("result", result);
  return (
    <div>
      <h2>UseMemo Example</h2>
      <p>{text}</p>
      <input type="text" onChange={(e) => handleChangeText(e.target.value)} />

      <button onClick={handleSetNumber}>Change number</button>
    </div>
  );
};

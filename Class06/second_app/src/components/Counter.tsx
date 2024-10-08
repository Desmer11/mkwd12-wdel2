import { useState } from "react";

const Counter = () => {
  // useState is creating a state property useState(0) => the 0 or the value in between the brackets () is the default/initial value of that state property

  // const [stateProp, setStateProp] = useState(initialValue)
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  const [welcomingMsg, setWelcomingMessage] = useState("Hello amigos!");

  const handleIncrement = () => {
    console.log("Increment is clicked");
    // counter++; // IMPORTANT => WE MUST NOT MUTATE THE STATE!!!
    setCounter(counter + 1);
    console.log("COUNT IN INCREMENT: ", counter);
  };

  const handleDecrement = () => {
    console.log("Decrement is clicked");
    // counter--; // IMPORTANT => WE MUST NOT MUTATE THE STATE!!!

    const newValueOfCounter = counter - 1;
    setCounter(newValueOfCounter);

    console.log("COUNT IN DECREMENT: ", counter);
  };

  const handleIncrementBy = (incrementBy: number) => {
    console.log("Increment by:", incrementBy);
    //  counter += incrementBy; // IMPORTANT => WE MUST NOT MUTATE THE STATE!!!

    setCounter(counter + incrementBy);
    console.log("COUNT IN INCREMENT BY: ", counter);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("user types", event.target.value);
    // message = event.target.value; // IMPORTANT => WE MUST NOT MUTATE THE STATE!!!

    setMessage(event.target.value);
  };
  // RE-RENDER

  return (
    <section>
      <h1>State in react</h1>
      <div>
        <h2>Count: {counter}</h2>
        {/* SYNTAX: 1 */}
        {/* onClick={whatShouldHappen()} */}

        <button onClick={() => handleIncrement()}>Increment</button>
        {/* SYNTAX: 2  It's applicable only for functions that does NOT accept parameters. This way we only provide a REFERENCE to that function*/}
        <button onClick={handleDecrement}>Decrement</button>

        {/* This will not work as expected */}
        {/* <button onClick={handleDecrement()}>Decrement</button> */}
        <button onClick={() => handleIncrementBy(2)}>Increament by</button>
      </div>
      <hr />

      <div>
        {/* PASSING THE EVENT AS AN ARGUMENT. PAY ATTENTION TO PROVIDE THE CORRECT TYPE OF THE EVENT */}
        <input type="text" onChange={(event) => handleTextChange(event)} />
        <p>{message}</p>

        <button onClick={() => setWelcomingMessage("Hello dear students")}>
          Change message
        </button>

        <h3>{welcomingMsg}</h3>
      </div>
    </section>
  );
};

export default Counter;

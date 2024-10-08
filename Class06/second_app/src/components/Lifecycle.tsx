import { useEffect, useState } from "react";

const Lifecycle = () => {
  const [message, setMessage] = useState("Initial message");
  const [colorValue, setColorValue] = useState("#000000");

  const handleChangeMessage = () => {
    setMessage("Updated message.");
  };

  const handleChangeColor = (color: string) => {
    setColorValue(color);
  };

  // 1ST APPROACH: we provide effect with EMPTY DEPENDENCY LIST (the second argument [])
  // WHEN THE COMPONENT IS BORN/INITILIASED ON THE INITIAL RENDER
  useEffect(() => {
    //write some code now
    console.log("HEY, I EXECUTE ONLY ON THE INITIAL RENDER OF THE COMPONENT");
    // SUTABLE TO FETCH DATA
  }, []);

  // 2ND APPROACH: we provide a value in the effect's DEPENDENCY LIST (the second argument [])
  useEffect(() => {
    console.log("HEY I AM THE EFFECT WITH A VALUE IN THE DEPENDENCY LIST");
  }, [message]);

  // 3RD APPROACH => IMPORTANT => BE CAREFUL WITH THIS ONE
  // WE DON'T HAVE THE DEPENDENCY LIST, IT WILL EXECUTE ON THE FIRST/INITIAL RENDER AND ON EACH STATE PROP CHANGE
  useEffect(() => {
    console.log("HEY I AM EFFECT WITHOUT THE DEPENDECY LIST");
  });

  return (
    <>
      <h1>Lifecycle in react</h1>
      <button onClick={handleChangeMessage}>Change Message</button>
      <input
        type="color"
        onChange={(event) => {
          const color = event.target.value;
          handleChangeColor(color);
        }}
      />
      <p
        style={{
          color: colorValue,
        }}
      >
        {message}
      </p>
    </>
  );
};

export default Lifecycle;

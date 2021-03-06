import React, { useState } from "react";

const Hello = () => {
  const [text, settext] = useState("Hello World");

  const toggleHandler = () => {
    text === "Hello World"
      ? settext("Hello Palestine")
      : settext("Hello World");
  };

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={toggleHandler}>Text Toggle</button>
    </div>
  );
};

export default Hello;

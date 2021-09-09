import React, { useState } from "react";

const Comp3 = () => {
  const [sentence, setSentence] = useState("Changeable Sentence");

  const arr = [
    "There is no wind in the football.",
    "I talk, he talk, why you middle talk?",
    "You rotate the ground 4 times.",
    "You go and understand the tree.",
    "I'll give you clap on your cheeks.",
    "Bring your parents and your mother and especially your father.",
    "Close the window airforce is coming.",
    "I have two daughters and both are girls.",
    "Stand in a straight circle.",
    "Don't stand in front of my back",
  ];

  const changeSentenceHandler = () => {
    let chosenSentence = arr[Math.floor(Math.random() * 10)];
    setSentence(chosenSentence);
  };

  return (
    <div>
      <h2>{sentence}</h2>
      <button onClick={changeSentenceHandler}>Change Sentence</button>
    </div>
  );
};

export default Comp3;

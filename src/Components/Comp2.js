import React, { useState } from "react";
import "./Comp2.css";

const Comp2 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const usernameChangeHandler = (event) => {
    let enteredUsername = event.target.value;
    enteredUsername.length !== 0
      ? setUsername(`Username: ${enteredUsername}`)
      : setUsername("");
  };

  const emailChangeHandler = (event) => {
    let enteredEmail = event.target.value;
    enteredEmail.length !== 0
      ? setEmail(`Email: ${enteredEmail}`)
      : setEmail("");
  };

  return (
    <div className="comp2">
      <p>
        {username}
        <br />
        {email}
      </p>
      <form>
        <input
          type="text"
          onChange={usernameChangeHandler}
          placeholder="Username"
        />
        <input type="email" onChange={emailChangeHandler} placeholder="Email" />
      </form>
    </div>
  );
};

export default Comp2;

import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
  });

  const changeEvent = (event) => {
    let name = event.target.name;

    setFormValues({ ...formValues, [name]: event.target.value });
  };

  return (
    <div className="Form">
      <p>
        Username: {formValues.username}
        <br />
        Email: {formValues.email}
      </p>
      <form>
        <input
          type="text"
          onChange={changeEvent}
          placeholder="Username"
          name="username"
        />
        <input
          type="email"
          onChange={changeEvent}
          placeholder="Email"
          name="email"
        />
      </form>
    </div>
  );
};

export default Form;

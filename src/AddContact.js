import React, { useState } from "react";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory");
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
  };
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form " onSubmit={submit}>
        <div className="field">
          <label>Name</label>
          <input
            name="name"
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;

import React, { useState } from "react";
import axios from "axios";

function SignIn() {
  const [signIn, _signIn] = useState({
    id: "",
    uname: "",
    firstname: "",
    lastname: "",
    pass: "",
  });
  // const addContactHandler = async (contact) => {
  //   console.log(contact);
  //   const request = {
  //     id: uuid(),
  //     ...contact,
  //   };

  //   const response = await api.post("/contacts", request);
  //   console.log(response);
  //   setContacts([...contacts, response.data]);
  // };
  const handleChange = (e) => {
    const value = e.target.value;
    _signIn({
      ...signIn,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: signIn.id,
      username: signIn.name,
      first_name: signIn.fname,
      last_name: signIn.lname,
      pass: signIn.pass,
    };
    axios
      .post("http://localhost:3000/employees", userData)
      .then((response) => {
        // console.log(response.status);
        // console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Register or Create new account</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          User Name
          <input
            type="text"
            name="name"
            value={signIn.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="fname">
          First Name
          <input
            type="text"
            name="fname"
            value={signIn.fname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Last Name
          <input
            type="text"
            name="lname"
            value={signIn.lname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="job">
          Password
          <input
            type="text"
            name="pass"
            value={signIn.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignIn;

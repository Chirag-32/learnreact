import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [signIn, _signIn] = useState({
    id: "",
    uname: "",
    firstname: "",
    lastname: "",
    pass: "",
  });
  const navigate = useNavigate();
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
    setIsSubmitted(true);
  };
  const navigateRout = () => {
    setTimeout(() => {
      navigate("/add-task");
    }, 3000);
  };
  return (
    <div>
      <h1>Register or Create new account</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          User Name
          <input
            type="text"
            required
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
            required
            value={signIn.fname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Last Name
          <input
            type="text"
            name="lname"
            required
            value={signIn.lname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="job">
          Password
          <input
            type="text"
            name="pass"
            required
            value={signIn.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </Form>
      {isSubmitted ? (
        <>
          <div>
            <div>{signIn.first_name} is successfully logged in</div>
            {navigateRout()}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default SignIn;

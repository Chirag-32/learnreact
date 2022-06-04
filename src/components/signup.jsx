import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setformErrors] = useState({});
  const [signIn, _signIn] = useState({
    id: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    pass: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    _signIn({
      ...signIn,
      [e.target.name]: value,
    });
  };
  // const emailValidation = () => {
  //   const regex =
  //   /^[A-Za-z0-9]{3,}([A-Za-z0-9]{2,}[\w\.\{1}][A-Za-z0-9]{2,})*@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,}([A-Za-z0-9]{2,6}||[.]{1}[A-Za-z0-9]{2,6})$/i;
  //   return !(!signIn.email || regex.test(signIn.email) === false);
  // }

  const formValidations = async (values) => {
    // console.log(values, "1");
    delete formErrors[values];
    const error = {};
    const emailregex =
      /^[A-Za-z0-9]{3,}([A-Za-z0-9]{2,}[\w\.\{1}][A-Za-z0-9]{2,})*@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,}([A-Za-z0-9]{2,6}||[.]{1}[A-Za-z0-9]{2,6})$/i;
    if (values === "username" && !signIn.username) {
      // console.log("2");
      error.username = "Username is required";
    }
    if (values === "firstname" && !signIn.firstname) {
      // console.log("3");

      error.firstname = "firstname is required";
    }
    if (values === "lastname" && !signIn.lastname) {
      // console.log("4");
      error.lastname = "lastname is required";
    }
    if (values === "email" && !signIn.email) {
      // console.log("5");
      error.email = "email is required";
    } else if (values === "email" && !emailregex.test(signIn.email)) {
      // console.log("10", values);
      error.email = "Invalid email format";
    }
    if (values === "pass" && !signIn.pass) {
      error.pass = "pass is required";
    }

    let finalErr = {
      ...formErrors,
      ...error,
    };
    // console.log("15", finalErr, signIn);
    // console.log("16", { ...formErrors });
    // setformErrors(error);
    setformErrors({
      ...formErrors,
      ...error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setformErrors(formValidations(signIn));
    // if (Object.keys(formErrors).length === 0) {
    //   setIsSubmitted(true);
    // }

    const userData = {
      id: signIn.id,
      username: signIn.username,
      first_name: signIn.firstname,
      last_name: signIn.lastname,
      pass: signIn.pass,
      email: signIn.email,
    };
    console.log(Object.keys(formErrors).length);

    if (Object.keys(formErrors).length === 0) {
      console.log(signIn);
      console.log(userData);
      axios
        .post("http://localhost:3000/employees", userData)
        .then((response) => {
          // navigateRout();
          // console.log(response.status);
          // console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
    setIsSubmitted(true);
  };

  const navigateRout = () => {
    setTimeout(() => {
      navigate("/add-task");
    }, 3000);
  };
  return (
    <div className="form-section">
      <h1>Register or Create new account</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          User Name
          <input
            type="text"
            name="username"
            autoComplete="off"
            value={signIn.username}
            onChange={handleChange}
            onBlur={(e) => formValidations(e.target.name)}
          />
          <p className="submiterror">{formErrors.username}</p>
        </label>
        <label htmlFor="fname">
          First Name
          <input
            type="text"
            name="firstname"
            autoComplete="off"
            value={signIn.firstname}
            onChange={handleChange}
            onBlur={(e) => formValidations(e.target.name)}
          />
          <p className="submiterror">{formErrors.firstname}</p>
        </label>
        <label htmlFor="name">
          Last Name
          <input
            type="text"
            name="lastname"
            autoComplete="off"
            value={signIn.lastname}
            onChange={handleChange}
            onBlur={(e) => formValidations(e.target.name)}
          />
          <p className="submiterror">{formErrors.lastname}</p>
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={signIn.email}
            onChange={handleChange}
            onBlur={(e) => formValidations(e.target.name)}
          />
          <p className="submiterror">{formErrors.email}</p>
        </label>
        <label htmlFor="job">
          Password
          <input
            type="text"
            name="pass"
            autoComplete="off"
            value={signIn.pass}
            onChange={handleChange}
            onBlur={(e) => formValidations(e.target.name)}
          />
          <p className="submiterror">{formErrors.pass}</p>
        </label>
        <button type="submit">Register</button>
      </Form>
      {Object.keys(formErrors).length === 0 && isSubmitted ? (
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

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function LoginForm() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );
  const [usersData, _userData] = useState();
  console.log(usersData);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees`)
      .then((res) => {
        const userData = res.data;
        _userData(userData);
      })
      .catch((error) => console.log(error));
  }, []);

  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1",
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2",
  //   },
  // ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = usersData.find(
      (user) => user.username === uname.value || user.first_name === uname.value
    );
    // Compare user info
    if (userData) {
      if (userData.pass !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        _userData(userData.first_name + " " + userData.last_name);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <h1>Please Login to Continue</h1>
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? (
            <div>{usersData} is successfully logged in</div>
          ) : (
            renderForm
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

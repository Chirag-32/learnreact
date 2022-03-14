// import api from "../api/employees";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function LoginForm() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef();
  const passRef = useRef();
  // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );
  const [usersData, _userData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees`)
      .then((res) => {
        // console.log(res.status);
        // console.log(res.data);
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

  const handleLogin = (event) => {
    const inputData = inputRef.current.value;
    const passData = passRef.current.value;
    //Prevent page reload
    event.preventDefault();

    // Find user login info
    const userLoginData = usersData.find(
      (user) => user.username === inputData || user.first_name === inputData
    );
    // Compare user info
    if (userLoginData) {
      if (userLoginData.pass !== passData) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        _userData(userLoginData.first_name + " " + userLoginData.last_name);
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
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required ref={inputRef} />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required ref={passRef} />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
          {/* <Link to="/counters"></Link> */}
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <h1>Please Login to Continue</h1>
      <div className="app">
        <div className="login-form">
          <div className="title">Login In</div>
          {isSubmitted ? (
            <>
              <div>{usersData} is successfully logged in</div>
            </>
          ) : (
            renderForm
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

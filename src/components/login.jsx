// import api from "../api/employees";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {

  // console.log(props._userData);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  // const {_userData,usersData,setusername} = props;
  // const [usersData, _userData] = useState();
  const userlogin = () => {
    axios
      .get(`http://localhost:3000/employees`)
      .then((res) => {
      const userData = res.data;
      // console.log(userData)
        props._userData(userData);
      })
      .catch((error) => console.log(error));
  }
  

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  let inputData;
  let passData;
  const handleLogin = (event) => {
    
    inputData = inputRef.current.value;
    passData = passRef.current.value;
    //Prevent page reload
    event.preventDefault();
    // Find user login info
    const userLoginData = props.usersData.find(
      (user) => user.username === inputData || user.first_name === inputData
    );
    // Compare user info
    if (userLoginData) {
      if (userLoginData.pass !== passData) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        props._userData(userLoginData.first_name + " " + userLoginData.last_name);
        props.setusername(inputData)
        console.log(userLoginData)
        props._UserLogin(userLoginData)
        // setTimeout(() => {
        // }, 1000)
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  
  useEffect(() => {
    userlogin();
    
  }, []);
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  
  const renderForm = (
    <div className="form">
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" autoComplete="off" required ref={inputRef} />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" autoComplete="off" required ref={passRef} />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  const navigateRout = () => {
    setTimeout(() => {
      navigate("/add-task");
    }, 3000);
  };

  // const handleNavigate = () => {};
  return (
    <div>
      <h1>Please Login to Continue</h1>
      <div className="app">
        <div className="login-form">
          <div className="title">Login In</div>
          {isSubmitted ? (
            <>
              <div>
                {props.usersData} is successfully logged in... {navigateRout()}
              </div>
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

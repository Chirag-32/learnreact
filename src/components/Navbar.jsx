import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignIn from "./signup";
// import Timer from "./Timerjsx";
// import Counter from "./counter";
// import LoginForm from "./login";
// import Home from "./home";
import { Outlet, NavLink } from "react-router-dom";
function Navigation(props) {
  return (
    <>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">ReactLearning</NavbarBrand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="timer">
              Timer
            </NavLink>
            {props.username ? (
              <NavLink className="nav-link" to="">
                {props.username}
              </NavLink>
            ) : (
              false
            )}
            {props.username ? (
              false
            ) : (
              <>
                <NavLink className="nav-link" to="login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="signup">
                  SignUp
                </NavLink>
              </>
            )}
            <NavLink className="nav-link" to="add-task">
              Add Task
            </NavLink>
            <NavLink className="nav-link" to="contact">
              Add Contact
            </NavLink>
          </Nav>
        </div>
        <Outlet />
      </Navbar>

      {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />}>
              <Route index element={<Home />} />
              <Route path="counter" element={<Counter />} />
              <Route path="timer" element={<Timer />} />
              <Route path="signup" element={<SignIn />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
    </>
  );
}

export default Navigation;

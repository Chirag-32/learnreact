// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

import Navigation from "./components/Navbar";
import Timer from "./components/Timerjsx";
// import Navigation from "./components/login";
import SignIn from "./components/signup";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from "./components/counters";
import LoginForm from "./components/login";
import AddTask from "./components/to-do/addTask";
import Contact from "./components/Contacts/Contacts";
import SlickSlider from "./components/slickSlider";
import SignUp from "./components/SignupNew";
// import AddContact from "./components/Contacts/AddContact";
function App() {
  const [usersData, _userData] = useState();
  const [username, setusername] = useState();
  const [userLogin, _UserLogin] = useState();

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation username={username} />

        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route index element={<Home />} />
          <Route path="counter" element={<Counters />} />
          <Route path="timer" element={<Timer />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="login"
            element={
              <LoginForm
                setusername={setusername}
                usersData={usersData}
                _userData={_userData}
                _UserLogin={_UserLogin}
              />
            }
          />
          <Route path="add-task" element={<AddTask userLogin={userLogin} />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="slider" element={<SlickSlider />} />
          {/* </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

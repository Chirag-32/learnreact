import { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Navigation from "./components/Navbar";
import Timer from "./components/Timerjsx";
// import Navigation from "./components/login";
import SignIn from "./components/signup";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from "./components/counters";
import LoginForm from "./components/login";
import AddTask from "./components/to-do/addTask";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />

          <Routes>
            <Route path="/" element={<Navigation />} />
            <Route index element={<Home />} />
            <Route path="counter" element={<Counters />} />
            <Route path="timer" element={<Timer />} />
            <Route path="signup" element={<SignIn />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="add-task" element={<AddTask />} />
            {/* </Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

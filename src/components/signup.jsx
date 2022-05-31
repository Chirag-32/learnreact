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
    // console.log("taskid",signIn.id);
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
    <div className="form-section">
      <h1>Register or Create new account</h1>
      <hr />
      <div className="form-background"></div>
      <div className="form-content">
        <div className="form container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="bg-secondary shadow border-0 card">
                <div className="bg-white pb-5 card-header">
                  <div className="text-muted text-center mb-3">
                    <small>Sign up with</small>
                  </div>

                  <div className="text-center">
                    <a href="#pablo" className="btn-neutral btn-icon mr-4 btn btn-default">
                      <span className="btn-inner--icon mr-1">
                        <i class="fa-brands fa-github"></i>
                      </span>
                      {/* <span className="btn-inner--text">Github</span> */}
                    </a>
                    <a href="#pablo" className="btn-neutral btn-icon mr-4 btn btn-default">
                      <span className="btn-inner--icon mr-1">
                        <i class="fab fa-google"></i>
                      </span>
                      {/* <span className="btn-inner--text">Google</span> */}
                    </a>
                    <a href="#pablo" className="btn-neutral btn-icon mr-4 btn btn-default">
                      <span className="btn-inner--icon mr-1">
                        <i class="fab fa-facebook"></i>                      </span>
                      {/* <span className="btn-inner--text">Facebook</span> */}
                    </a>
                    <a href="#pablo" className="btn-neutral btn-icon mr-4 btn btn-default">
                      <span className="btn-inner--icon mr-1">
                        <i class="fa-brands fa-twitter"></i>
                      </span>
                      {/* <span className="btn-inner--text">Twitter</span> */}
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div class="text-center text-muted mb-4"><small>Or sign up with credentials</small></div>
                  <Form onSubmit={handleSubmit} className="text-center">
                    <div className="form-group">
                      <label htmlFor="name">
                        User Name</label>
                      <input
                        type="text"
                        required
                        name="name"
                        autoComplete="off"
                        value={signIn.name}
                        onChange={handleChange}
                      />
                    </div>
                    <label htmlFor="fname">
                      First Name</label>
                    <input
                      type="text"
                      name="fname"
                      required
                      autoComplete="off"
                      value={signIn.fname}
                      onChange={handleChange}
                    />

                    <label htmlFor="name">
                      Last Name</label>
                    <input
                      type="text"
                      name="lname"
                      required
                      autoComplete="off"
                      value={signIn.lname}
                      onChange={handleChange}
                    />

                    <label htmlFor="job">
                      Password</label>
                    <input
                      type="text"
                      name="pass"
                      required
                      autoComplete="off"
                      value={signIn.password}
                      onChange={handleChange}
                    />

                    <button type="submit">Register</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

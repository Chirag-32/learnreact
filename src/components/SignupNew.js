import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom";
import githubImage from '../images/github.svg';
import googleImg from '../images/google.png';
import facebookImg from '../images/facebook.png';
import linkedinImg from '../images/linkedin.png'

function SignUp() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [signIn, _signIn] = useState({
        id: "",
        uname: "",
        email: "",
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
            username: signIn.uname,
            email: signIn.email,
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
            <h1 className="text-center">Register or Create new account</h1>
            <hr />
            <div className="form-background"></div>
            <div className="form-content">
                <div className="form container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="bg-secondary shadow border-0 card">
                                <div className="bg-white pb-5 card-header">
                                    <div className="text-muted text-center mb-3">
                                        <small>Sign up with</small>
                                    </div>

                                    <div className="text-center logos">
                                        <a href="#pablo" className="btn-neutral btn-icon mr-4 btn btn-default">
                                            <img src={githubImage} alt="github logo" />
                                            {/* <span className="btn-inner--text">Github</span> */}
                                        </a>
                                        <a href="#pablo" className="btn-neutral btn-icon mr-4 btn btn-default">
                                            <img src={googleImg} alt="google logo" />
                                            {/* <span className="btn-inner--text">Google</span> */}
                                        </a>
                                        <a href="#pablo" className="btn-neutral btn-icon mr-4 btn btn-default">
                                            <img src={facebookImg} alt="facebook logo" />
                                            {/* <span className="btn-inner--text">Facebook</span> */}
                                        </a>
                                        <a href="#pablo" className="btn-neutral btn-icon mr-4 btn btn-default">
                                            <img src={linkedinImg} alt="linkedin logo" />
                                            {/* <span className="btn-inner--text">Twitter</span> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div class="text-center text-muted mb-4"><small>Or sign up with credentials</small></div>
                                    <Form onSubmit={handleSubmit} className="custom-form">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                User Name</label>
                                            <div className="input-group-alternative mb-3 input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    required
                                                    name="uname"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    value={signIn.uname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job">
                                                Email</label>
                                            <div className="input-group-alternative mb-3 input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="email"
                                                    required
                                                    placeholder="Email"
                                                    autoComplete="off"
                                                    value={signIn.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job">
                                                Password</label>
                                            <div className="input-group-alternative mb-3 input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="pass"
                                                    required
                                                    placeholder="Password"
                                                    autoComplete="off"
                                                    value={signIn.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="mt-4 btn btn-primary">SignUp Now!</button>
                                        </div>
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

export default SignUp;

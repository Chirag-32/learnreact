// import React from "react";
import axios from "axios";
import React, { useState } from "react";

function AddTask() {
  // const [task, settask] = useState({title: "",
  //     summary: "",});
  //   const [contacts, setContacts] = useState([]);
  // const addContactHandler = async (contact) => {
  //   console.log(contact);
  //   const request = {
  //   //   id: uuid(),
  //     ...task,
  //   };

  //   const response = await axios.post("http://localhost:3000/employees", request);
  //   console.log(response);
  //   settask([...task, response.data]);
  // };
  // const add = (e) => {
  //   e.preventDefault();
  //   if (task.title === "" || task.summary === "") {
  //     alert("ALl the fields are mandatory!");
  //     return;
  //   }
  //   addContactHandler(task);
  //   settask({ title: "", summary: "" });
  //   // task.history.push("/");
  // };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [task, _Task] = useState({
    id: "",
    title: "",
    summary: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    _Task({
      ...task,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userTask = {
      id: task.id,
      title: task.title,
      summary: task.summary,
    };
    axios
      .post("http://localhost:3000/tasks", userTask)
      // .then((response) => {

      // })
      .catch((error) => console.log(error));
    setIsSubmitted(true);
  };
  return (
    <div className="ui main">
      <h2>Add a New Task</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={task.title}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Title Summary</label>
          <input
            type="textarea"
            name="summary"
            placeholder="Summary"
            value={task.summary}
            onChange={handleChange}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
      {isSubmitted ? (
        <>
          <div>
            <div>{task.title} is successfully added</div>
            {/* <Navigate to="/add" /> */}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddTask;

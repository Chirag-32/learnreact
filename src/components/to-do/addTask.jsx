// import React from "react";
// import axios from "axios";
import axios from "axios";
import React, { useState } from "react";
function AddTask(props) {
  // console.log(props.userLogin.myTasks)
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
  const [title, settitle] = useState({
    title: "",
  });
  // console.log(task);
  const handleChange = (e) => {
    const { name, value } = e.target;
    _Task({
      ...task,
      [name]: value,
    });
    settitle({ title: task.title });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let idValue;

    // const rand = min + Math.random() * (max - min);
    if(props.userLogin.myTasks){
      idValue = props.userLogin.myTasks.length + 1;
    }
    const userTask = {
      id: parseInt(idValue),
      title: task.title,
      summary: task.summary,
    };
    // const usertask = [];
    if (props.userLogin) {
      // console.log("user login");
      // const a = props.userLogin.myTasks;
      if (!props.userLogin.myTasks) {
        // console.log("no avilable");
        props.userLogin.myTasks = [
          {
            id: 1,
            title: task.title,
            summary: task.summary,
          },
        ];
      } else {
        props.userLogin.myTasks.push(userTask);
      }

      //   a.push(userTask);
      //   console.log("not available");
      //  myTasks.push(props.userLogin);
      //  console.log(myTasks);
      //  a.push(userTask)
      //  console.log(a);

      // usertask.push(a);

      // console.log(props.userLogin.myTasks);
      let body = {
        myTasks: props.userLogin.myTasks,
        
      };
      let userid = props.userLogin.id;
      fetch(`http://localhost:3000/employees/${userid}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log(response.data);
      });
    } else {
      axios.post("http://localhost:3000/tasks", userTask);
    }
    // axios
    //   .post(`http://localhost:3000/employees?id=${id}`, body)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => console.log(error));
    // axios.post("http://localhost:3000/employees?username=jane11", {
    //   firstName: 'Fred',
    //   lastName: 'Flintstonsssse'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // task.summary
    // settitle({title:task.title});
    setIsSubmitted(true);
    _Task({ title: "", summary: "" });
    console.log(title);
  };
  return (
    <div className="ui main">
      <h2>Add a New Task</h2>
      {/* <h2>{props.userLogin.username ? props.userLogin.username: false}</h2> */}
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoComplete="off"
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
            autoComplete="off"
            value={task.summary}
            onChange={handleChange}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
      {isSubmitted ? (
        <>
          <div>
            <div>[{title.title}] is successfully added</div>
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

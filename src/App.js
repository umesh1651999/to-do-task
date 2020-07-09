import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { AddEntry } from "./Components/AddEntry/AddEntry";
import { SignUp } from "./Components/SignUp/SignUp";
import { Login } from "./Components/Login/Login";
import { AddBtn } from "./Components/AddBtn/AddBtn";
import { Tasks } from "./Components/Tasks/Tasks";
import { Spring, interpolate } from "react-spring/renderprops";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import { Success } from "./Components/Success/Success";
import { useToasts } from "react-toast-notifications";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [showAddBtn, setShowAddBtn] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [priority, setPriority] = useState(false);
  const [login, setLogin] = useState();
  const [sortBy, setSortBy] = useState("");
  // const [error, setError] = useState("");
  // const [token, setToken] = useState("");
  const { addToast } = useToasts();

  const removeAddComponent = () => {
    setShowAddComponent(false);
    setShowAddBtn(true);
    console.log("njjnn");
    setCounter(counter + 1);
  };
  const changeLoginstatusToTrue = () => {
    setLogin(true);
  };
  const changeLoginstatusToFalse = () => {
    setLogin(false);
  };
  const addComponent = () => {
    setShowAddComponent(true);
    setShowAddBtn(false);
    console.log(tasks);
  };
  const setSortByValue = (e) => {
    setSortBy(e.target.value);
    console.log(e.target.value);
  };
  const addNewEntry = (title, data, priority) => {
    console.log("hey");
    console.log(localStorage.getItem("token"));
    axios
      .post("http://localhost:5000/addTask", null, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        params: {
          title,
          data,
          priority,
          userId: localStorage.getItem("id"),
        },
      })
      .then((res) => {
        console.log(res);
        removeAddComponent();
        getAllTasks();
        addToast("Task added", {
          appearance: "success",
          autoDismiss: true,
          placement: "bottom-left",
        });
      })
      .catch((err) => console.log(err));
    console.log("data added");
  };
  const getAllTasks = () => {
    console.log(localStorage.getItem("token"));
    axios
      .post("http://localhost:5000/getAllTasks", null, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        params: {
          userId: localStorage.getItem("id"),
        },
      })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log(res.message);
        console.log(sortBy);
        if (res.message != "login again") {
          console.log("nbjnn");
          if (sortBy === "priority" && typeof res !== typeof " ") {
            const newTasks = [];
            res.map((entry) => {
              if (entry.priority === "HIGH") {
                newTasks.push(entry);
              }
            });
            res.map((entry) => {
              if (entry.priority === "LOW") {
                newTasks.push(entry);
              }
            });
            setTasks(newTasks);
          } else {
            setTasks(res);
          }
        } else {
          localStorage.clear();
          setLogin(false);
        }
      })
      .catch((err) => console.log(err));
  };
  const removeTask = (id) => {
    axios
      .post("http://localhost:5000/deleteTask", null, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        params: {
          id: id,
        },
      })
      .then((res) => {
        console.log(res);
        getAllTasks();
        addToast("Task deleted successfully", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllTasks();
  }, [sortBy]);
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact>
          <Login loginStatus={changeLoginstatusToTrue} />
        </Route>
        <Route path="/" exact>
          <Login loginStatus={changeLoginstatusToTrue} />
        </Route>
        <Route path="/signup" exact component={SignUp}></Route>
        {localStorage.getItem("token") ? (
          <Route path="/tasks" exact>
            <Header loginStatus={changeLoginstatusToFalse} />
            <Tasks
              tasks={tasks}
              removeTask={removeTask}
              setSortByValue={setSortByValue}
            />
            {showAddComponent ? (
              <Spring
                from={{ opacity: 0, marginBottom: -100 }}
                to={{ opacity: 1, marginBottom: 0 }}
              >
                {(props) => (
                  <div style={props}>
                    <AddEntry
                      removeAddComponent={removeAddComponent}
                      addNewEntry={addNewEntry}
                      get={getAllTasks}
                    />
                  </div>
                )}
              </Spring>
            ) : null}
            {showAddBtn ? <AddBtn add={addComponent} /> : null}
          </Route>
        ) : (
          <Route path="/tasks" exact>
            <Login loginStatus={changeLoginstatusToTrue} />
          </Route>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

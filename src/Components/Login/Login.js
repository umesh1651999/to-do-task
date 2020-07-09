import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, Redirect, useHistory } from "react-router-dom";

export const Login = ({ loginStatus }) => {
  // Declaring the state of usernama and password.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginError, setLoginError] = useState("");
  // This function will hit the API when login button is clicked.
  // And it will check if it is a valid user or not
  // let error = "";
  const clicked = () => {
    axios
      .post("http://localhost:5000/login", null, {
        params: {
          email,
          password,
        },
      })
      .then(function (res) {
        console.log(res);
        if (!res.data.token) {
          alert("Please Enter Correct Email and Password.");
        } else {
          loginStatus();
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.name);
          localStorage.setItem("id", res.data.id);
        }
      })
      .catch(function (err) {
        alert("Login error");
        console.log(err);
      });
  };
  return (
    <section className="wrappers">
      <form className="outerPart">
        <h2 className="loginHead">STARTECH</h2>
        <input
          className="inputs"
          type="input"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="inputs"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {localStorage.getItem("token") ? <Redirect to="/tasks" /> : null}
        <section>
          <button className="button buttoninput" onClick={clicked}>
            Login
          </button>
          or{" "}
          <Link to="/signup">
            <button className="btn2"> Signup </button>
          </Link>{" "}
          Instead?
        </section>
      </form>
    </section>
  );
};

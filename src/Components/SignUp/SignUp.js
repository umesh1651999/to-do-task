import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
// This is signUp component which is used to signup in the website.
export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //   const [designation, setDesignation] = useState("");
  //   const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [signInStatus, setSignInStatus] = useState();
  //   const [signupError, setSignupError] = useState() ;

  // This function will hit an API which will signup the user by stroring the data into the db.
  const clicked = () => {
    if (password !== confirmPassword) {
      alert("Password doesn't match");
    } else {
      axios
        .post("http://localhost:5000/signup", null, {
          params: {
            name,
            email,
            password,
            confirmPassword,
            contact,
          },
        })
        .then(function (res) {
          setSignInStatus(true);
          alert("new user added");
        })
        .catch(function (err) {
          setSignInStatus(false);
          console.log(err);
          alert("Problem while signing up...try again later");
        });
    }
  };
  return (
    <section className="mainSignUpContainer">
      <section className="wrapperSignup">
        <form className="SignUpOuterPart">
          <h2 className="loginHead">STARTECH</h2>
          <input
            className="SignUpinputs"
            type="input"
            placeholder="Full Name"
            name="fullName"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            className="SignUpinputs"
            type="input"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            className="SignUpinputs"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <input
            className="SignUpinputs"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
          <input
            className="SignUpinputs"
            type="text"
            placeholder="Contact No."
            name="contact"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            required
          />
          <section>
            <Link to="/login">
              <button className="buttoninput" onClick={clicked}>
                Submit
              </button>
            </Link>
            or{" "}
            <Link to="/login">
              <button className="btn2"> Login </button>
            </Link>{" "}
            Instead?
          </section>
        </form>
      </section>
    </section>
  );
};

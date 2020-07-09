import React from "react";
import "./Header.css";
import { useHistory, Redirect, Link } from "react-router-dom";

export const Header = ({ loginStatus }) => {
  const logout = () => {
    localStorage.clear();
    loginStatus();
  };
  return (
    <section className="header">
      <section>
        <h1 className="headerText">To Do Work</h1>
      </section>
      {localStorage.getItem("token") ? (
        <section className="profileDiv">
          <div className="profile"></div>
          <section className="name">{localStorage.getItem("username")}</section>
          <section className="logout" onClick={logout}>
            Logout
          </section>
        </section>
      ) : (
        <section className="genToken">
          <section className="login">Login</section>
          <section className="signup">SignUp</section>
        </section>
      )}
    </section>
  );
};

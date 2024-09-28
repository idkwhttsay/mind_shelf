import React from "react";
import "../scss/login.scss";
import GoogleButton from "react-google-button";
import nav_wave from "../imgs/nav_wave.svg";
import bottom_wave from "../imgs/bottom_wave.svg";

export function Login() {
  return (
    <>
      <img className="nav-wave" src={nav_wave} />
      <div className="login-container">
        <div className="login-header">
          Sign in with email to start reading..
        </div>
        <div>
          <form className="login-form">
            <label>Email:</label>
            <input placeholder="email@example.com" />
            <label>Password:</label>
            <input type="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

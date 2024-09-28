import React from "react";
import "../scss/login.scss";
import GoogleButton from "react-google-button";
import nav_wave from "../imgs/nav_wave.svg";
import bottom_wave from "../imgs/bottom_wave.svg";

export function Login() {
  return (
    <>
      <img src={nav_wave} />
      <div className="login-container">
        <div className="login-header">
          Sign in with Google to start reading..
        </div>
        <div className="google-login">
          <GoogleButton />
        </div>
      </div>
    </>
  );
}

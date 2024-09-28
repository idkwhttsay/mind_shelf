import React, { useState } from "react";
import "../scss/login.scss";
import GoogleButton from "react-google-button";
import nav_wave from "../imgs/nav_wave.svg";
import bottom_wave from "../imgs/bottom_wave.svg";
import { LoginPopup } from "./loginPopup";

export function Login() {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {}

  return (
    <>
      {/*<img className="nav-wave" src={nav_wave} />*/}
      <div className="login-container">
        <div className="login-header">
          Sign in with Email to start reading...
        </div>
        <div>
          <button onClick={() => setClicked(true)} className="login-btn">
            Login here
          </button>
        </div>
      </div>
      {clicked && <LoginPopup setClicked={setClicked} />}
    </>
  );
}

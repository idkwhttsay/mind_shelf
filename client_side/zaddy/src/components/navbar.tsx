import "../scss/navbar.scss";
import "@fontsource/roboto";
import logo from "../imgs/logo.png";
import React from "react";

export function Navbar(props: { loggedIn: boolean }) {
  function logout(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.localStorage.clear();
    window.location.replace("/");
  }

  return (
    <>
      <div className="nav-box">
        <img
          width={150}
          src={logo}
          className="nav-title"
          onClick={() => window.location.replace("/")}
        />
        {props.loggedIn && (
          <a onClick={logout} className="log-out">
            Log out
          </a>
        )}
      </div>
    </>
  );
}

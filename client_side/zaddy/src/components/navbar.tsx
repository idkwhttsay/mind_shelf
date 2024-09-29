import "../scss/navbar.scss";
import "@fontsource/roboto";
import logo from "../imgs/logo.png";

export function Navbar(props: { loggedIn: boolean }) {
  return (
    <>
      <div className="nav-box">
        <img width={150} src={logo} className="nav-title" />
        {props.loggedIn && (
          <a href="/" className="log-out">
            Log out
          </a>
        )}
      </div>
    </>
  );
}

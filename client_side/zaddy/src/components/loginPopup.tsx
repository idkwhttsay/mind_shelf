import { useState } from "react";
import axios from "axios";
import sha256 from "crypto-js/sha256";

interface Error {
  message: string;
}

export function LoginPopup(props: { setClicked: (clicked: boolean) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");
  const [registering, setRegistering] = useState(false);
  const [error, setError] = useState("");

  async function login() {
    const result = await axios.post("https://mind-shelf.co:3012/user/login", {
      email: email,
      password: hash,
    });

    if (result.status === 200) {
      window.location.replace("/home");
      window.localStorage.setItem("email", email);
    }
    setError(result.data.message);
  }

  async function register_fxn() {
    const result = await axios.post(
      "https://mind-shelf.co:3012/user/register",
      {
        email: email,
        password: hash,
      },
    );

    if (result.status === 200) {
      window.location.replace("/home");
      window.localStorage.setItem("email", email);
    }
    setError(result.data.message);
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    registering ? register_fxn() : login();
  }

  return (
    <>
      <div className="dark" onClick={() => props.setClicked(false)} />
      <div className="popup-box">
        <h2>{!registering ? "Login" : "Register"} with your mind shelf ID</h2>
        <form onSubmit={submit} className="popup-form">
          <input
            type="email"
            value={email}
            placeholder="Email"
            required
            onChange={(input) => setEmail(input.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            minLength={5}
            maxLength={50}
            required
            onChange={(input) => {
              setHash(sha256(sha256(input.target.value).toString()).toString());
              setPassword(input.target.value);
            }}
          />
          {(error.length && <div className="error">{error}</div>) || <></>}
          <button type="submit">{registering ? "Register" : "Login"}</button>
        </form>
        <div
          className="register-text"
          onClick={() => setRegistering(!registering)}
        >
          {!registering
            ? "Don't have an account? Register here"
            : "Already have an account? Login"}
        </div>
      </div>
    </>
  );
}

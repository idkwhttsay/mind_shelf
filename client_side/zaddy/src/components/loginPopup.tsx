import { useState } from "react";
import axios from "axios";

export function LoginPopup(props: { setClicked: (clicked: boolean) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const result = await axios.post("http://localhost:3012/user/login", {
      email: email,
      password: password,
    });

    if (result.status === 200) {
      window.location.replace("/home");
    }
  }
  return (
    <>
      <div className="dark" onClick={() => props.setClicked(false)} />
      <div className="popup-box">
        <h2>Login with your mind shelf ID</h2>
        <form className="popup-form">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(input) => setEmail(input.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(input) => setPassword(input.target.value)}
          />
          <button type="button" onClick={login}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

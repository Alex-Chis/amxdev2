import { credentials } from "./credentials";
import { useState } from "react";
import "./login.css";

export default function Login({ onLogin, handlePageChange }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginResult = credentials(username, password);
    if (loginResult) {
      onLogin();
      handlePageChange("projectList");
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Please enter your login and password</p>
      <input
        onChange={(event) => setUsername(event.target.value)}
        id="username"
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        id="password"
        type="password"
        placeholder="Password"
        value={password}
      />
      <a href="#">Forgot password?</a>
      <button onClick={handleSubmit} id="login" type="button">
        Login
      </button>
    </div>
  );
}

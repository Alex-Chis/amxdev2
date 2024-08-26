import "./signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p>Please enter your credentials</p>
      <input id="email" type="email" placeholder="Email" />
      <input id="username" type="text" placeholder="Username" />
      <input id="password" type="password" placeholder="Password" />
      <button id="signup" type="button">
        Sign Up
      </button>
    </div>
  );
}

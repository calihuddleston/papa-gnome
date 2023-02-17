import React from "react";
import papaGnome from "../assets/papaGnome.png";

const Login = () => {
  return (
    <section id="login-section">
      <div id="login">
        <div className="flex justify-center">
          <img src={papaGnome} className="h-40 w-40 m-10 gnomeface"></img>
        </div>
        <h2 id="login-title">Please Login</h2>
        <form id="login-form">
          <div id="credentials">
            <input type="email" placeholder="Email" id="email"></input>
            <input type="password" placeholder="Password" id="pass"></input>
          </div>
          <button id="login-button">Login</button>
        </form>
        <p id="signup-prompt">
          Not a user already?{" "}
          <a href="#signup">
            <span id="signup-link">Sign Up Here</span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;

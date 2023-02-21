import React from "react";
import papaGnome from "../assets/papaGnome.png";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  return (
    <section id="login-section">
      <div id="signup">
        <div className="flex justify-center">
          <img src={papaGnome} className="h-40 w-40 m-10 gnomeface"></img>
        </div>
        <h2 id="login-title">Create Your Account</h2>
        <form id="login-form">
          <div id="credentials">
            <input
              type="first-name"
              placeholder="First Name"
              id="email"
            ></input>
            <input type="last-name" placeholder="Last Name" id="email"></input>
            <input type="email" placeholder="Email" id="email"></input>
            <input type="password" placeholder="Password" id="pass"></input>
          </div>
          <button id="login-button">Sign Up</button>
        </form>
        <p id="signup-prompt">
          Already a user?{" "}
          <span id="signup-link">
            <Link to="/" element={<Login />}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Signup;

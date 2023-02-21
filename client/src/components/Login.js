import React, { useState, useEffect } from "react";
import papaGnome from "../assets/papaGnome.png";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  return (
    <section id="login-section" className="p-8">
      <div id="login">
        <div className="flex justify-center">
          <img src={papaGnome} className="h-40 w-40 m-6 gnomeface"></img>
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
          <span id="signup-link">
            <Link to="/signup" element={<Signup />}>
              Sign Up
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;

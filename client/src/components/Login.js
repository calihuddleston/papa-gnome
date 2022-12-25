import React from "react";

const Login = () => {
  return (
    <div id="login">
      <h2 id="login-title">Login</h2>
      <form id="login-form">
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

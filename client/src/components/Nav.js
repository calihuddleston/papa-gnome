import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex flex-row justify-between text-[42px] bg-red-600 text-white">
      <h1 className="m-3">Papa Gnome</h1>

      <div className="mx-8 m-3">
        <nav>
          <a href="https://github.com/calihuddleston">GitHub</a>

          <a href="https://www.linkedin.com/in/cali-huddleston-3362a5235/">
            LinkedIn
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import { Icon } from "@iconify/react";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Signup from "./Signup";

const Header = () => {
  return (
    <div>
      <div id="nav-section">
        <h4 id="papa-header">Papa Gnome Delivers</h4>

        <nav id="nav-bar">
          <a href="/" className="page-links">
            <Icon
              icon="game-icons:mushroom-house"
              style={{ fontSize: "30px" }}
            />
          </a>
          <a href="#stores" className="page-links">
            <Icon icon="bx:store" style={{ fontSize: "30px" }} />
          </a>
          <a href="#book-me" className="page-links">
            <Icon icon="mdi:calendar-cursor" style={{ fontSize: "30px" }} />
          </a>
          <a href="#cart" className="page-links">
            <Icon icon="tabler:garden-cart" style={{ fontSize: "30px" }} />
          </a>
          <a href="#user-profile" className="page-links">
            <Icon icon="mdi:user-circle-outline" style={{ fontSize: "30px" }} />
          </a>
        </nav>
      </div>

      <header></header>
    </div>
  );
};

export default Header;

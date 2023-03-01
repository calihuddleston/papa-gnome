import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Stores from "./Stores";
import Calendar from "./Calendar"

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
          <Link to="/storefront" element={<Stores />} className="page-links">
            <Icon icon="bx:store" style={{ fontSize: "30px" }} />
          </Link>
          <Link to="/bookme" element={<Calendar />} className="page-links">
            <Icon icon="mdi:calendar-cursor" style={{ fontSize: "30px" }} />
          </Link>
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

import React from "react";
import Menu from "../Menu/Menu";

import { FiMenu } from "react-icons/fi";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <span className="navbar__logo icon">Logo</span>
        <span className="navbar__menu-icon icon">
          <FiMenu />
        </span>
      </nav>

      <Menu />
    </>
  );
}

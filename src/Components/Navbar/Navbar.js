import React from "react";
import Menu from "../Menu/Menu";

import { FiMenu } from "react-icons/fi";

import "./Navbar.css";

export default function Navbar({toggleOpen, open}) {
  return (
    <>
      <nav className="navbar">
        <span className="navbar__logo icon">Logo</span>
        <span className="navbar__menu-icon icon">
          <FiMenu className="navbar__menu-icon__lines" onClick={toggleOpen} />
        </span>
        <Menu toggleOpen={toggleOpen} open={open} />
      </nav>
    </>
  );
}

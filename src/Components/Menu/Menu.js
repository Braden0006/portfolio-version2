import React from "react";

import { AiOutlineClose } from "react-icons/ai";

import "./Menu.css";

export default function Menu() {
  return (
    <>
      <div className="menu-background">
        <span className="menu__icon-container">
          <AiOutlineClose className="menu__icon-container__icon" />
        </span>
        <div className="menu__container">
          <ul className="menu__list">
            <li className="menu__list-item">About</li>
            <li className="menu__list-item">Skills</li>
            <li className="menu__list-item">Projects</li>
            <li className="menu__list-item">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

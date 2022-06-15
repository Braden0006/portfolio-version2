import React from "react";

import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills__title-container">
        <h2 className="skills__title-container__title">Skills</h2>
      </div>
      <div className="skills__grid">
        <img className="skills__grid-icon" src="Images/html-5.png" alt="" />
        <img className="skills__grid-icon" src="Images/css-3.png" alt="" />
        <img className="skills__grid-icon" src="Images/sass.png" alt="" />
        <img className="skills__grid-icon" src="Images/js.png" alt="" />
        <img className="skills__grid-icon" src="Images/atom.png" alt="" />
        <img className="skills__grid-icon" src="Images/terminal.png" alt="" />
        <img className="skills__grid-icon" src="Images/github.png" alt="" />
      </div>
    </div>
  );
}

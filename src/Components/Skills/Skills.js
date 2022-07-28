import React from "react";

import SkillsCardOne from "../SkillsCardOne/SkillsCardOne";
import SkillsCardTwo from "../SkillsCardTwo/SkillsCardTwo";

import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills__title-container">
        <h2 className="skills__title-container__title">Skills</h2>
        <hr />
      </div>

      <SkillsCardOne />
      <SkillsCardTwo />
    </div>
  );
}

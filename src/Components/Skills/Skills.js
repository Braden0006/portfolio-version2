import React from "react";
import { motion } from "framer-motion";

import SkillsCardOne from "../SkillsCardOne/SkillsCardOne";
import SkillsCardTwo from "../SkillsCardTwo/SkillsCardTwo";

import "./Skills.css";

export default function Skills() {
  const variants = {
    offscreen: {
      y: 200,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
        delay: 0.2
      },
    },
  };

  return (
    <div className="skills" id="skills">
      <div className="skills__title-container">
        <h2 className="skills__title-container__title">Skills</h2>
        <hr className="skills__title-container__line" />
      </div>

      <motion.div
        className="skills__cards"
        initial="offscreen"
        whileInView="onscreen"
        variants={variants}
      >
        <SkillsCardOne />
        <SkillsCardTwo />
      </motion.div>
    </div>
  );
}

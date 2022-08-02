import React from "react";
import { motion } from "framer-motion";

import SkillsCardOne from "../SkillsCardOne/SkillsCardOne";
import SkillsCardTwo from "../SkillsCardTwo/SkillsCardTwo";

import "./Skills.css";

export default function Skills() {
  const variants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
        delay: 0.2,
      },
    },
  };

  const titleVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="skills" id="skills">
      <div className="skills__title-container">
        <motion.h2
          className="skills__title-container__title"
          initial='offscreen'
          whileInView='onscreen'
          variants={titleVariants}
        >
          Skills
        </motion.h2>
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

import React from "react";
import { motion } from "framer-motion";

import { SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BsFillTerminalFill } from "react-icons/bs";
import { DiSass } from "react-icons/di";

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
          initial="offscreen"
          whileInView="onscreen"
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
        <div className="skills__cards__card">
          <span className="skills__cards__card__title">HTML</span>
          <AiFillHtml5 className="skills__cards__card__html" />
        </div>
        <div className="skills__cards__card">
          <span className="skills__cards__card__title">CSS</span>
          <DiCss3 className="skills__cards__card__css" />
        </div>
        <div className="skills__cards__card">
          <span className="skills__cards__card__title">Sass</span>
          <DiSass className="skills__cards__card__sass" />
        </div>
        <div className="skills__cards__card">
          <span className="skills__cards__card__title">Tailwind</span>{" "}
          <SiTailwindcss className="skills__cards__card__tailwind" />
        </div>
        <div className="skills__cards__card">
          <span className="skills__cards__card__title">Javascript</span>
          <SiJavascript className="skills__cards__card__javascript" />
        </div>
        <div className="skills__cards__card">
          <span className="skills__cards__card__title">React</span>
          <FaReact className="skills__cards__card__react" />
        </div>
        <div className="skills__cards__card">
          <span className="skills__cards__card__title">Git</span>
          <BiGitBranch className="skills__cards__card__git" />
        </div>
        <div className="skills__cards__card">
          <span className="skills__cards__card__title">Github</span>
          <AiFillGithub className="skills__cards__card__github" />
        </div>
        <div className="skills__cards__card">
          <span className="skills__cards__card__title">Terminal</span>
          <BsFillTerminalFill className="skills__cards__card__terminal" />
        </div>
      </motion.div>
    </div>
  );
}

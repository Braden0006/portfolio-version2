import React from "react";

import { motion } from "framer-motion";

import "./About.css";

export default function About() {
  const variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="about"
      id="about"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      <div className="about__title-container">
        <h2 className="about__title">About me</h2>
        <span>
          <hr />
        </span>
      </div>
      <div className="about__info-container">
        <p className="about__info-container__description">
          I'm an aspiring Front End Developer and have been studying HTML, CSS,
          Javascript, and React for the past year and a half
        </p>
        <p className="about__info-container__description">
          I have been interested in tech for most of my life and am excited to
          continue learning and growing with it
        </p>
      </div>
    </motion.div>
  );
}

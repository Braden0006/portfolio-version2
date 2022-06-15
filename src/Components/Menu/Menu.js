import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { AiOutlineClose } from "react-icons/ai";

import "./Menu.css";

export default function Menu({ toggleOpen, open }) {
  // Object for the transition and animations of the list tag
  const variants = {
    hidden: {
      y: -1000,
    },
    show: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
        type: "tween",
      },
    },
  };

  // Object for the transition and animations of the list item
  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <motion.div
        className="menu-background"
        variants={variants}
        initial="hidden"
        animate={open ? "show" : "hidden"}
      >
        <span className="menu__icon-container">
          <AiOutlineClose
            className="menu__icon-container__icon"
            onClick={toggleOpen}
          />
        </span>
        <div className="menu__container">
          <ul className="menu__list">
            <motion.li variants={item} className="menu__list__item">
              <HashLink
                className="menu__list__item__link"
                to="#about"
                smooth="true"
                onClick={toggleOpen}
              >
                About
              </HashLink>
            </motion.li>
            <motion.li variants={item} className="menu__list__item">
              <HashLink
                className="menu__list__item__link"
                to="#skills"
                smooth="true"
                onClick={toggleOpen}
              >
                Skills
              </HashLink>
            </motion.li>
            <motion.li variants={item} className="menu__list__item">
              <HashLink
                className="menu__list__item__link"
                to="#projects"
                smooth="true"
                onClick={toggleOpen}
              >
                Projects
              </HashLink>
            </motion.li>
            <motion.li variants={item} className="menu__list__item">
              <Link
                className="menu__list__item__link"
                to="/contact"
                smooth="true"
                onClick={toggleOpen}
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}

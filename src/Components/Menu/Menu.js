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
          <motion.ul className="menu__list">
            <HashLink className="menu__list-item__link" to="#about" smooth>
              <motion.li variants={item} className="menu__list-item">
                About
              </motion.li>
            </HashLink>
            <HashLink className="menu__list-item__link" to="#skills">
              <motion.li variants={item} className="menu__list-item">
                Skills
              </motion.li>
            </HashLink>
            <HashLink className="menu__list-item__link" to="#projects">
              <motion.li variants={item} className="menu__list-item">
                Projects
              </motion.li>
            </HashLink>
            <Link className="menu__list-item__link" to="/contact">
              <motion.li variants={item} className="menu__list-item">
                Contact
              </motion.li>
            </Link>
          </motion.ul>
        </div>
      </motion.div>
    </>
  );
}

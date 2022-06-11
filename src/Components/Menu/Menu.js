import React from "react";
import { motion } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";

import "./Menu.css";

export default function Menu({ toggleOpen, open }) {
  return (
    <>
      <motion.div
        className="menu-background"
        initial={{ y: -1000 }}
        animate={{ y: open ? 0 : -1000 }}
        transition={{type: "tween"}}
      >
        <span className="menu__icon-container">
          <AiOutlineClose
            className="menu__icon-container__icon"
            onClick={toggleOpen}
          />
        </span>
        <div className="menu__container">
          <ul className="menu__list">
            <li className="menu__list-item">About</li>
            <li className="menu__list-item">Skills</li>
            <li className="menu__list-item">Projects</li>
            <li className="menu__list-item">Contact</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}

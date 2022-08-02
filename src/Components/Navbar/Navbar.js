import React from "react";
import { motion } from "framer-motion";

import { FiMenu } from "react-icons/fi";

import Menu from "../Menu/Menu";

import "./Navbar.css";

export default function Navbar({ toggleOpen, open }) {
  const variant = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial="closed"
        whileInView="open"
        variants={variant}
      >
        <span className="navbar__logo icon">BW</span>
        <span className="navbar__menu-icon icon">
          <FiMenu className="navbar__menu-icon__lines" onClick={toggleOpen} />
        </span>
        <Menu toggleOpen={toggleOpen} open={open} />
      </motion.nav>
    </>
  );
}

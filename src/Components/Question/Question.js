import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Question.css";

export default function Question() {
  return (
    <div className="question">
      <h2 className="question__title">Need something built?</h2>
      <Link className="question__button-link" to="/contact">
        <motion.button
          className="question__button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Lets chat
        </motion.button>
      </Link>
    </div>
  );
}

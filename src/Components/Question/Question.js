import React from "react";
import { Link } from "react-router-dom";

import "./Question.css";

export default function Question() {
  return (
    <div className="question">
      <h2 className="question__title">Need something built?</h2>
      <Link className="question__button-link" to="/contact">
        <button className="question__button">Lets chat</button>
      </Link>
    </div>
  );
}

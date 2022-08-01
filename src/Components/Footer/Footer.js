import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
          <span className="footer__logo">BW</span>
          <div className="footer__social">
            <FaGithubSquare className="footer__social__icon" />
            <FaLinkedin className="footer__social__icon" />
          </div>
      </div>
    </div>
  );
}

import React from "react";
import { HashLink } from "react-router-hash-link";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <span className="footer__logo">
          <HashLink className="footer__logo__link" to="#home" smooth="true">
            BW
          </HashLink>
        </span>
        <div className="footer__social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Braden0006"
          >
            <FaGithubSquare className="footer__social__icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/braden-whitcher-814b23212/"
          >
            <FaLinkedin className="footer__social__icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

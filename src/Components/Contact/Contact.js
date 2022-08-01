import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__form-container">
        <form className="contact__form" action="">
          <input
            className="contact__form-input"
            type="text"
            placeholder="Name"
          />
          <input
            className="contact__form-input"
            type="email"
            placeholder="Email"
          />
          <input
            className="contact__form-input"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="contact__form-message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <input className="contact__form-submit" type="submit" />
        </form>
      </div>
      <span className="contact__icon-container">
        <FaGithubSquare className="contact__icon" />
        <FaLinkedin className="contact__icon" />
      </span>
    </div>
  );
}

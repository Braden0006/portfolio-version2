import React from "react";

import "./Project.css";

export default function Project() {
  return (
    <div className="project" id="projects">
      <div className="project__title-container">
        <h2 className="project__title-container__title">Projects</h2>
      </div>
      <div className="project__grid">
        <div className="project__grid__beer">
          <h3 className="project__grid__beer-title">Beer Company Website</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://braden0006.github.io/beer-company-website/"
          >
            <img
              className="project__grid__beer-image"
              src="Images/beer-company.png"
              alt="A picture of a homepage of a beer company website"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Braden0006/beer-company-website"
          >
            <button className="project__grid__beer-code">See Live Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

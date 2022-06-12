import React from "react";

import "./Project.css";

export default function Project() {
  return (
    <div className="project" id="projects">
      <h2 className="project__title">Projects</h2>
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
              alt=""
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

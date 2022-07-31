import React from "react";

import "../ProjectVariable/ProjectVariable.css";

export default function Project() {
  return (
    <div className="project" id="projects">
      <div className="project__title-container">
        <h2 className="project__title-container__title">Projects</h2>
        <hr className="project__title-container__line" />
      </div>
      <div className="project__grid">
        <div className="project__grid__site">
          <img
            className="project__grid__site__image"
            src="Images/beer-company.png"
            alt="The homepage of a beer company website"
          />

          <div className="project__grid__site__overlay">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://braden0006.github.io/beer-company-website/"
            >
              <h3 className="project__grid__site__overlay__title">
                Beer Company
              </h3>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Braden0006/beer-company-website"
            >
              <button className="project__grid__site__overlay__code">
                See Live Code
              </button>
            </a>
          </div>
        </div>

        <div className="project__grid__site">
          <img
            className="project__grid__site__image"
            src="Images/space-website.png"
            alt="The homepage of a space tourism website"
          />

          <div className="project__grid__site__overlay">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://braden0006.github.io/space-tourism-website/"
            >
              <h3 className="project__grid__site__overlay__title">
                Space Tourism
              </h3>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Braden0006/space-tourism-website"
            >
              <button className="project__grid__site__overlay__code">
                See Live Code
              </button>
            </a>
          </div>
        </div>

        <div className="project__grid__site">
          <img
            className="project__grid__site__image"
            src="Images/coffee-roasters.png"
            alt="The homepage of a space tourism website"
          />

          <div className="project__grid__site__overlay">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://braden0006.github.io/coffeeroasters-subscription-site/"
            >
              <h3 className="project__grid__site__overlay__title">
                Coffee Roasters
              </h3>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Braden0006/coffeeroasters-subscription-site"
            >
              <button className="project__grid__site__overlay__code">
                See Live Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

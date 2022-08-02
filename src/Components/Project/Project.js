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
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
              Images/beer-company_sjf9op_c_scale,w_190.png 190w,
              Images/beer-company_sjf9op_c_scale,w_638.png 638w,
              Images/beer-company_sjf9op_c_scale,w_930.png 930w,
              Images/beer-company_sjf9op_c_scale,w_1190.png 1190w,
              Images/beer-company_sjf9op_c_scale,w_1400.png 1400w"
            src="Images/beer-company_sjf9op_c_scale,w_1400.png"
            alt="the home page of a beer company website"
          ></img>

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
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
              Images/space-website_wqqxp4_c_scale,w_190.png 190w,
              Images/space-website_wqqxp4_c_scale,w_640.png 640w,
              Images/space-website_wqqxp4_c_scale,w_935.png 935w,
              Images/space-website_wqqxp4_c_scale,w_1187.png 1187w,
              Images/space-website_wqqxp4_c_scale,w_1400.png 1400w"
            src="Images/space-website_wqqxp4_c_scale,w_1400.png"
            alt="the home page of a space tourism website"
          ></img>

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
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
              Images/coffee-roasters_xctnl1_c_scale,w_190.png 190w,
              Images/coffee-roasters_xctnl1_c_scale,w_638.png 638w,
              Images/coffee-roasters_xctnl1_c_scale,w_931.png 931w,
              Images/coffee-roasters_xctnl1_c_scale,w_1189.png 1189w,
              Images/coffee-roasters_xctnl1_c_scale,w_1400.png 1400w"
            src="Images/coffee-roasters_xctnl1_c_scale,w_1400.png"
            alt="the home page of a coffee subscription website"
          ></img>

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

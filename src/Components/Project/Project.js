import React from "react";

import { motion } from "framer-motion";

import "../ProjectVariable/ProjectVariable.css";

export default function Project() {
  const variants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
        delay: 0.2,
      },
    },
  };

  const titleVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="project" id="projects">
      <div className="project__title-container">
        <motion.h2
          className="project__title-container__title"
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
        >
          Projects
        </motion.h2>
      </div>
      <motion.div
        className="project__grid"
        initial="offscreen"
        whileInView="onscreen"
        variants={variants}
      >
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
              href="https://coffeeroasters-subscription-website.netlify.app/"
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

        <div className="project__grid__site">
          {/* <img
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
          ></img> */}

          <img
            className="project__grid__site__image"
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcset="
              Images/Screen_Shot_2022-08-26_at_6.22.53_PM_cbqw1l_c_scale,w_200.png 200w,
              Images/Screen_Shot_2022-08-26_at_6.22.53_PM_cbqw1l_c_scale,w_1400.png 1400w"
            src="Screen_Shot_2022-08-26_at_6.22.53_PM_cbqw1l_c_scale,w_1400.png"
            alt=""
          ></img>

          <div className="project__grid__site__overlay">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://my-team-website.netlify.app/"
            >
              <h3 className="project__grid__site__overlay__title">myteam</h3>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Braden0006/myteam-website"
            >
              <button className="project__grid__site__overlay__code">
                See Live Code
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import "./CSS/Links.css";

const Links = () => {
  return (
    <>
      <section id="linksContainer">
        <div className="aboutHeadingDiv">
          <h1 className="headingColor">Where to find me</h1>
        </div>
        <div id="linksContainerBox">
          {/* Linkedin */}
          <div className="linksDiv boxBgColor animationBox">
            <i className="fa-brands fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/pratikjdv16/"
              className="headingColor"
            >
              Connect on Linkedin{" "}
              <svg
                width="0.625rem"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>

          {/* Github */}
          <div className="linksDiv boxBgColor animationBox">
            <i className="fa-brands fa-github"></i>
            <a href="https://github.com/Pratikjdv16" className="headingColor">
              Check repose on Github{" "}
              <svg
                width="0.625rem"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>

          {/* Instagram */}
          <div className="linksDiv boxBgColor animationBox">
            <i className="fa-brands fa-instagram"></i>
            <a
              href="https://www.instagram.com/pratiktechie/"
              className="headingColor"
            >
              Follow on Instagram{" "}
              <svg
                width="0.625rem"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Links;

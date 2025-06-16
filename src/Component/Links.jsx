import React from "react";
import "./CSS/Links.css";
import { LINKS_CONSTANT } from "./Constants/LinksConstant";

const Links = () => {
  return (
    <>
      <section id="linksContainer">
        <div className="aboutHeadingDiv">
          <h1 className="headingColor">Where to find me</h1>
        </div>
        <div id="linksContainerBox">
          {LINKS_CONSTANT?.map((item, index) => {
            return (
              <div key={index} className="linksDiv boxBgColor animationBox">
                <i className={`fa-brands ${item.ICON}`}></i>
                <a href={item.LINK} className="headingColor">
                  {item.TEXT}
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
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Links;

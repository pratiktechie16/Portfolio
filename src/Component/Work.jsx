import React from "react";
import "../Component/CSS/Work.css";
import { PROJECT_CONSTANT } from "./Constants/ProjectConstant";

const Work = () => {
  return (
    <>
      <section id="workContainer">
        <div className="aboutHeadingDiv">
          <h1 className="headingColor">Things i've created</h1>
        </div>

        {/* All Projects */}
        <section id="workContainerBox">
          <aside className="allProjectBox">
            {PROJECT_CONSTANT?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`projectBox boxBgColor ${
                    item.IMAGE_SIDE === "right" ? "secondProjectBox" : ""
                  } animationBox`}
                >
                  <div className="workImg">
                    <img src={item.URL} alt={item.PROJECT_NAME} />
                  </div>
                  <div className="projectContent">
                    <h2 className="headingColor">{item.PROJECT_NAME}</h2>
                    <div className="projectPara">
                      <p className="paraColor">{item.DESCRIPTION}</p>
                      <p>
                        {item.SKILLS.map((item, index) => (
                          <span key={index} className="techStyle">
                            {item}
                          </span>
                        ))}
                      </p>
                    </div>

                    <div className="viewBtnBox">
                      <a
                        href={item.LINK}
                        target="blank"
                        className="headingColor"
                      >
                        Check it out{" "}
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
                </div>
              );
            })}

            {/* See More Btn */}
            <div className="seeMoreBtnBox">
              <button id="seeMoreBtn" className="btnStyle">
                <a
                  href="https://github.com/pratiktechie16/"
                  target="blank"
                  className="btnStyle"
                >
                  See more{" "}
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
              </button>
            </div>
          </aside>
        </section>
      </section>
    </>
  );
};

export default Work;

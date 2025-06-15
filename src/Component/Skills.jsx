import React from "react";
import "./CSS/Skills.css";
import { SKILLS_CONSTANT } from "./Constants/SkillsContstant";
import darkGithub from "./Icons/icons8-github-128.png";
import lightGithub from "./Icons/icons8-github-100.png";

const Skills = ({ mode }) => {
  return (
    <>
      <section id="skillContainer">
        <div className="aboutHeadingDiv">
          <h1 className="headingColor">My technical arsenal</h1>
        </div>
        <div id="skillContainerBox">
          <div className="skillBox animationBox">
            {SKILLS_CONSTANT?.map((item, index) => (
              <div key={index} className="animationBox boxBgColor">
                <img
                  className={item.TECH === "GitHub" ? "icons github" : "icons"}
                  src={
                    item.TECH === "GitHub"
                      ? mode === "darkMode"
                        ? darkGithub
                        : lightGithub
                      : item.SRC
                  }
                  alt={item.TECH}
                />
                <span className="onHoverText techStyle">{item.TECH}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

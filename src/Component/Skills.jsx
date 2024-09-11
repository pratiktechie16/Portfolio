import React from "react";
import html from "./Icons/html-icon.png";
import css from "./Icons/css-icon.png";
import javaScript from "./Icons/javascript-icon.png";
import react from "./Icons/react.png";
import redux from "./Icons/redux-icon.png";
import node from "./Icons/nodejs-icon.png";
import express from "./Icons/express-icon.png";
import mongodb from "./Icons/mongodb-icon.png";
import oracle from "./Icons/oracle-icon.png";
import vscode from "./Icons/vs-code-icon.png";
import git from "./Icons/git-icon.png";
import github from "./Icons/icons8-github-128.png";
import figma from "./Icons/figma-logo.png";
import Bootstrap from "./Icons/bootstrap-icon.png";
import materialUi from "./Icons/material-ui-logo.png";
import "./CSS/Skills.css";

const Skills = () => {
  return (
    <>
      <section id="skillContainer">
        <div className="aboutHeadingDiv">
          <h1>My technical arsenal</h1>
        </div>
        <div id="skillContainerBox">
          <div className="skillBox">
            <div>
              <img className="icons" src={javaScript} alt="" />
              <span className="onHoverText">Javascript</span>
            </div>
            <div>
              <img className="icons" src={react} alt="" />
              <span className="onHoverText">React</span>
            </div>
            <div>
              <img className="icons" src={redux} alt="" />
              <span className="onHoverText">Redux Toolkit</span>
            </div>
            <div>
              <img className="icons" src={materialUi} alt="" />
              <span className="onHoverText">Material UI</span>
            </div>
            <div>
              <img className="icons" src={figma} alt="" />
              <span className="onHoverText">Figma</span>
            </div>
            <div>
              <img className="icons" src={css} alt="" />
              <span className="onHoverText">CSS3</span>
            </div>
            <div>
              <img className="oracle icons" src={Bootstrap} alt="" />
              <span className="onHoverText">Bootstrap</span>
            </div>
            <div>
              <img className="icons" src={html} alt="" />
              <span className="onHoverText">HTML5</span>
            </div>
            <div>
              <img className="icons" src={git} alt="" />
              <span className="onHoverText">Git</span>
            </div>
            <div>
              <img className="github icons" src={github} alt="" />
              <span className="onHoverText">GitHub</span>
            </div>
            <div>
              <img className="icons" src={vscode} alt="" />
              <span className="onHoverText">VS Code</span>
            </div>
            <div>
              <img className="icons" src={node} alt="" />
              <span className="onHoverText">Node</span>
            </div>
            <div>
              <img className="icons" src={express} alt="" />
              <span className="onHoverText">Express</span>
            </div>
            <div>
              <img className="icons" src={mongodb} alt="" />
              <span className="onHoverText">MongoDB</span>
            </div>
            <div>
              <img className="oracle icons" src={oracle} alt="" />
              <span className="onHoverText">Oracle</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

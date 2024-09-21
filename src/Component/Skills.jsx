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
import darkGithub from "./Icons/icons8-github-128.png";
import lightGithub from "./Icons/icons8-github-100.png";
import figma from "./Icons/figma-logo.png";
import Bootstrap from "./Icons/bootstrap-icon.png";
import materialUi from "./Icons/material-ui-logo.png";
import "./CSS/Skills.css";

const Skills = ({ mode }) => {
  return (
    <>
      <section id="skillContainer">
        <div className="aboutHeadingDiv">
          <h1 className="headingColor">My technical arsenal</h1>
        </div>
        <div id="skillContainerBox">
          <div className="skillBox animationBox">
            <div className="animationBox boxBgColor">
              <img className="icons" src={javaScript} alt="" />
              <span className="onHoverText techStyle">Javascript</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={react} alt="" />
              <span className="onHoverText techStyle">React</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={redux} alt="" />
              <span className="onHoverText techStyle">Redux Toolkit</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={materialUi} alt="" />
              <span className="onHoverText techStyle">Material UI</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={figma} alt="" />
              <span className="onHoverText techStyle">Figma</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={css} alt="" />
              <span className="onHoverText techStyle">CSS3</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="oracle icons" src={Bootstrap} alt="" />
              <span className="onHoverText techStyle">Bootstrap</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={html} alt="" />
              <span className="onHoverText techStyle">HTML5</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={git} alt="" />
              <span className="onHoverText techStyle">Git</span>
            </div>
            <div className="animationBox boxBgColor">
              {mode === "darkMode" ? (
                <img className="github icons" src={darkGithub} alt="" />
              ) : (
                <img className="github icons" src={lightGithub} alt="" />
              )}
              <span className="onHoverText techStyle">GitHub</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={vscode} alt="" />
              <span className="onHoverText techStyle">VS Code</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={node} alt="" />
              <span className="onHoverText techStyle">Node</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={express} alt="" />
              <span className="onHoverText techStyle">Express</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="icons" src={mongodb} alt="" />
              <span className="onHoverText techStyle">MongoDB</span>
            </div>
            <div className="animationBox boxBgColor">
              <img className="oracle icons" src={oracle} alt="" />
              <span className="onHoverText techStyle">Oracle</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

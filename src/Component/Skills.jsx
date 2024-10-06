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
import Babel from "./Icons/babel_icon.png";
import Npm from "./Icons/NPM_icon.png";
import Webpack from "./Icons/webpack_icon.png";
import Json from "./Icons/JSON_icon.png";
import React_router from "./Icons/react-router_icon.png";
import Axios from "./Icons/Azios_icon.png";
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
            {/* JavaScript */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={javaScript} alt="" />
              <span className="onHoverText techStyle">Javascript</span>
            </div>

            {/* React */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={react} alt="" />
              <span className="onHoverText techStyle">React</span>
            </div>

            {/* React router */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={React_router} alt="" />
              <span className="onHoverText techStyle">React router</span>
            </div>

            {/* Redux toolkit */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={redux} alt="" />
              <span className="onHoverText techStyle">Redux toolkit</span>
            </div>

            {/* Material UI */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={materialUi} alt="" />
              <span className="onHoverText techStyle">Material UI</span>
            </div>

            {/* Figma */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={figma} alt="" />
              <span className="onHoverText techStyle">Figma</span>
            </div>

            {/* CSS */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={css} alt="" />
              <span className="onHoverText techStyle">CSS3</span>
            </div>

            {/* Bootstrap */}
            <div className="animationBox boxBgColor">
              <img className="oracle icons" src={Bootstrap} alt="" />
              <span className="onHoverText techStyle">Bootstrap</span>
            </div>

            {/* HTML */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={html} alt="" />
              <span className="onHoverText techStyle">HTML5</span>
            </div>

            {/* NPM */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={Npm} alt="" />
              <span className="onHoverText techStyle">NPM</span>
            </div>

            {/* Webpack */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={Webpack} alt="" />
              <span className="onHoverText techStyle">Webpack</span>
            </div>

            {/* Babel */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={Babel} alt="" />
              <span className="onHoverText techStyle">Babel</span>
            </div>

            {/* JSON */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={Json} alt="" />
              <span className="onHoverText techStyle">JSON</span>
            </div>

            {/* Axios */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={Axios} alt="" />
              <span className="onHoverText techStyle">AXIOS</span>
            </div>

            {/* Git */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={git} alt="" />
              <span className="onHoverText techStyle">Git</span>
            </div>

            {/* GitHub */}
            <div className="animationBox boxBgColor">
              {mode === "darkMode" ? (
                <img className="github icons" src={darkGithub} alt="" />
              ) : (
                <img className="github icons" src={lightGithub} alt="" />
              )}
              <span className="onHoverText techStyle">GitHub</span>
            </div>

            {/* VS Code */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={vscode} alt="" />
              <span className="onHoverText techStyle">VS Code</span>
            </div>

            {/* Node */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={node} alt="" />
              <span className="onHoverText techStyle">Node</span>
            </div>

            {/* Express */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={express} alt="" />
              <span className="onHoverText techStyle">Express</span>
            </div>

            {/* MongoDB */}
            <div className="animationBox boxBgColor">
              <img className="icons" src={mongodb} alt="" />
              <span className="onHoverText techStyle">MongoDB</span>
            </div>

            {/* Oracle */}
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

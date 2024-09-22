import React, { useEffect, useState } from "react";
import "./CSS/HamburgerNav.css";
import DarkLogo from "./Icons/Era-1-removebg-preview.png";
import LightLogo from "./Icons/LOGO.png";

const HamburgerNav = ({ scrollToSection, switchMode, mode }) => {
  const [display, setDisplay] = useState({
    hamburgerNav: false,
    hamburgerNavWidth: "0vw",
    crossBtn: false,
    hamburgerBtn: true,
  });

  const [isBlurred, setIsBlurred] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsBlurred(true);
    } else {
      setIsBlurred(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`hamburger ${isBlurred ? "blur navBgColor" : "navBgColor"}`}
      >
        <section className="hamburgerNav-section">
          <div className="webTitle">
            {mode === "darkMode" ? (
              <img src={DarkLogo} alt="" />
            ) : (
              <img src={LightLogo} alt="" />
            )}
            <h4
              className="headingColor"
              style={
                mode === "darkMode"
                  ? { fontWeight: "400" }
                  : { fontWeight: "500" }
              }
            >
              pratiktechie
            </h4>
          </div>

          <button className="showHamburgerBtn">
            {display.hamburgerBtn === true ? (
              <i
                className="fa-solid fa-bars"
                onClick={() =>
                  setDisplay({
                    hamburgerNav: true,
                    hamburgerNavWidth: "100vw",
                    crossBtn: true,
                    hamburgerBtn: false,
                  })
                }
                style={
                  mode === "darkMode" ? { color: "white" } : { color: "black" }
                }
              ></i>
            ) : null}

            {display.crossBtn === true ? (
              <i
                className="fa-solid fa-xmark"
                onClick={() =>
                  setDisplay({
                    hamburgerNav: false,
                    hamburgerNavWidth: "0vw",
                    crossBtn: false,
                    hamburgerBtn: true,
                  })
                }
                style={
                  mode === "darkMode" ? { color: "white" } : { color: "black" }
                }
              ></i>
            ) : null}
          </button>
        </section>
      </section>

      {/* hamburger nav-btn section */}
      <section
        className="hamburgerNav navBgColor"
        style={{
          width: display.hamburgerNavWidth,
        }}
      >
        <div
          className="navBtn"
          style={{ marginTop: "5.5rem" }}
          onClick={() => {
            setDisplay({
              hamburgerNav: false,
              hamburgerNavWidth: "0vw",
              crossBtn: false,
              hamburgerBtn: true,
            });
            scrollToSection("homeContainer");
          }}
        >
          <span className="headingColor">Home</span>
        </div>
        <div
          className="navBtn"
          onClick={() => {
            setDisplay({
              hamburgerNav: false,
              hamburgerNavWidth: "0vw",
              crossBtn: false,
              hamburgerBtn: true,
            });
            scrollToSection("aboutContainer");
          }}
        >
          <span className="headingColor">About</span>
        </div>
        <div
          className="navBtn"
          onClick={() => {
            setDisplay({
              hamburgerNav: false,
              hamburgerNavWidth: "0vw",
              crossBtn: false,
              hamburgerBtn: true,
            });
            scrollToSection("skillContainer");
          }}
        >
          <span className="headingColor">Skills</span>
        </div>
        <div
          className="navBtn"
          onClick={() => {
            setDisplay({
              hamburgerNav: false,
              hamburgerNavWidth: "0vw",
              crossBtn: false,
              hamburgerBtn: true,
            });
            scrollToSection("experienceContainer");
          }}
        >
          <span className="headingColor">Experience</span>
        </div>
        <div
          className="navBtn"
          onClick={() => {
            setDisplay({
              hamburgerNav: false,
              hamburgerNavWidth: "0vw",
              crossBtn: false,
              hamburgerBtn: true,
            });
            scrollToSection("workContainer");
          }}
        >
          <span className="headingColor">Projects</span>
        </div>
        <div
          className="navBtn"
          onClick={() => {
            setDisplay({
              hamburgerNav: false,
              hamburgerNavWidth: "0vw",
              crossBtn: false,
              hamburgerBtn: true,
            });
            scrollToSection("linksContainer");
          }}
        >
          <span className="headingColor">Links</span>
        </div>
        <div
          className="navBtn"
          onClick={() => {
            setDisplay({
              hamburgerNav: false,
              hamburgerNavWidth: "0vw",
              crossBtn: false,
              hamburgerBtn: true,
            });
            scrollToSection("contactContainer");
          }}
        >
          <span className="headingColor">Contact</span>
        </div>

        <div className="switchBtnMobile">
          <span className="headingColor">
            {mode === "darkMode" ? "Light mode" : "Dark mode"}
          </span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={switchMode}></span>
          </label>
        </div>
      </section>
    </>
  );
};

export default HamburgerNav;

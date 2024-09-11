import React, { useEffect, useState } from "react";
import "./CSS/HamburgerNav.css";
import Logo from "./Icons/Era-1-removebg-preview.png";

const HamburgerNav = ({ scrollToSection }) => {
  const [display, setDisplay] = useState({
    hamburgerNav: false,
    hamburgerNavWidth: "0px",
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
      <section className="hamburger">
        <section
          className={`hamburgerNav-section ${isBlurred ? "blur" : "noBlur"}`}
        >
          <div className="webTitle">
            <img src={Logo} alt="" />
            <h4>pratiktechie</h4>
          </div>
          <button className="showHamburgerBtn">
            {display.hamburgerBtn === true ? (
              <i
                className="fa-solid fa-bars"
                onClick={() =>
                  setDisplay({
                    hamburgerNav: true,
                    hamburgerNavWidth: "390.4px",
                    crossBtn: true,
                    hamburgerBtn: false,
                  })
                }
              ></i>
            ) : null}

            {display.crossBtn === true ? (
              <i
                className="fa-solid fa-xmark"
                onClick={() =>
                  setDisplay({
                    hamburgerNav: false,
                    hamburgerNavWidth: "0px",
                    crossBtn: false,
                    hamburgerBtn: true,
                  })
                }
              ></i>
            ) : null}
          </button>
        </section>

        {/* {display.hamburgerNav === true ? ( */}
        <section
          className="hamburgerNav"
          style={{ width: display.hamburgerNavWidth }}
        >
          <div
            className="navBtn"
            style={{ marginTop: "5.5rem" }}
            onClick={() => {
              setDisplay({
                hamburgerNav: false,
                hamburgerNavWidth: "0px",
                crossBtn: false,
                hamburgerBtn: true,
              });
              scrollToSection("homeContainer");
            }}
          >
            <span>Home</span>
          </div>
          <div
            className="navBtn"
            onClick={() => {
              setDisplay({
                hamburgerNav: false,
                hamburgerNavWidth: "0px",
                crossBtn: false,
                hamburgerBtn: true,
              });
              scrollToSection("aboutContainer");
            }}
          >
            <span>About Me</span>
          </div>
          <div
            className="navBtn"
            onClick={() => {
              setDisplay({
                hamburgerNav: false,
                hamburgerNavWidth: "0px",
                crossBtn: false,
                hamburgerBtn: true,
              });
              scrollToSection("skillContainer");
            }}
          >
            <span>Skills</span>
          </div>
          <div
            className="navBtn"
            onClick={() => {
              setDisplay({
                hamburgerNav: false,
                hamburgerNavWidth: "0px",
                crossBtn: false,
                hamburgerBtn: true,
              });
              scrollToSection("experienceContainer");
            }}
          >
            <span>Experience</span>
          </div>
          <div
            className="navBtn"
            onClick={() => {
              setDisplay({
                hamburgerNav: false,
                hamburgerNavWidth: "0px",
                crossBtn: false,
                hamburgerBtn: true,
              });
              scrollToSection("workContainer");
            }}
          >
            <span>Projects</span>
          </div>
          <div
            className="navBtn"
            onClick={() => {
              setDisplay({
                hamburgerNav: false,
                hamburgerNavWidth: "0px",
                crossBtn: false,
                hamburgerBtn: true,
              });
              scrollToSection("linksContainer");
            }}
          >
            <span>Links</span>
          </div>
          <div
            className="navBtn"
            onClick={() => {
              setDisplay({
                hamburgerNav: false,
                hamburgerNavWidth: "0px",
                crossBtn: false,
                hamburgerBtn: true,
              });
              scrollToSection("contactContainer");
            }}
          >
            <span>Contact Me</span>
          </div>
        </section>
        {/* ) : null} */}
      </section>
    </>
  );
};

export default HamburgerNav;

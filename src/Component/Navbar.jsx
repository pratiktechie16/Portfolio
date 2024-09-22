import React, { useEffect, useState } from "react";
import "../Component/CSS/Navbar.css";
import DarkLogo from "./Icons/Era-1-removebg-preview.png";
import LightLogo from "./Icons/LOGO.png";

const Navbar = ({ scrollToSection, switchMode, mode }) => {
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

  const onHover = (e) => {
    e.target.style.color = mode === "darkMode" ? "white" : "black";
  };

  const outHover = (e) => {
    e.target.style.color = mode === "darkMode" ? "#b4b4b4" : "#616161";
  };

  return (
    <>
      <section
        className={`navbarContainer ${
          isBlurred ? "blur navBgColor" : "navBgColor"
        }`}
      >
        <section className="navbarContainerBox">
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
          <div className="navbar-content">
            <div>
              <span
                className="paraColor"
                onClick={() => scrollToSection("homeContainer")}
                onMouseEnter={onHover}
                onMouseLeave={outHover}
              >
                Home
              </span>
            </div>
            <div>
              <span
                className="paraColor"
                onClick={() => scrollToSection("aboutContainer")}
                onMouseEnter={onHover}
                onMouseLeave={outHover}
              >
                About
              </span>
            </div>
            <div>
              <span
                className="paraColor"
                onClick={() => scrollToSection("skillContainer")}
                onMouseEnter={onHover}
                onMouseLeave={outHover}
              >
                Skills
              </span>
            </div>
            <div>
              <span
                className="paraColor"
                onClick={() => scrollToSection("experienceContainer")}
                onMouseEnter={onHover}
                onMouseLeave={outHover}
              >
                Experience
              </span>
            </div>
            <div>
              <span
                className="paraColor"
                onClick={() => scrollToSection("workContainer")}
                onMouseEnter={onHover}
                onMouseLeave={outHover}
              >
                Projects
              </span>
            </div>
            <div>
              <span
                className="paraColor"
                onClick={() => scrollToSection("linksContainer")}
                onMouseEnter={onHover}
                onMouseLeave={outHover}
              >
                Links
              </span>
            </div>
            <div>
              <span
                className="paraColor"
                onClick={() => scrollToSection("contactContainer")}
                onMouseEnter={onHover}
                onMouseLeave={outHover}
              >
                Contact
              </span>
            </div>
          </div>

          <div className="switchBtnDesktop">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" onClick={switchMode}></span>
            </label>
          </div>
        </section>
      </section>
    </>
  );
};

export default Navbar;

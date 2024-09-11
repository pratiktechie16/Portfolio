import React, { useEffect, useState } from "react";
import "../Component/CSS/Navbar.css";
import Logo from "./Icons/Era-1-removebg-preview.png";

const Navbar = ({ scrollToSection }) => {
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
      <section className={`navbarContainer ${isBlurred ? "blur" : "noBlur"}`}>
        <section className="navbarContainerBox">
          <div className="webTitle">
            <img src={Logo} alt="" />
            <h4>pratiktechie</h4>
          </div>
          <div className="navbar-content">
            <div>
              <span onClick={() => scrollToSection("homeContainer")}>Home</span>
            </div>
            <div>
              <span onClick={() => scrollToSection("aboutContainer")}>
                About
              </span>
            </div>
            <div>
              <span onClick={() => scrollToSection("skillContainer")}>
                Skills
              </span>
            </div>
            <div>
              <span onClick={() => scrollToSection("experienceContainer")}>
                Experience
              </span>
            </div>
            <div>
              <span onClick={() => scrollToSection("workContainer")}>
                Projects
              </span>
            </div>
            <div>
              <span onClick={() => scrollToSection("linksContainer")}>
                Links
              </span>
            </div>
            <div>
              <span onClick={() => scrollToSection("contactContainer")}>
                Contact
              </span>
            </div>
          </div>
          <div className="location">
            <span>Pune, India</span>
          </div>
        </section>
      </section>
    </>
  );
};

export default Navbar;

import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Work from "./Component/Work";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import HamburgerNav from "./Component/HamburgerNav";
import Skills from "./Component/Skills";
import Experience from "./Component/Experience";
import { useEffect, useState } from "react";
import Links from "./Component/Links";

const App = () => {
  const [mode, setMode] = useState("darkMode");

  useEffect(() => {
    const projectBoxes = document.querySelectorAll(".animationBox");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    projectBoxes.forEach((box) => {
      observer.observe(box);
    });

    return () => {
      projectBoxes.forEach((box) => {
        observer.unobserve(box);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    return section.scrollIntoView({ behavior: "smooth" });
  };

  const enableLightMode = () => {
    let bodyBgColor = document.querySelector("body");
    bodyBgColor.style.backgroundColor = "#f0f0f0";

    let iconColor = document.querySelectorAll("i");
    iconColor.forEach((elem) => {
      elem.style.color = "black";
    });

    let boxBgColor = document.querySelectorAll(".boxBgColor");
    boxBgColor.forEach((elem) => {
      elem.style.backgroundColor = "white";
    });

    let navBgColor = document.querySelectorAll(".navBgColor");
    navBgColor.forEach((elem) => {
      elem.style.backgroundColor = "hsl(0deg 0% 97.6% / 80%)";
    });

    let headingColor = document.querySelectorAll(".headingColor");
    headingColor.forEach((elem) => {
      elem.style.color = "black";
    });

    let btnStyle = document.querySelectorAll(".btnStyle");
    btnStyle.forEach((elem) => {
      elem.style.color = "white";
      elem.style.backgroundColor = "black";
    });

    let techStyle = document.querySelectorAll(".techStyle");
    techStyle.forEach((elem) => {
      elem.style.color = "#616161";
      elem.style.backgroundColor = "#f0f0f0";
    });

    let paraColor = document.querySelectorAll(".paraColor");
    paraColor.forEach((elem) => {
      elem.style.color = "#616161";
    });

    let inputBoxStyle = document.querySelectorAll(".inputBoxStyle");
    inputBoxStyle.forEach((elem) => {
      elem.style.color = "black";
      elem.style.backgroundColor = "#f0f0f0";
    });
    setMode("lightMode");
  };

  const enableDarkMode = () => {
    let bodyBgColor = document.querySelector("body");
    bodyBgColor.style.backgroundColor = "black";

    let iconColor = document.querySelectorAll("i");
    iconColor.forEach((elem) => {
      elem.style.color = "white";
    });

    let boxBgColor = document.querySelectorAll(".boxBgColor");
    boxBgColor.forEach((elem) => {
      elem.style.backgroundColor = "#111111";
    });

    let navBgColor = document.querySelectorAll(".navBgColor");
    navBgColor.forEach((elem) => {
      elem.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    });

    let headingColor = document.querySelectorAll(".headingColor");
    headingColor.forEach((elem) => {
      elem.style.color = "white";
    });

    let btnStyle = document.querySelectorAll(".btnStyle");
    btnStyle.forEach((elem) => {
      elem.style.color = "black";
      elem.style.backgroundColor = "white";
    });

    let techStyle = document.querySelectorAll(".techStyle");
    techStyle.forEach((elem) => {
      elem.style.color = "white";
      elem.style.backgroundColor = "black";
    });

    let paraColor = document.querySelectorAll(".paraColor");
    paraColor.forEach((elem) => {
      elem.style.color = "#b4b4b4";
    });

    // let navContentColor = document.querySelectorAll(".navColor");
    // paraColor.forEach((elem) => {
    //   elem.style.color = "#b4b4b4";
    //   elem.style.color
    // });

    let inputBoxStyle = document.querySelectorAll(".inputBoxStyle");
    inputBoxStyle.forEach((elem) => {
      elem.style.color = "white";
      elem.style.backgroundColor = "black";
    });
    setMode("darkMode");
  };

  const switchMode = () => {
    if (mode === "darkMode") {
      enableLightMode();
    } else {
      enableDarkMode();
    }
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        switchMode={switchMode}
        mode={mode}
      />
      <HamburgerNav
        scrollToSection={scrollToSection}
        switchMode={switchMode}
        mode={mode}
      />
      <Home />
      <About />
      <Skills mode={mode} />
      <Experience />
      <Work />
      <Links />
      <Contact />

      <div
        className="backToTop animationBox"
        onClick={() => scrollToSection("homeContainer")}
      >
        <div className="boxBgColor">
          <i className="fa-solid fa-angle-up "></i>
        </div>
      </div>

      <Footer />

      <div className="downloadCV">
        <a
          href="./PratikJadhavCV.pdf"
          download="Pratik_Jadhav_CV"
          className="btnStyle"
        >
          <i className="fa-solid fa-file fa-flip btnStyle"></i>
          <span className="onHoverText techStyle">Download CV</span>
        </a>
      </div>
    </>
  );
};

export default App;

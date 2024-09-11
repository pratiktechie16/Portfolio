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
import { useEffect } from "react";
import Links from "./Component/Links";

const App = () => {
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

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <HamburgerNav scrollToSection={scrollToSection} />
      <Home />
      <About />
      <Skills />
      <Experience />
      {/* <Education /> */}
      <Work />
      <Links />
      <Contact />
      <Footer />

      <div className="downloadCV">
        <a href="./PratikJadhavCV.pdf" download="Pratik_Jadhav_CV">
          <i class="fa-solid fa-file fa-flip"></i>
          <span className="onHoverText">Download CV</span>
        </a>
      </div>
    </>
  );
};

export default App;

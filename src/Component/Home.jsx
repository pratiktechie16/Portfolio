import React, { useEffect, useState } from "react"; // SF is rafce
import "../Component/CSS/Home.css";

const Home = ({ mode }) => {
  const screenSize = window.innerWidth;

  const texts =
    screenSize > 600
      ? [
          "Pratik Jadhav",
          "a react developer",
          "a front end specialist",
          "a javascript explorer",
        ]
      : ["React developer", "Front end specialist", "Javascript explorer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typingEffect, setTypingEffect] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTextToType = texts[currentTextIndex];
      if (typingEffect.length < currentTextToType.length) {
        setTypingEffect(
          currentTextToType.substring(0, typingEffect.length + 1)
        );
      } else {
        clearTimeout(timeout);
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          setTypingEffect("");
        }, 1000); // Adjust pause between texts
      }
    }, 100); // Adjust typing speed

    return () => clearTimeout(timeout);
  }, [currentTextIndex, typingEffect]);

  return (
    <>
      <section id="homeContainer">
        <section id="homeContainerBox">
          <div className="section">
            {screenSize > 600 ? (
              <>
                <h1 className="headingColor">Hello,</h1>
                <h1 className="heading headingColor">I'm {typingEffect}</h1>
              </>
            ) : (
              <>
                <h1 className="headingColor">Hello,</h1>
                <h1 className="headingColor">I'm Pratik Jadhav</h1>
                <h1 className="heading headingColor">{typingEffect}</h1>
              </>
            )}
            <h4
              className="headingColor"
              style={{
                fontSize: "1.4174rem",
                width: "50%",
                textAlign: "center",
                lineHeight: "130%",
              }}
            >
              Crafting engaging user experiences through innovative front end
              development.
            </h4>

            {/* See More Btn */}
            <div className="seeMoreBtnBox" style={{ marginTop: "2.12rem" }}>
              <button id="seeMoreBtn" className="btnStyle">
                <a
                  href="https://www.linkedin.com/in/pratiktechie/"
                  target="blank"
                  className="btnStyle"
                >
                  Open to work{" "}
                  <svg
                    width="0.625rem"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </button>
            </div>
          </div>
          <div className="homeImage"></div>
        </section>
      </section>
    </>
  );
};

export default Home;

import React from "react";
import "../Component/CSS/About.css";
import myPic from "./Icons/enhanced-image (1).png";

const About = ({ ref }) => {
  return (
    <>
      <section id="aboutContainer">
        <div className="aboutHeadingDiv">
          <h1>A glimpse of me</h1>
        </div>

        <aside id="aboutContainerBox" className="animationBox">
          <div className="aboutBox">
            <div className="aboutLeft">
              <img src={myPic} alt="" />
            </div>
            <div className="aboutRight">
              <h2 style={{ marginBottom: "0.5rem" }}>Building with passion</h2>
              <div className="aboutRightTop">
                <p className="aboutPara">
                  I am driven by a deep passion for front-end development,
                  continuously exploring new ways to create engaging and
                  intuitive user experiences. With a solid foundation in
                  JavaScript, React, and Redux Toolkit, I focus on building
                  responsive, dynamic, and visually appealing web applications.
                  My approach combines creativity with technical expertise,
                  ensuring high-quality, efficient code that solves complex
                  challenges.
                </p>
                <p className="aboutPara">
                  I am committed to staying up-to-date with the latest
                  technologies and best practices, always looking for
                  opportunities to learn and grow. Whether it's enhancing user
                  interfaces or implementing new features, I take pride in my
                  work and enjoy collaborating with others to bring innovative
                  ideas to life.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default About;

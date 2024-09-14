import React from "react";
import "./CSS/Experience.css";

const Experience = () => {
  return (
    <>
      <section id="experienceContainer">
        <div className="aboutHeadingDiv">
          <h1>Where i've worked</h1>
        </div>
        <aside id="experienceContainerBox" className="animationBox experience2">
          <div className="experienceBox">
            {/* Headings */}
            <div className="experienceHeadingDiv">
              <div className="companyHeadingDiv">
                <h2>Sibic Business Incubator</h2>
                <h4>Mar 2023 - Present</h4>
              </div>
              <h3 style={{ marginTop: "0.5rem" }}>React Developer</h3>
            </div>

            {/* Role */}
            <div className="experienceDescriptionDiv">
              <h4>IMS Software</h4>
              <p>
                As a react developer, my role involves designing and developing
                user interfaces for the IMS (Incubation Management System)
                Software. I use my expertise in react to create interactive
                components that enhance the user experience. Collaborating with
                UI/UX designers and back end developers, I ensure seamless
                integration of front end and back end functionalities. My goal
                is to deliver a visually appealing and user-friendly interface
                that meets the needs of our clients and enhances the overall
                usability of the IMS software.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <span>Javascript</span>
                <span>React</span>
                <span>React Router</span>
                <span>CSS</span>
                <span>Formik</span>
                <span>Material UI</span>
                <span>Recharts</span>
                <span>AXIOS</span>
                <span>Full Calender</span>
                <span>Github</span>
              </p>
            </div>
          </div>
        </aside>

        <aside id="experienceContainerBox" className="animationBox experience1">
          <div className="experienceBox">
            {/* Headings */}
            <div className="experienceHeadingDiv">
              <div className="companyHeadingDiv">
                <h2>Sibic Business Incubator</h2>
                <h4>Sep 2022 - Mar 2023</h4>
              </div>
              <h3 style={{ marginTop: "0.5rem" }}>
                Front End Developer Intern
              </h3>
            </div>

            {/* Role */}
            <div className="experienceDescriptionDiv">
              <p style={{ marginTop: "0rem" }}>
                Gained hands-on experience in building web pages using HTML,
                CSS, and JavaScript. Assisted the development team in creating
                responsive designs for mobile and desktop. Collaborated with
                senior developers to learn best practices in web development and
                debugging. Worked on simple dynamic features like form
                validation and updating web content. Developed skills in
                troubleshooting browser compatibility issues and optimizing page
                performance.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
                <span>Web Storage API</span>
                <span>Fetch API</span>
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Experience;

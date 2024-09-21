import React from "react";
import "./CSS/Experience.css";

const Experience = () => {
  return (
    <>
      <section id="experienceContainer">
        <div className="aboutHeadingDiv">
          <h1 className="headingColor">Where i've worked</h1>
        </div>

        <aside id="experienceContainerBox" className="animationBox experience2">
          <div className="experienceBox boxBgColor">
            {/* Headings */}
            <div className="experienceHeadingDiv">
              <div className="companyHeadingDiv">
                <h2 className="headingColor" style={{ fontWeight: "200" }}>
                  Sibic Business Incubator
                </h2>
                <h4 className="headingColor">Kolhapur, India</h4>
              </div>
              <div
                className="companyHeadingDiv"
                style={{ marginTop: "1.5rem" }}
              >
                <h3 className="headingColor">React Developer</h3>
                <h4 className="headingColor">Mar 2023 - Present</h4>
              </div>
            </div>

            {/* Role */}
            <div className="experienceDescriptionDiv">
              <p className="paraColor">
                Designed and developed dynamic user interfaces for seamless user
                experiences. Collaborated with UI/UX designers and back-end
                developers to create interactive and responsive components.
                Implemented complex features and optimized performance to
                enhance usability and functionality. Conducted thorough testing
                and debugging to ensure smooth application functionality and
                user satisfaction
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <span className="techStyle">Javascript</span>
                <span className="techStyle">React</span>
                <span className="techStyle">React Router</span>
                <span className="techStyle">CSS</span>
                <span className="techStyle">Formik & Yup</span>
                <span className="techStyle">Material UI</span>
                <span className="techStyle">Recharts</span>
                <span className="techStyle">AXIOS</span>
                <span className="techStyle">Full Calender</span>
                <span className="techStyle">Git</span>
                <span className="techStyle">Github</span>
              </p>
            </div>
          </div>
        </aside>

        <aside id="experienceContainerBox" className="animationBox experience1">
          <div className="experienceBox boxBgColor">
            {/* Headings */}
            <div className="experienceHeadingDiv">
              <div className="companyHeadingDiv">
                <h2 className="headingColor" style={{ fontWeight: "200" }}>
                  Sibic Business Incubator
                </h2>
                <h4 className="headingColor">Kolhapur, India</h4>
              </div>
              <div
                className="companyHeadingDiv"
                style={{ marginTop: "1.5rem" }}
              >
                <h3 className="headingColor">Intern Front End Developer</h3>
                <h4 className="headingColor">Sep 2022 - Mar 2023</h4>
              </div>
            </div>

            {/* Role */}
            <div className="experienceDescriptionDiv">
              <p className="paraColor">
                Gained hands-on experience in building web pages using HTML,
                CSS, and JavaScript. Assisted the development team in creating
                responsive designs for mobile and desktop. Collaborated with
                senior developers to learn best practices in web development and
                debugging. Worked on simple dynamic features like form
                validation and updating web content. Developed skills in
                optimizing page performance.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <span className="techStyle">HTML</span>
                <span className="techStyle">CSS</span>
                <span className="techStyle">Javascript</span>
                <span className="techStyle">Web Storage API</span>
                <span className="techStyle">Fetch API</span>
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Experience;

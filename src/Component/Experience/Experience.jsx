import React from "react";
import "../CSS/Experience.css";
import { EXPERIENCE_CONSTANT } from "../Constants/ExperienceConstant";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <>
      <section id="experienceContainer">
        <div className="aboutHeadingDiv">
          <h1 className="headingColor">Where i've worked</h1>
        </div>

        {EXPERIENCE_CONSTANT?.map((item, index) => (
          <ExperienceItem key={index} experience={item} />
        ))}
      </section>
    </>
  );
};

export default Experience;

import React from "react";

const ExperienceItem = ({ experience }) => {
  const { ID, COMPANY_NAME, LOCATION, POSITIONS } = experience;
  return (
    <>
      <aside
        id="experienceContainerBox"
        className={`animationBox experience${ID}`}
      >
        <div className="experienceBox boxBgColor">
          {/* Headings */}
          <div className="companyHeadingDiv">
            <h2 className="headingColor" style={{ fontWeight: "200" }}>
              {COMPANY_NAME}
            </h2>
            <h4 className="headingColor">{LOCATION}</h4>
          </div>

          {/* Roles */}
          {POSITIONS?.map((item, index) => {
            return (
              <div
                key={index}
                style={index === 0 ? { marginBottom: "16px" } : {}}
              >
                <div
                  className="companyHeadingDiv"
                  style={{ marginTop: "1.5rem" }}
                  key={index}
                >
                  <h3 className="headingColor">{item.ROLE}</h3>
                  <h4 className="headingColor">{item.DURATION}</h4>
                </div>
                <div className="experienceDescriptionDiv">
                  <div className="paraColor">
                    {item.DESCRIPTION?.map((desc, index) => (
                      <p key={index}>{desc}</p>
                    ))}
                  </div>
                  <p style={{ marginTop: "1.5rem" }}>
                    {item.SKILLS?.map((item, index) => {
                      return (
                        <span className="techStyle" key={index}>
                          {item}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default ExperienceItem;

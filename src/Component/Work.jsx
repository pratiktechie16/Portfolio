import React from "react";
import "../Component/CSS/Work.css";

const Work = () => {
  return (
    <>
      <section id="workContainer">
        <div className="aboutHeadingDiv">
          <h1>Things i've created</h1>
        </div>

        {/* All Projects */}
        <section id="workContainerBox">
          <aside className="allProjectBox">
            {/* First Project */}
            <div className="projectBox animationBox">
              <div className="workImg">
                <img
                  src="https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="projectContent">
                <h2>Flipkart Clone</h2>
                <div className="projectPara">
                  <p>
                    Designed and developed a fully functional e-commerce
                    platform inspired by Flipkart. Created shopping cart
                    functionalities to improve user experience and retention.
                    Creating essential features and functionalities to provide
                    users. Implemented search and filter functionality to easily
                    find exactly products. Ensured the platform is accessible
                    and usable across various devices by implementing responsive
                    design principles.
                  </p>
                  <p>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>React Router</span>
                    <span>CSS</span>
                    <span>Redux Toolkit</span>
                    <span>Web Storage API</span>
                    <span>GitHub</span>
                  </p>
                </div>

                <div className="viewBtnBox">
                  <a href="https://flipkart16.vercel.app/" target="blank">
                    Check it out{" "}
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
                </div>
              </div>
            </div>

            {/* Second Project */}
            <div className="projectBox secondProjectBox animationBox">
              <div className="projectContent">
                <h2>Clear Sky</h2>
                <div className="projectPara">
                  <p>
                    Designed and developed weather application to provide
                    real-time weather information. Creating essential features
                    and functionalities to provide users. Integrated
                    location-based services to automatically detect and display
                    weather information for the user's current location.
                    Integrated with a weather API to fetch current weather
                    conditions and other relevant data. Developed interactive
                    and informative weather visualizations, including
                    temperature and wind speed.
                  </p>
                  <p>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Fetch API</span>
                    <span>CSS</span>
                    <span>GitHub</span>
                  </p>
                </div>

                {/* View Btn */}
                <div className="viewBtnBox">
                  <a href="https://clearsky-seven.vercel.app/" target="blank">
                    Check it out{" "}
                    <svg
                      width="0.625rem"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="workImg">
                <img
                  src="https://images.unsplash.com/photo-1705090669849-883c9430d712?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>

            {/* Third Project */}
            <div className="projectBox animationBox">
              <div className="workImg">
                <img
                  src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="projectContent">
                <h2>Facebook Login</h2>
                <div className="projectPara">
                  <p>
                    Created a visually accurate and user-friendly interface,
                    closely resembling the Facebook login and signup pages.
                    Implemented responsive design principles for a consistent
                    experience across various devices. Implemented comprehensive
                    error handling to guide users through the login and signup
                    process smoothly. Applied modern design principles to create
                    an intuitive and engaging user experience.
                  </p>
                  <p>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>React Router</span>
                    <span>CSS</span>
                    <span>Web Storage API</span>
                    <span>GitHub</span>
                  </p>
                </div>

                {/* View Btn */}
                <div className="viewBtnBox">
                  <a href="https://facebook16.vercel.app/" target="blank">
                    Check it out{" "}
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
                </div>
              </div>
            </div>

            {/* See More Btn */}
            <div className="seeMoreBtnBox">
              <button id="seeMoreBtn">
                <a href="https://github.com/Pratikjdv16/" target="blank">
                  See more{" "}
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
          </aside>
        </section>
      </section>
    </>
  );
};

export default Work;

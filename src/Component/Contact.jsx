import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../Component/CSS/Contact.css";
import axios from "axios";

const Contact = () => {
  const [popUp, setPopUp] = useState({
    display: "none",
    text: "Successfully Submitted",
  });

  const [copiedText, setCopiedText] = useState({
    emailCopied: false,
    phoneCopied: false,
  });

  const onPopUp = () => {
    setPopUp({ display: "none" });
  };

  const copyButton = (text) => {
    const btnText = document.getElementById(text).innerText;
    navigator.clipboard
      .writeText(btnText)
      .then(() => {
        console.log(text);
        if (text === "email_address") {
          setCopiedText({ emailCopied: true, phoneCopied: false });
          setTimeout(() => {
            setCopiedText({ emailCopied: false, phoneCopied: false });
          }, 1000);
        } else {
          setCopiedText({ emailCopied: false, phoneCopied: true });
          setTimeout(() => {
            setCopiedText({ emailCopied: false, phoneCopied: false });
          }, 1000);
        }
      })
      .catch(() => {
        setCopiedText({ emailCopied: false, phoneCopied: false });
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      massage: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2).max(25).required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      massage: Yup.string().min(2).required("Message is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await axios.post(
          "https://formspree.io/f/xeqbpzbj",
          values,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status === 200) {
          setPopUp({ display: "flex", text: "Successfully Submitted" });
          resetForm();
        } else {
          setPopUp({ display: "flex", text: "Submission Failed" });
        }

        setSubmitting(false);
      } catch (error) {
        setPopUp({ display: "flex", text: "Submission Failed" });
        setSubmitting(true);
      }
    },
  });

  return (
    <>
      <section id="contactContainer">
        <div className="aboutHeadingDiv">
          <h1>Get in touch now</h1>
        </div>

        <aside id="contactContainerBox" className="animationBox">
          <div className="contactLeft">
            {/* Email Info */}
            <div className="contactInfoDiv">
              <i class="fa-solid fa-envelope"></i>
              <span
                id="email_address"
                onClick={() => copyButton("email_address")}
              >
                pratikdjadhav16@gmail.com{" "}
                <i
                  className="fa-regular fa-clone"
                  style={{
                    fontSize: "1rem",
                    marginLeft: "0.5rem",
                  }}
                ></i>
                {copiedText.emailCopied ? (
                  <span className="copiedText">Copied</span>
                ) : null}
              </span>
            </div>

            {/* Phone Info */}
            <div className="contactInfoDiv">
              <i class="fa-solid fa-phone"></i>
              <span
                id="phone_number"
                onClick={() => copyButton("phone_number")}
              >
                +91 7620094762{" "}
                <i
                  className="fa-regular fa-clone"
                  style={{
                    fontSize: "1rem",

                    marginLeft: "0.5rem",
                  }}
                ></i>
                {copiedText.phoneCopied ? (
                  <span className="copiedText">Copied</span>
                ) : null}
              </span>
            </div>

            {/* Location Info */}
            <div className="linksDiv">
              <i
                class="fa-solid fa-location-dot"
                style={{ fontSize: "3rem" }}
              ></i>
              <a href="https://maps.app.goo.gl/H1cPMMpzhcNtG6ye6">
                Currently in Pune, India
                <svg
                  style={{ marginLeft: "0.4rem" }}
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

          {/* Contact Form */}
          <div className="contactRight">
            <div className="contactImg">
              <img
                src="https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="contactInfoInputDiv">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  style={{
                    borderColor:
                      formik.touched.name && formik.errors.name
                        ? "red"
                        : "#b4b4b4",
                  }}
                  autoComplete="off"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="contactInfoInputDiv">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  style={{
                    borderColor:
                      formik.touched.email && formik.errors.email
                        ? "red"
                        : "#b4b4b4",
                  }}
                  autoComplete="off"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="contactInfoInputDiv">
                <textarea
                  id="massage"
                  name="massage"
                  cols="30"
                  rows="7"
                  placeholder="Enter your massage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.massage}
                  style={{
                    borderColor:
                      formik.touched.massage && formik.errors.massage
                        ? "red"
                        : "#b4b4b4",
                  }}
                  autoComplete="off"
                ></textarea>
                {formik.touched.massage && formik.errors.massage ? (
                  <div className="error">{formik.errors.massage}</div>
                ) : null}
              </div>

              <button
                id="submitBtn"
                type="submit"
                disabled={formik.isSubmitting}
              >
                <span>
                  Send now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(-90deg)" }}
                    viewBox="0 0 14 8"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </form>
          </div>

          {/* Add User Submit Successfully PopUp Section*/}
          <div id="popUp" style={{ display: popUp.display }}>
            <h1>{popUp.text}</h1>
            <button id="popUpBtn" onClick={onPopUp}>
              OK
            </button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Contact;

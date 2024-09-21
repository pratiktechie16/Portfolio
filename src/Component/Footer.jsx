import React from "react";
import "../Component/CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footerDesktopText">
          <p className="paraColor">
            &copy; 2022-2024 l Designed and coded by pratiktechie
          </p>
        </div>
        <div className="footerMobileText">
          <p className="paraColor">Pratiktechie &copy; 2022-2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

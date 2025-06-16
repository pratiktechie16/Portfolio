import React from "react";
import "../Component/CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footerDesktopText">
          <p className="paraColor">
            &copy; 2022-2025 l Designed and coded by pratiktechie
          </p>
        </div>
        <div className="footerMobileText">
          <p className="paraColor">pratiktechie &copy; 2022-2025</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

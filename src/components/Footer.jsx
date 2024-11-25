import React from "react";
import "./Footer.css";
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/Linkedin.png";
import Logo from "../assets/logo.png";


export default function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
      </div>
      <div className="logo-f">
        <img src={Logo}/>
      </div>
      </div>
      {/* <div className="blur-f-1"></div>
      <div className="blur-f-2"></div> */}
    </div>
  );
}

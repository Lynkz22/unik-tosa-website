import "../Styles/FooterStyles.css";
import Logo from "../Components/Assets/Logo-1.png";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="divTopFooter">
          <h1 className="headingTopFooter">UNIK-TOSA</h1>
          <p className="paraTopFooter">Buildings And Projects With Finesse</p> 
        </div>
        <img className="navbarLogoImage" alt="Image1" src={Logo} />

        {/* <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div> */}
      </div>

      <div className="bottom">
        <div className="bottomDiv">
          <h4>Company</h4>
          <Link to="/" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Home</p>
          </Link>
          <Link to="/About" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">About</p>
          </Link>
          <Link to="/Projects" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Projects</p>
          </Link>
          <Link to="/Contact" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Get In Touch</p>
          </Link>
        </div>
        <div className="bottomDiv">
          <h4>Services</h4>
          <Link to="/About" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Construction And Supervision</p>
          </Link>
          <Link to="/About" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Project Management</p>
          </Link>
          <Link to="/About" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Structural Consultancy</p>
          </Link>
          <Link to="/About" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Detailed Design</p>
          </Link>
        </div>
        <div className="bottomDiv">
          <h4>Contact</h4>
          <Link to="/About" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              home
            </span>
            <p className="footerLinkText">
              No. 34 Razak Balogun Street, Surulere, Lagos
            </p>
          </Link>
          <Link to="/About" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              phone_in_talk
            </span>
            <p className="footerLinkText">+234 802 461 2683</p>
          </Link>
          <Link to="/About" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              mail
            </span>
            <p className="footerLinkText">sjolabode@gmail.com</p>
          </Link>
        </div>
        <div className="footerSocialLinks">
          <Link to="/About" className="footerLink">
            <i className="fa-brands fa-facebook-square"></i>
          </Link>
          <Link to="/About" className="footerLink">
            <i className="fa-brands fa-instagram-square"></i>
          </Link>
          <Link to="/About" className="footerLink">
            <i className="fa-brands fa-behance-square"></i>
          </Link>
          <Link to="/About" className="footerLink">
            <i className="fa-brands fa-twitter-square"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

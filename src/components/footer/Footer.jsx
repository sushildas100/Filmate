import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
      <footer className="footer">
        <ContentWrapper>
          <div className="infoText">
            Made with ❤️ By Sushil Kumar Das
          </div>
          <div className="socialIcons">
            <a href="https://www.facebook.com/profile.php?id=100006039256030" className="icon-link">
              <span className="icon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.instagram.com/capture_to_rule/" className="icon-link">
              <span className="icon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://twitter.com/DasSushil_07" className="icon-link">
              <span className="icon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/sushil-kumar-das-911087a7/" className="icon-link">
              <span className="icon">
                <FaLinkedin />
              </span>
            </a>
          </div>
        </ContentWrapper>
      </footer>
    );
  };

export default Footer;

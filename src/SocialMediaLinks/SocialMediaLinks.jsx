import React from "react";
import "./SocialMediaLinks.css";

import logo from "../assets/images/logo.png";
import aboutImage from "../assets/images/about.png";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import youtubeIcon from "../assets/images/youtube.png";
import tiktokIcon from "../assets/images/tiktok.png";

const SocialMediaLinks = () => {
  return (
    <div className="social-container">
      
      {/* 1. Logo at Top */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* 2. Heading + Social Media Icons */}
      <h2>Follow Me</h2>
      <div className="social-icons">
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
        <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" />
        </a>
      </div>

      {/* 3. About Image at Bottom */}
      <div className="about-container">
        <img src={aboutImage} alt="About" className="about-img" />
      </div>

    </div>
  );
};

export default SocialMediaLinks;

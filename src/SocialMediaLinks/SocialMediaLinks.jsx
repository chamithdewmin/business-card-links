import React from "react";
import "./SocialMediaLinks.css";

// Import Images
import logo from "../assets/images/logo.png";
import aboutImage from "../assets/images/about.png";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import youtubeIcon from "../assets/images/youtube.png";
import tiktokIcon from "../assets/images/tiktok.png";

const SocialMediaLinks = () => {
  return (
    <div className="social-container">
      
      {/* Logo at the top */}
      <div className="logo-container">
        <img src={logo} alt="LOGOZO Logo" className="logo-img" />
      </div>

      {/* Heading */}
      <h2>Follow Me</h2>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://web.facebook.com/profile.php?id=61571163435711" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/_logozo_/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@Logozosri" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
        <a href="https://www.tiktok.com/@logozosri" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" />
        </a>
      </div>

      {/* About Section at the Bottom */}
      <div className="about-container">
        <img src={aboutImage} alt="About Me" className="about-img" />
      </div>

    </div>
  );
};

export default SocialMediaLinks;

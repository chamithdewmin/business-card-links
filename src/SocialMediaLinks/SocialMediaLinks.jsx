// src/components/SocialMediaLinks.jsx
import React, { useState } from "react";
import "./SocialMediaLinks.css";

import logo from "../assets/images/logo.png";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import youtubeIcon from "../assets/images/youtube.png";
import tiktokIcon from "../assets/images/tiktok.png";
import whatsappIcon from "../assets/images/whatsapp.png";
import emailIcon from "../assets/images/email.png";
import starsBg from "../assets/images/bg.png";

import { downloadVCard } from "./VCard"; // Your vCard logic

const translations = {
  en: {
    followMe: "Follow Me",
    servicesTitle: "LOGOZO Graphic Design Services",
    servicesSub: "Affordable • Creative • On-Time Delivery",
    downloadVCard: "📥 Download vCard",
    about: "We provide affordable and professional graphic design services including logo design, branding, posters, and more.",
  },
  si: {
    followMe: "මාව අනුගමනය කරන්න",
    servicesTitle: "LOGOZO ග්‍රැෆික් නිර්මාණ සේවාවන්",
    servicesSub: "අඩු වියදමින් • නිර්මාණශීලීව • වේලාවට ලබාදීම",
    downloadVCard: "📥 වි-කාඩ් බාගන්න",
    about: "අපි ලබාදෙන්නේ අධික නොවන වියදමින්, වෘත්තීමය ලාංඡන නිර්මාණය, සන්නාමකරණය, පෝස්ටර් සහ තවත් බොහෝ සේවාවන් වේ.",
  },
};

const SocialMediaLinks = () => {
  const [lang, setLang] = useState("en");

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div
      className="social-container"
      style={{
        backgroundImage: `url(${starsBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
        minHeight: "100vh",
      }}
    >
      {/* Language Select */}
      <div className="lang-select" style={{ marginBottom: "1rem" }}>
        <select onChange={handleLanguageChange} value={lang}>
          <option value="en">English</option>
          <option value="si">සිංහල</option>
        </select>
      </div>

      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="LOGOZO Logo" className="logo-img" />
      </div>

      {/* Heading */}
      <h2 className="follow-title">{translations[lang].followMe}</h2>

      {/* Social Icons */}
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
        <a
          href="https://wa.me/94740429827?text=Hello%2C%20I'm%20interested%20in%20your%20design%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="mailto:logozo.info@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
      </div>

      {/* Service Info */}
      <div className="service-text" style={{ marginTop: "2rem" }}>
        <h3>{translations[lang].servicesTitle}</h3>
        <p>{translations[lang].servicesSub}</p>
      </div>

      {/* vCard Download */}
      <div className="download-vcard" style={{ marginTop: "1rem" }}>
        <button className="vcard-button" onClick={downloadVCard}>
          {translations[lang].downloadVCard}
        </button>
      </div>

      {/* About Section (Text-based) */}
      <div className="about-text" style={{ marginTop: "2rem", maxWidth: "600px", marginInline: "auto" }}>
        <p>{translations[lang].about}</p>
      </div>
    </div>
  );
};

export default SocialMediaLinks;

// src/components/FollowMe.jsx
import React, { useState } from "react";
import "./FollowMe.css";

import starsBg from "../assets/bg.png";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/email.png";
import { downloadVCard } from "./VCard"; // ✅ Import vCard logic

const translations = {
  en: {
    followMe: "Follow Me",
    servicesTitle: "LOGOZO Graphic Design Services",
    servicesSub: "Affordable • Creative • On-Time Delivery",
    downloadVCard: "📥 Download vCard",
  },
  si: {
    followMe: "මාව අනුගමනය කරන්න",
    servicesTitle: "LOGOZO ග්‍රැෆික් නිර්මාණ සේවාවන්",
    servicesSub: "අඩු වියදමින් • නිර්මාණශීලීව • වේලාවට ලබාදීම",
    downloadVCard: "📥 වි-කාඩ් බාගන්න",
  },
};

const FollowMe = () => {
  const [lang, setLang] = useState("en");

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div
      className="follow-container"
      style={{
        backgroundImage: `url(${starsBg})`,
        backgroundRepeat: "repeat",
        backgroundColor: "#000",
        backgroundSize: "cover",
      }}
    >
      <div className="lang-select">
        <select onChange={handleLanguageChange} value={lang}>
          <option value="en">English</option>
          <option value="si">සිංහල</option>
        </select>
      </div>

      <img src={logo} alt="Logo" className="logo" />
      <h2 className="follow-title">{translations[lang].followMe}</h2>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={tiktok} alt="TikTok" />
        </a>
        <a
          href="https://wa.me/940767984712?text=Hello%2C%20I'm%20interested%20in%20your%20design%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a href="mailto:youremail@example.com">
          <img src={email} alt="Email" />
        </a>
      </div>

      <div className="service-text">
        <h3>{translations[lang].servicesTitle}</h3>
        <p>{translations[lang].servicesSub}</p>
      </div>

      <div className="download-vcard">
        <button className="vcard-button" onClick={downloadVCard}>
          {translations[lang].downloadVCard}
        </button>
      </div>
    </div>
  );
};

export default FollowMe;

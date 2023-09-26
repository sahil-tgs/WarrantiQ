import React from "react";
import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

function Footer({ hide }) {
  return (
    <div className="fContainer" style={hide ? { visibility: "hidden" } : { visibility: "visible" }}>
      <div className="footer-container">
        <div className="content-container">
          {/* Place your content here */}
        </div>
        <div className="centered-content">
          <p> Made by Team: <span className="green-text">Coverage</span><span className="white-text">Crew</span>.</p>
          <div className="social-icons">
            <p>
              <FaDiscord size={25} className="icons" />
            </p>
            <p>
              <FaGithub size={25} className="icons" />
            </p>
            <p>
              <FaInstagram size={25} className="icons" />
            </p>
            <p>
              <FaTwitter size={25} className="icons" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

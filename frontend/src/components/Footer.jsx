import "@fortawesome/fontawesome-free/css/all.min.css";

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/71583a04-a9c6-4a52-9941-c30d98cb3417.png";
export default function Footer() {
  return (
    <footer className="footer-container font-['Raleway']">
      {/* Subscription Section */}
      <div className="footer-subscribe">
        <h3 className="footer-heading">
          Get our stories delivered to your inbox weekly.
        </h3>
        <div className="subscribe-box">
          <input type="email" placeholder="Your Email" className="subscribe-input" />
          <button className="subscribe-btn">Get started</button>
        </div>
        <p className="subscribe-note">
          Get a response tomorrow if you submit by 9pm today. If received after 9pm, you'll get a response the next day.
        </p>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">Zarrin</span>
        </div>

        <nav className="footer-nav">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/create" className="footer-link">Create blog</Link>
        <Link to="/blog-browse" className="footer-link">Blogs</Link>
          <Link to="/login" className="footer-link">Login</Link>
          <Link to="/signup" className="footer-link">Signup</Link>
          <Link to="/profile" className="footer-link">Profile</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </nav>

        <div className="social-icons font-['Raleway']">
          <a href="https://www.linkedin.com/in/ahir-bansari-73988a210" className="social-icon">FB</a>
          <a href="https://www.linkedin.com/in/ahir-bansari-73988a210" className="social-icon">IG</a>
          <a href="https://www.linkedin.com/in/ahir-bansari-73988a210" className="social-icon">LN</a>
          <a href="https://www.linkedin.com/in/ahir-bansari-73988a210" className="social-icon">YT</a>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          Copyright Ideapeel Inc © 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

  
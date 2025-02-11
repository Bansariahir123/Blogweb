
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../assets/71583a04-a9c6-4a52-9941-c30d98cb3417.png";
import userIcon from "../assets/e4e99344-2ddf-4988-a5a6-cb75330f8417.png";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logo} alt="Zarrin Logo" className="logo-image" />
          <Link to="/" className="logo-text">Zarrin</Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/create" className="footer-link">Create blog</Link>
          <Link to="/profile" className="footer-link">Profile</Link>
          <Link to="/login" className="footer-link">Login</Link>
          <Link to="/signup" className="footer-link">Signup</Link>
          <Link to="/blog-browse" className="footer-link">Blogs</Link>
          <Link to="/about" className="nav-item">About</Link>
          <img src={userIcon} alt="User" className="user-icon" />
        </div>

        {/* Contact Us Button */}
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;


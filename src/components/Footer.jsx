import { Link } from "react-router-dom";  // ✅ Import Link for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const contacts = [
  { icon: faLocationDot, info: "123 Pretty Avenue, New York, NY 10009" },
  { icon: faPhone, info: " (+1) 212/354-8844" },
  { icon: faEnvelope, info: "info@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "Facebook", link: "https://www.facebook.com" },
  { icon: faInstagram, name: "Instagram", link: "https://www.instagram.com" },
  { icon: faTwitter, name: "Twitter", link: "https://www.twitter.com" },
  { icon: faYoutube, name: "YouTube", link: "https://www.youtube.com" },
];

function Footer() {
  return (
    <footer>
      {/* Logo Section */}
      <div className="logo-container">
        <img src="/images/logo-white.png" alt="Little Lemon Logo" className="footer-logo" />
      </div>

      {/* Footer Sections */}
      <div className="footer-sections">
        
        {/* Navigation Section */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul className="nav-links">
            <li><strong>Doormat Navigation</strong></li>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li>
              <a 
                href="/#about" 
                className="nav-link"
                onClick={(e) => {
                  if (window.location.pathname !== "/") {
                    e.preventDefault();
                    window.location.href = "/#about"; // Force navigation to homepage first
                  }
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/#menu" 
                className="nav-link"
                onClick={(e) => {
                  if (window.location.pathname !== "/") {
                    e.preventDefault();
                    window.location.href = "/#menu"; // Force navigation to homepage first
                  }
                }}
              >
                Menu
              </a>
            </li>
            <li><Link to="/reservations" className="nav-link">Reservations</Link></li>
            <li><Link to="/orderonline" className="nav-link">Order Online</Link></li>
            <li><Link to="/login" className="nav-link">Login</Link></li>
          </ul>
        </nav>

        {/* Contact Section */}
        <address className="contact">
          <ul>
            <li><strong>Contact</strong></li>
            {contacts.map((contact, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={contact.icon} className="icon" /> {contact.info}
              </li>
            ))}
          </ul>
        </address>

        {/* Social Media Section */}
        <ul className="social-media-links">
          <li><strong>Follow Us</strong></li>
          {socials.map((social, index) => (
            <li key={index}>
              <a href={social.link} className="social-media-link">
                <FontAwesomeIcon icon={social.icon} className="icon" /> {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import "./Header.css";  // Make sure you have the appropriate styles

function Header() {
  return (
    <header className="header-container">
      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/">
          <img src="/images/logoyellow.svg" alt="Little Lemon Logo" className="header-logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="header-nav" aria-label="Main Navigation">
        <ul className="nav-links">
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
    </header>
  );
}

export default Header;

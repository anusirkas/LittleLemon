import { Link } from "react-router-dom";
import "./Header.css";  // Make sure you have the appropriate styles

function Header() {
  return (
    <header className="header-container">
      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/">
          <img src="/images/logoyellow.svg" alt="Little Lemon Logo" className="logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="header-nav" aria-label="Main Navigation">
            <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/menu" className="nav-link">Menu</Link></li>
                <li><Link to="/reservations" className="nav-link">Reserve a Table</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
       </nav>
    </header>
  );
}

export default Header;

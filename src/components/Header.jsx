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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reserve a Table</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
       </nav>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Main Navigation">
      <Link to="/" aria-label="Go to homepage">
        <img src="/images/logoyellow.svg" alt="Little Lemon Logo" className="logo" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reserve a Table</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

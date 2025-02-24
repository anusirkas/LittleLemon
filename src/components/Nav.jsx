import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <img src="/images/logoyellow.svg" alt="Little Lemon Logo" className="logo" />

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
          <Link to="/reservation">Reserve a Table</Link> {/* ✅ Fix this path */}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
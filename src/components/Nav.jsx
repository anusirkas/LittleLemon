function Nav() {
    return (
        <nav>
            <img src="/images/logoyellow.svg" alt="Little Lemon Logo" className="logo"/>

            <ul className="nav-links">
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/about">About</a>
                </li>
                <li>
                <a href="/menu">Menu</a>
                </li>
                <li>
                <a href="/reservations">Reserve a Table</a>
                </li>
                <li>
                <a href="/contact">Contact</a>
                </li>
            </ul>
         </nav>
    );
};
export default Nav;
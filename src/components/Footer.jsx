function Footer() {
    return (
        <footer>
            <div className="logo-container">
                <img src="/images/greenlemon_footer.png" alt="Little Lemon Logo" className="logo" />
            </div>

            <div className="footer-sections">
                <ul className="nav-links">
                    <li>Doormat Navigation</li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/orderonline">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>

                <ul className="contact">
                    <li>Contact</li>
                    <li><p>Little Lemon Restaurant</p></li>
                    <li><p>123 Main Street, Anytown, USA 12345</p></li>
                    <li><p>44 000 5555 5555</p></li>
                    <li><p>info@littlelemon.com</p></li>
                </ul>

                <ul className="social-media-links">
                    <li>Social Media Links</li>
                    <li>
                        <span className="social-media-link">Facebook</span>
                    </li>
                    <li>
                        <span className="social-media-link">Instagram</span>
                    </li>
                    <li>
                        <span className="social-media-link">TikTok</span>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

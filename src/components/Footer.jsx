function Footer() {
    return (
        <footer>
            <div className="logo-container">
                <img src="/images/greenlemon_footer.png" alt="Little Lemon Logo" className="logo" />
            </div>

            <div className="footer-sections">
                <nav aria-label="Footer Navigation">
                    <ul className="nav-links">
                        <li>Doormat Navigation</li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/orderonline">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>

                <address className="contact">
                    <ul>
                        <li>Contact</li>
                        <li><p>Little Lemon Restaurant</p></li>
                        <li><p>123 Main Street, Anytown, USA 12345</p></li>
                        <li><p>44 000 5555 5555</p></li>
                        <li><p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p></li>
                    </ul>
                </address>

                <ul className="social-media-links">
                    <li>Social Media Links</li>
                    <li><a href="https://www.facebook.com" className="social-media-link">Facebook</a></li>
                    <li><a href="https://www.instagram.com" className="social-media-link">Instagram</a></li>
                    <li><a href="https://www.tiktok.com" className="social-media-link">TikTok</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

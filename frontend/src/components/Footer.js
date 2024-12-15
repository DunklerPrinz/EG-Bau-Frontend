import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-columns">
                {/* About Section */}
                <div className="footer-column">
                    <h3>Über Uns</h3>
                    <p>
                        Gartenbau Gjocaj – Ihr zuverlässiger Partner für nachhaltige Gartenpflege und
                        Landschaftsgestaltung in Hannover.
                    </p>
                </div>

                {/* Links Section */}
                <div className="footer-column">
                    <h3>Nützliche Links</h3>
                    <ul>
                        <li><a href="#services">Dienstleistungen</a></li>
                        <li><a href="#about-us">Über Uns</a></li>
                        <li><a href="#projects">Projekte</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-column">
                    <h3>Folgen Sie Uns</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} EG-Bau - Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}

export default Footer;

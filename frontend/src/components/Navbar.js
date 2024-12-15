import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} id="logo" alt="Logo" className="navbar-logo" />
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
                    <li><a href="#dienstleistungen" className="navbar-link">Dienstleistungen</a></li>
                    <li><a href="#projekte" className="navbar-link">Projekte</a></li>
                    <li><a href="#über-uns" className="navbar-link">Über uns</a></li>
                    <li><a href="#bewertungen" className="navbar-link">Bewertungen</a></li>
                </ul>
                <button className="navbar-button">Willkommen!</button>
            </div>
        </nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import './SecondaryNavbar.css';

function SecondaryNavbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);

    return (
        <header className="secondary-navbar">
            <nav className="secondary-bottom-bar">
                <img src="/logo.png" id="logo" alt="Logo" className="secondary-navbar-logo" />
                <ul className="secondary-nav-links">
                    <li>
                        <a href="#dienstleistungen" className="secondary-nav-link">
                            Dienstleistungen
                        </a>
                    </li>
                    <li>
                        <a href="#projekte" className="secondary-nav-link">
                            Projekte
                        </a>
                    </li>
                    <li>
                        <a href="#über-uns" className="secondary-nav-link">
                            Über uns
                        </a>
                    </li>
                    <li>
                        <a href="#bewertungen" className="secondary-nav-link">
                            Bewertungen
                        </a>
                    </li>
                </ul>
                <a href="#kontakt" className="request-button">
                    Anfrage
                </a>
            </nav>
        </header>
    );
}

export default SecondaryNavbar;

import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import Navbar from "./Navbar";
import SecondaryNavbar from "./SecondaryNavbar";

const Header = () => {
    const [animate, setAnimate] = useState(false);
    const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        setAnimate(true);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust for your mobile breakpoint
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (!isMobile) { // Only update showSecondaryNavbar when not on mobile
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) {
                            setShowSecondaryNavbar(true);
                        } else {
                            setShowSecondaryNavbar(false);
                        }
                    });
                }
            },
            { threshold: 1.0 } // Trigger when the Navbar is fully out of the viewport
        );

        if (navbarRef.current) {
            observer.observe(navbarRef.current);
        }

        handleResize(); // Initial check for screen size
        window.addEventListener('resize', handleResize);

        return () => {
            if (navbarRef.current) {
                observer.unobserve(navbarRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return (
        <>
            {!isMobile && showSecondaryNavbar && <SecondaryNavbar />}
            <div id="header-background" className={`header ${animate ? 'animate-header' : ''}`}>
                <div ref={navbarRef}>
                    <Navbar />
                </div>
                <div className="container">
                    <h2 className="header-title">EG-Bau - wenn Du willst, dass nur die Harten in Deinen Garten kommen.</h2>
                    <div className="header-links">
                        <a href="#projekte" className="header-link">Projekte</a>
                        <a href="#contact" className="header-link">Kontakt</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

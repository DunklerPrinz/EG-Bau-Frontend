import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AboveFooter from './components/AboveFooter';
import "./App.css"
import Header from "./components/Header";
import ScrollToTopButton from './components/ScrollToTopButton';
import Pisser from "./components/Projekte"

function App() {
    const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Show the navbar once the user starts scrolling
            if (scrollY > 0) {
                setHasScrolled(true);
            }

            // Secondary navbar logic
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            if (scrollY > navbarHeight) {
                setShowSecondaryNavbar(true); // Show secondary navbar
            } else {
                setShowSecondaryNavbar(false); // Hide secondary navbar
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Router>
            <div className="main-container">
                <Header />
                <LandingPage />
                <AboveFooter />
                <Footer />
                <ScrollToTopButton />
            </div>
        </Router>
    );
}

export default App;


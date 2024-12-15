// src/components/LandingPage.js
import React, { useState, useRef, useEffect } from 'react';
import './LandingPage.css';
import ChatBot from "./ChatBot";
import AboutUs from "./AboutUs";
import ServicesSection from "./ServicesSection";
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import Reviews from "./Reviews";
import ParallaxImage from "./ParallaxImage";
import OurApproach from './OurApproach';
import Contact from './Contact';
import Projekte from './Projekte';


function LandingPage() {

    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const contactRef = useRef(null); // Reference for the Contact section
    const [hasAlertShown, setHasAlertShown] = useState(false); // Prevent duplicate alerts
    const [showPavingOptions, setShowPavingOptions] = useState(false);


    // Function to toggle the chatbot
    const openChatbot = () => setIsChatbotOpen(true);
    const closeChatbot = () => setIsChatbotOpen(false);



    return (
        <>
            <ToastContainer />
            <div className={`landing-page ${isChatbotOpen ? 'blurred' : ''}`}>

                <ServicesSection />

                <ParallaxImage src="/coolerbild.jpg" height='300px' intensity={55} text="Gestalte, erschaffe und pflege Deinen Traumgarten mit uns!" />

                <OurApproach />

                <Projekte />

                <ParallaxImage src="/nochmal.jpg" height="300px" intensity={55} text="Dein Garten, Deine Oase – Wir machen Träume grün!" />

                <Contact />

                <ParallaxImage src="/egzon2.jpg" height="300px" intensity={55} text="Wo Natur auf Leidenschaft trifft – Dein Garten in besten Händen!" />

                <AboutUs />

                <Reviews />

                <div className="chat-icon-tooltip">
                    <div className="chat-icon" onClick={openChatbot}>
                        <i className="fas fa-comment"></i>
                    </div>
                    <span className="tooltip-text">Chatte mit uns!</span>
                </div>

                {/* Chatbot Overlay */}
                {isChatbotOpen && (
                    <div className="chatbot-overlay">
                        <ChatBot onClose={closeChatbot} /> {/* Ensure this usage exactly matches the import */}
                    </div>
                )}
            </div>
        </>
    );
};

// Move export statement here
export default LandingPage;
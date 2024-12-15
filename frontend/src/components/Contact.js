import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import "./Contact.css"

const Contact = () => {

    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const openChatbot = () => setIsChatbotOpen(true);
    const contactRef = useRef(null); // Reference for the Contact section
    const [hasAlertShown, setHasAlertShown] = useState(false); // Prevent duplicate alerts
    const [showPavingOptions, setShowPavingOptions] = useState(false);
    const headerRef = useRef(null); // Reference for the contact-header
    const [isHeaderVisible, setIsHeaderVisible] = useState(false); // State to track header visibility

    const handlePavingChange = (event) => {
        const pavingData = {
            cobblestone: {
                image: '/pflaster1.webp',
                description: 'Kopfsteinpflaster: Klassisch, langlebig und perfekt für einen rustikalen Look im Garten.',
            },
            brick: {
                image: '/pflaster2.webp',
                description: 'Ziegelpflaster: Ideal für traditionelle Designs mit warmen, erdigen Farbtönen.',
            },
            concrete: {
                image: '/pflaster3.webp',
                description: 'Betonplatten: Modern, glatt und vielseitig einsetzbar.',
            },
            flagstone: {
                image: '/pflaster4.webp',
                description: 'Natursteinplatten: Große, natürliche Steine für einen organischen Look.',
            },
            gravel: {
                image: '/pflaster5.webp',
                description: 'Kies: Flexibel, einfach zu verlegen und in verschiedenen Farben erhältlich.',
            },
        };

        const selectedPaving = event.target.value;
        const imageElement = document.getElementById('paving-image');
        const descriptionElement = document.getElementById('paving-description');

        if (pavingData[selectedPaving]) {
            imageElement.src = pavingData[selectedPaving].image;
            imageElement.alt = `Bild von ${selectedPaving}`;
            descriptionElement.textContent = pavingData[selectedPaving].description;

            // Make the display container visible
            document.querySelector('.paving-display').style.display = 'flex';
        } else {
            // Hide the display container if no selection
            document.querySelector('.paving-display').style.display = 'none';
        }
    };

    const handleServiceChange = (event) => {
        const selectedValue = event.target.value;
        setShowPavingOptions(selectedValue === 'Pflasterarbeiten');
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAlertShown) {
                        setHasAlertShown(true);
                        toast.info('Testet unseren KI-Chatbot, um mehr über uns erfahren. Stellt ihm ganz einfach fragen!', {
                            position: 'bottom-left',
                            onClick: openChatbot, // Open chatbot when toast is clicked
                            autoClose: 5000,
                            style: { cursor: 'pointer' },
                        });
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the Contact section is visible
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, [hasAlertShown, contactRef]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsHeaderVisible(true); // Trigger animation when visible
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 10% of the element is visible
        );

        if (headerRef.current) {
            observer.observe(headerRef.current); // Observe the header element
        }
    }, []);

    return (
        <section id="contact" className="contact" ref={contactRef}>
            <div
            ref={headerRef}
            className={`contact-header ${isHeaderVisible ? 'animate' : ''}`}>
                <h1>Kontakt</h1>
                <p>Wir freuen uns, von Ihnen zu hören! Füllen Sie das Formular aus, und unser Team wird sich schnellstmöglich bei Ihnen melden.</p>
            </div>
            <div className="contact-container">
                {/* Contact Information Section */}
                <div className="contact-info" data-aos="fade-right">
                    <h3>Warum EG-Bau?</h3>
                    <ul>
                        <li>🌿 Zuverlässig und erfahren</li>
                        <li>💰 Faire Preise und transparente Angebote</li>
                        <li>🌍 Kundennah und flexibel</li>
                    </ul>
                    <div className="additional-contact">
                        <p><strong>Telefon:</strong> +49 123 456 7890</p>
                        <p><strong>E-Mail:</strong> kontakt@eg-bau.de</p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <form className="contact-form" data-aos="fade-left">
                    <div className="form-group">
                        <input type="text" placeholder="Vor- und Nachname" required />
                        <input type="email" placeholder="E-Mail-Adresse" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Telefonnummer (optional)" />
                    </div>
                    <div className="form-group">
                        <select id="service-dropdown" required onChange={handleServiceChange}>
                            <option value="" disabled selected>Wählen Sie ihre Dienstleistung</option>
                            <option value="Pflasterarbeiten">Pflasterarbeiten</option>
                            <option value="Dienstleistungen">Dienstleistungen</option>
                        </select>
                    </div>

                    {showPavingOptions && (
                        <div className="form-group">
                            <select id="paving-dropdown" required onChange={handlePavingChange}>
                                <option value="" disabled selected>Wählen Sie eine Pflasterart</option>
                                <option value="cobblestone">Kopfsteinpflaster</option>
                                <option value="brick">Ziegelpflaster</option>
                                <option value="concrete">Betonplatten</option>
                                <option value="flagstone">Natursteinplatten</option>
                                <option value="gravel">Kies</option>
                            </select>
                        </div>
                    )}

                    <div className="paving-display" style={{ display: 'none' }}>
                        <div className="paving-image">
                            <img id="paving-image" src="" alt="Ausgewählte Pflasterart" />
                        </div>
                        <div className="paving-description">
                            <p id="paving-description">Wählen Sie eine Pflasterart aus dem Dropdown-Menü, um mehr Informationen zu erhalten.</p>
                        </div>
                    </div>
                    <textarea placeholder="Betreff / Anfrage" required></textarea>
                    <div className="form-actions">
                        <button type="submit">Absenden</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;

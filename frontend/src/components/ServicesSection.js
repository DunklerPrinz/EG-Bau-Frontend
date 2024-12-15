import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
    { iconClass: 'fas fa-drafting-compass', title: 'Planung & Gestaltung', description: 'Von der Planung bis zur Umsetzung – wir bieten maßgeschneiderte Lösungen für Ihren Garten.' },
    { iconClass: 'fas fa-seedling', title: 'Pflege & Instandhaltung', description: 'Professionelle Pflege und regelmäßige Instandhaltung für Ihre Grünflächen und Anlagen.' },
    { iconClass: 'fas fa-user-cog', title: 'Kundenbetreuung', description: 'Unsere Experten stehen Ihnen für Fragen und Beratung zur Verfügung.' },
    { iconClass: 'fas fa-road', title: 'Pflasterarbeiten', description: 'Ob Einfahrten pflastern oder Terrassen anlegen – wir übernehmen große Projekte reibungslos.' },
    { iconClass: 'fas fa-digging', title: 'Tiefbauarbeiten', description: 'Unser Team führt alle Arten von Erdbewegungen zuverlässig durch - mit geeigneten Mitteln und aller Professionalität.' },
    { iconClass: 'fas fa-water', title: 'Pool- und Teichbau', description: 'Wir setzen Ihre Wünsche für einen Pool oder Teich in die Tat um.' },
    { iconClass: 'fas fa-leaf', title: 'Rollrasenverlegung', description: 'Wir verlegen Rollrasenflächen in allen Größen und Formen nach Ihren Wünschen.' },
    { iconClass: 'fas fa-tree', title: 'Baumarbeiten', description: 'Professionelle Baumschnitt- und Fällarbeiten für gesunde Gärten.' },
    { iconClass: 'fas fa-hammer', title: 'Aufbau & Montage', description: 'Von Holzzäunen bis Terrassen – wir übernehmen alle Montagearbeiten.' },
    { iconClass: 'fas fa-broom', title: 'Reinigung', description: 'Wir bieten außerdem weiträumige Reinigungsdienstleistungen an.' },
    { iconClass: 'fas fa-lightbulb', title: 'Beleuchtung & Elektrik', description: 'Funktionale und ästhetische Gartenbeleuchtung sowie Elektroarbeiten für Außenbereiche.' },
    { iconClass: 'fas fa-shower', title: 'Bewässerung', description: 'Automatisierte Bewässerungslösungen, die Wasser sparen und Ihre Pflanzen gesund halten.' },
];

const ServicesSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize(); // Initial check
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const sliderSettings = {
        dots: true, // Display dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Disable arrows for mobile
        swipe: true, // Ensure swipe gestures are enabled
    };

    return (
        <section id="dienstleistungen" className="services">
            <h2>Unsere Dienstleistungen</h2>
            {isMobile ? (
                <div className="mobile-slider">
                    <Slider {...sliderSettings}>
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                iconClass={service.iconClass}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className="service-cards">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            iconClass={service.iconClass}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ServicesSection;

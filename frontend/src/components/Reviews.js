import React, { useEffect, useRef } from 'react';
import './Reviews.css';

const reviewsData = [
    {
        name: 'Anne Schmidt',
        review:
            'Mir hat die Arbeit des Dienstleisters sehr gefallen. Auf individuelle Wünsche - selbst als die Arbeiten anfingen - wurde Rücksicht genommen und das Team strahlt nicht zuletzt wegen des Charakters. Ich kann diesen Dienstleister jedem weiterempfehlen, der professionelle und engagierte Arbeit schätzt.',
        image: "woman.webp"
    },
    {
        name: 'Otto und Ingrid K.',
        review:
            'Herr Gjocaj und seine Mannschaft arbeiten detailgetreu und professionell. Nichts auszusetzen. Gerne wieder! Die Zusammenarbeit verlief reibungslos, und wir waren begeistert von der Zuverlässigkeit und dem exzellenten Endergebnis.',
        image: 'eldercouple.webp'
    },
    {
        name: 'Peter Müller',
        review:
            'Die Herren von EG Bau haben meinen Garten in ein Paradies verwandelt. 100%-ige Weiterempfehlung meinerseits! Der gesamte Prozess, von der Planung bis zur Ausführung, war hervorragend und hat meine Erwartungen weit übertroffen.',
        image: 'male.webp'
    }
];

const Reviews = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log('Element observed:', entry.target);
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                threshold: 0.2
            }
        );

        const cards = containerRef.current.querySelectorAll(".review-card");
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    return (
        <div id="bewertungen" className="reviews-section">
            <div className="reviews-header">
                <h2>Was unsere Kunden sagen</h2>
                <p>Kundenzufriedenheit ist unsere oberste Priorität und wir streben nach Exellenz.</p>
            </div>
            <div className="reviews-container" ref={containerRef}>
                {reviewsData.map((review, index) => (
                    <div className="review-card" key={index}>
                        <div className="review-content">
                            <p className="review-text">"{review.review}"</p>
                            <p className="reviewer-name">- {review.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;

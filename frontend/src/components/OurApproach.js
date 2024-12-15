import React, { useState, useEffect } from "react";
import "./OurApproach.css";

const OurApproach = () => {
    const cards = [
        {
          title: "Nachhaltigkeit in Aktion",
          description:
            "Wir setzen auf umweltfreundliche Praktiken, um in allen Bereichen einen positiven Beitrag zu leisten – für die Natur und zukünftige Generationen.",
        },
        {
          title: "Integrität und Vertrauen",
          description:
            "Ehrlichkeit und Transparenz leiten unser Handeln, wodurch wir vertrauensvolle und langfristige Beziehungen schaffen.",
        },
        {
          title: "Gemeinschaft und Zusammenarbeit",
          description:
            "Wir glauben an die Kraft von Teamwork und Inklusion, um gemeinsam grüne und lebendige Räume zu gestalten.",
        },
        {
          title: "Ständiges Wachstum",
          description:
            "Lernen und Weiterentwicklung sind zentral für uns, damit wir immer bessere Gartenerlebnisse schaffen können.",
        },
        {
          title: "Innovation für die Zukunft",
          description:
            "Wir entwickeln zukunftsorientierte Lösungen, um die Gärten von morgen zu gestalten und zukünftige Herausforderungen zu meistern.",
        },
        {
          title: "Menschen stärken",
          description:
            "Unser Ziel ist es, Menschen und Gemeinschaften durch nachhaltige Gartenarbeit und Bildungsangebote zu bereichern.",
        },
        {
          title: "Qualität vor Quantität",
          description:
            "Wir legen Wert auf höchste Qualität, damit jedes Projekt unsere hohen Standards für Gartenpflege und Gestaltung widerspiegelt.",
        },
        {
          title: "Verantwortung und Rechenschaft",
          description:
            "Wir übernehmen Verantwortung für unser Tun und die Auswirkungen unserer Arbeit, stets engagiert und gewissenhaft.",
        }
      ];
    

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = Math.min(cards.length, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length - visibleCards + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length, visibleCards]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - visibleCards));
  };

  return (
    <div className="slider-container">
      
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
      >
        {cards.map((card, index) => (
          <div
            className="slide"
            key={index}
            style={{ flex: `0 0 calc(100% / ${visibleCards})` }}
          >
            <div className="slide-content modern-card">
              <div className="text-overlay">
                <h2 className="title">{card.title}</h2>
                <p className="description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      <div className="indicators">
        {Array.from({ length: cards.length - visibleCards + 1 }, (_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurApproach;
import React, { useEffect, useState, useRef } from "react";
import "./ParallaxImage.css";

function ParallaxImage({ src, height = "400px", intensity = 20, text = "" }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Check if the screen width is mobile size
        };

        const handleScroll = () => {
            if (!isMobile && sectionRef.current) {
                const section = sectionRef.current;
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.offsetHeight;
                const windowHeight = window.innerHeight;

                // Calculate progress (0 to 1) based on how much of the section is visible
                const progress = Math.max(
                    0,
                    Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight))
                );

                setScrollPosition(progress); // Update the progress value
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        handleResize(); // Initial check for screen size

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile]);

    // Adjust the height for mobile
    const adjustedHeight = isMobile ? "200px" : height;

    return (
        <section
            ref={sectionRef}
            className={`parallax-image ${isMobile ? "mobile" : ""}`}
            style={{
                height: adjustedHeight, // Use adjusted height based on screen size
            }}
        >
            <img
                src={src}
                id="container-pic"
                alt="Parallax view"
                style={{
                    transform: isMobile ? "none" : `translateY(${scrollPosition * -intensity}%)`,
                    filter: "blur(2px)",
                }}
            />
            <div className="testFlex">
                <h1>{text}</h1>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
            </div>
        </section>
    );
}

export default ParallaxImage;

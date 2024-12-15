import React, { useState, useEffect, useRef } from 'react';
import "./Projekte.css";

const carouselItems = [
    {
        imgSrc: "garten-landschaft.jpg",
        author: "EG-Bau",
        title: "Traumhafte Pflaster",
        topic: "Unsere Projekte",
        description: "",
        buttons: ["VOLLBILD"]
    },
    {
        imgSrc: "bild5.jpg",
        author: "EG-Bau",
        title: "Himmlische Fliesen",
        topic: "Unsere Projekte",
        description: "Entdecken Sie die neuen Kiespflaster.",
        buttons: ["VOLLBILD"]
    },
    {
        imgSrc: "bild1.jpg",
        author: "EG-Bau",
        title: "Bezaubernde Pflaster",
        topic: "Unsere Projekte",
        description: "",
        buttons: ["VOLLBILD"]
    },
    {
        imgSrc: "PHOTO-2024-11-04-21-13-16 (1).jpg",
        author: "EG-Bau",
        title: "Atemberaubender Vorgarten",
        topic: "Unsere Projekte",
        description: "Ideal für Familien mit Kindern.",
        buttons: ["VOLLBILD"]
    },
    {
        imgSrc: "final1.jpg",
        author: "EG-Bau",
        title: "Ein schöner Garten am Morgen, vertreibt Kummer und Sorgen",
        topic: "Unsere Projekte",
        description: "",
        buttons: ["VOLLBILD"]
    },
    {
        imgSrc: "final2.jpg",
        author: "EG-Bau",
        title: "Ein schöner Garten am Morgen, vertreibt Kummer und Sorgen",
        topic: "Unsere Projekte",
        description: "",
        buttons: ["VOLLBILD"]
    }
];

const thumbnails = [
    {
        imgSrc: "bild9.jpg",
        title: "Himmlische Fliesen",
        description: "Was ein Anblick."
    },
    {
        imgSrc: "bild1.jpg",
        title: "Tolle Fliesen in Edeloptik.",
        description: "Entdecken Sie unsere neuesten Fliesen."
    },
    {
        imgSrc: "PHOTO-2024-11-04-21-13-16 (1).jpg",
        title: "Atemberaubender Vorgarten",
        description: "Ideal für Familien mit Kindern."
    },
    {
        imgSrc: "final1.jpg",
        title: "Ein schöner Garten am Morgen...",
        description: "Description"
    },
    {
        imgSrc: "final2.jpg",
        title: "Ein schöner Garten am Morgen...",
        description: "Description"
    },
    {
        imgSrc: "garten-landschaft.jpg",
        title: "Traumhafte Fliesen",
        description: "Description"
    }
];


const Slider = () => {
    const [currentImage, setCurrentImage] = useState(null); // State to track the full-size image
    const [timeRunning] = useState(3000);
    const [timeAutoNext] = useState(7000);
    const carouselRef = useRef(null);
    const listItemRef = useRef(null);
    const thumbnailRef = useRef(null);
    let runTimeOut = useRef(null);
    let runAutoRun = useRef(null);

    const stopTimer = () => {
        clearTimeout(runTimeOut.current);
        clearTimeout(runAutoRun.current);
    };

    const restartTimer = () => {
        runAutoRun.current = setTimeout(() => {
            showNextSlide();
        }, timeAutoNext);
    };

    const showPrevSlide = () => {
        const itemSlider = listItemRef.current.querySelectorAll('.item');
        const itemThumbnail = thumbnailRef.current.querySelectorAll('.item');

        const positionLastItem = itemSlider.length - 1;
        listItemRef.current.prepend(itemSlider[positionLastItem]);
        thumbnailRef.current.prepend(itemThumbnail[positionLastItem]);
        carouselRef.current.classList.add('prev');

        clearTimeout(runTimeOut.current);
        runTimeOut.current = setTimeout(() => {
            carouselRef.current.classList.remove('prev');
        }, timeRunning);
    };

    const showNextSlide = () => {
        const itemSlider = listItemRef.current.querySelectorAll('.item');
        const itemThumbnail = thumbnailRef.current.querySelectorAll('.item');

        listItemRef.current.appendChild(itemSlider[0]);
        thumbnailRef.current.appendChild(itemThumbnail[0]);
        carouselRef.current.classList.add('next');

        clearTimeout(runTimeOut.current);
        runTimeOut.current = setTimeout(() => {
            carouselRef.current.classList.remove('next');
        }, timeRunning);

        clearTimeout(runAutoRun.current);
        runAutoRun.current = setTimeout(() => {
            showNextSlide();
        }, timeAutoNext);
    };

    useEffect(() => {
        runAutoRun.current = setTimeout(() => {
            showNextSlide();
        }, timeAutoNext);

        return () => {
            clearTimeout(runAutoRun.current);
            clearTimeout(runTimeOut.current);
        };
    }, [timeAutoNext]);

    const openFullSizeView = (imgSrc) => {
        setCurrentImage(imgSrc); // Set the current image to be displayed in full size
        stopTimer(); // Stop the timer when opening the full-size view
    };

    const closeFullSizeView = () => {
        setCurrentImage(null); // Clear the current image
        restartTimer(); // Restart the timer when closing the full-size view
    };

    return (
        <section id='projekte'>
            <div className='karusell' ref={carouselRef}>
                <div className='liste' ref={listItemRef}>
                    {carouselItems.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.imgSrc} alt={item.title} />
                            <div className="content">
                                <div className="author">{item.author}</div>
                                <div className="titler">{item.title}</div>
                                <div className="topic">{item.topic}</div>
                                <div className="des">{item.description}</div>
                                <div className="buttons">
                                    <button onClick={() => openFullSizeView(item.imgSrc)}>
                                        {item.buttons[0]}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="thumbnail" ref={thumbnailRef}>
                    {thumbnails.map((thumbnail, index) => (
                        <div className="item" key={index}>
                            <img src={thumbnail.imgSrc} alt={thumbnail.title} />
                            <div className="content">
                                <div className="titler">{thumbnail.title}</div>
                                <div className="des">{thumbnail.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='arrows'>
                    <button id="prev" onClick={showPrevSlide}>&#8592;</button>
                    <button id="next" onClick={showNextSlide}>&#8594;</button>
                </div>
                <div className='time'></div>
            </div>

            {currentImage && (
                <div className="modal" onClick={closeFullSizeView}>
                    <div className="modal-content">
                        <img src={currentImage} alt="Full Size" />
                        <button className="close-button" onClick={closeFullSizeView}>
                            Schließen
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Slider;

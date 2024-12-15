import React, { useRef, useState } from "react";
import "./GardenDesigner.css";

const GardenDesigner = () => {
    const canvasRef = useRef(null);
    const [uploadImage, setUploadImage] = useState(null);
    const [description, setDescription] = useState("");

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => setUploadImage(e.target.result);
        reader.readAsDataURL(file);
    };

    const handleCanvasDraw = (event) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.fillStyle = "green"; // Farbe der Markierung
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI); // Zeichnet einen kleinen Punkt
        ctx.fill();
    };

    const handleSubmit = async () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL("image/png"); // Speichert das Canvas als Bild

        const response = await fetch("/api/designs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image,
                description,
            }),
        });

        if (response.ok) {
            alert("Design erfolgreich hochgeladen!");
        } else {
            alert("Fehler beim Hochladen.");
        }
    };

    return (
        <div className="garden-designer">
            <h2>Designen Sie Ihren Garten</h2>
            <input type="file" onChange={handleImageUpload} />
            {uploadImage && (
                <img src={uploadImage} alt="Hochgeladener Gartenplan" className="upload-preview" />
            )}
            <canvas
                ref={canvasRef}
                width={600}
                height={400}
                className="design-canvas"
                onClick={handleCanvasDraw}
                style={{
                    backgroundImage: `url(${uploadImage})`,
                    backgroundSize: "cover",
                    cursor: "crosshair",
                }}
            />
            <textarea
                placeholder="Beschreiben Sie Ihre Wünsche..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="design-description"
            />
            <button onClick={handleSubmit} className="submit-button">
                Design hochladen
            </button>
        </div>
    );
};

export default GardenDesigner;

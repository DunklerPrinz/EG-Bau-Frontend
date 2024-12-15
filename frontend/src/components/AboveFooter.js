import React from "react";
import "./AboveFooter.css";

function AboveFooter() {
    return (
        <div className="above-footer">
            <div className="contact-item">
                <i className="fas fa-user"></i>
                <p><strong>Inhaber:</strong> Egzon Gjocaj</p>
            </div>
            <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p><strong>Email:</strong> info@gartenbau-gjocaj.de</p>
            </div>
            <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p><strong>Telefon:</strong> +49 511 1234567</p>
            </div>
            <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p><strong>Adresse:</strong> Gartenstraße 123, 30159 Hannover</p>
            </div>
        </div>
    );
}

export default AboveFooter;

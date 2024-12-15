import React from 'react';
import './ServiceCard.css';

const ServiceCard = props => {
    return (
        <div className="service-card">
            <i className={props.iconClass}></i>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default ServiceCard;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 2400, once: true }); // Adjust duration as needed


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

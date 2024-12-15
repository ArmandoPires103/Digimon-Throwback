import React from "react";
import { Link } from "react-router-dom";
import "/CSS/DigimonHeader.css"; // Include your Digimon-themed CSS styles here

const DigimonHeader = () => {
  return (
    <header className="digimon-header">
      <div className="header-logo">
        <img
          src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1734127709/lti6z5yqm8h31_fx5kh9.webp" // Replace with your Digivice or Digimon logo URL
          alt="Digimon Logo"
          className="logo"
        />
      </div>
      <div className="header-title">
        <h1>Digimon Digital World</h1>
        <p className="tagline">"Digital Monsters - Champions of the Digital World"</p>
      </div>
      <nav className="header-nav">
        <ul className="nav-links">
          <li><Link to="/">Digimon</Link></li>
          <li><Link to="/adventure">Adventure</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default DigimonHeader;


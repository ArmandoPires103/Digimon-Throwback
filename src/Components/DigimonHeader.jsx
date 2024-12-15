import React from "react";
import { Link } from "react-router-dom";
import "/CSS/DigimonHeader.css"; // Ensure the path matches your project structure

const DigimonHeader = () => {
  return (
    <header className="digimon-header">
      {/* Left Digivice */}
      <div className="digivice-container left-digivice">
        <div className="digivice-container__cut digivice-container__cut--left-top">
          <div className="wireless"></div>
        </div>
        <div className="digivice-container__cut digivice-container__cut--left-bottom"></div>
        <div className="digivice">
          <div className="digivice__circle">
            <div className="digivice__inner-circle">
              <div className="digivice__screen"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Logo and Title */}
      <div className="header-content">
        <div className="header-logo">
          <img
            src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1734127709/lti6z5yqm8h31_fx5kh9.webp"
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
      </div>

      {/* Right Digivice */}
      <div className="digivice-container right-digivice">
        <div className="digivice-container__cut digivice-container__cut--right-top">
          <div className="wireless"></div>
        </div>
        <div className="digivice-container__cut digivice-container__cut--right-bottom"></div>
        <div className="digivice">
          <div className="digivice__circle">
            <div className="digivice__inner-circle">
              <div className="digivice__screen"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DigimonHeader;



import React from "react";
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
          <li><a href="#home">Home</a></li>
          <li><a href="#digimon">Digimon</a></li>
          <li><a href="#adventure">Adventure</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* <main>
        <h2>Welcome to the Digital World!</h2>
        <p>Explore, battle, and discover your favorite Digimon.</p>
      </main> */}
    </header>
  );
};

export default DigimonHeader;

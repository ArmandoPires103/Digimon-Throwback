import React from "react";
import "/CSS/DigimonAdventure.css";

const digimonTimeline = [
  { year: "1999", event: "The DigiDestined are chosen and sent to the Digital World for the first time." },
  { year: "2000", event: "Apocalymon is defeated, and the DigiDestined return to the real world." },
  { year: "2002", event: "A new generation of DigiDestined emerges to battle the Digimon Emperor." },
  { year: "2003", event: "The gates to the Digital World are sealed to protect both worlds." },
  { year: "2005", event: "The DigiDestined reunite to confront a new threat in the form of Diaboromon." },
  { year: "2015", event: "The DigiDestined face off against a powerful infection threatening Digimon and humans." },
  { year: "2020", event: "A reboot of the DigiDestined adventure begins, exploring alternate storylines." },
];

const DigimonAdventure = () => {
  return (
    <div className="digimon-adventure">
      <h1 className="title">Digimon Adventure Timeline</h1>
      <div className="timeline">
        {digimonTimeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <span className="year">{item.year}</span>
            <p className="event">{item.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigimonAdventure;

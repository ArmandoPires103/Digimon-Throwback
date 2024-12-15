import React, { useEffect, useState } from "react";
import "/CSS/DigimonHome.css"; // Ensure your CSS file is correctly linked

const DigimonHome = () => {
  const [digimons, setDigimons] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [filteredDigimons, setFilteredDigimons] = useState([]);

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Digimon data.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Digimons:", data); // Log the data to ensure it's correct
        setDigimons(data);
        setLoading(false);
        setFilteredDigimons(data); // Initially, set all Digimons
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (e) => {
    const level = e.target.value;
    setSelectedLevel(level);
    console.log("Dropdown value changed:", level); // Check the dropdown value

    if (level) {
      setFilteredDigimons(digimons.filter((digimon) => digimon.level === level));
    } else {
      setFilteredDigimons(digimons); // Show all Digimons if no filter is selected
    }
  };

  return (
    <div className="adventure-container">
      {/* Header Section with Filter */}
      <header className="digivice-container">
        {/* Filter Dropdown for Level */}
        <div className="filter-bar">
          <select
            value={selectedLevel}
            onChange={handleFilterChange}
            className="level-filter"
          >
            <option value="">Filter by Level</option>
            <option value="Rookie">Rookie</option>
            <option value="Champion">Champion</option>
            <option value="Ultimate">Ultimate</option>
            <option value="Mega">Mega</option>
          </select>
        </div>
      </header>

      {/* Digimon World Section */}
      <div className="container">
        <h1>Digimon Adventure</h1>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {/* Display Digimons */}
        <div className="digimon-grid">
          {filteredDigimons.length === 0 ? (
            <p>No Digimons match the selected level.</p>
          ) : (
            filteredDigimons.map((digimon, index) => (
              <div key={index} className="digimon-card">
                <img src={digimon.img} alt={digimon.name} />
                <h2>{digimon.name}</h2>
                <p>Level: {digimon.level}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DigimonHome;


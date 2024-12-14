import React from "react";
import { useEffect, useState } from "react";
import "/CSS/DigimonHome.css"; // Add your CSS file path

const DigimonHome = () => {
 // State and Fetch Logic
 const [digimons, setDigimons] = useState([]);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(true);
 const [search, setSearch] = useState("");

 useEffect(() => {
   fetch("https://digimon-api.vercel.app/api/digimon")
     .then((response) => {
       if (!response.ok) {
         throw new Error("Failed to fetch Digimon data.");
       }
       return response.json();
     })
     .then((data) => {
       setDigimons(data);
       setLoading(false);
     })
     .catch((err) => {
       setError(err.message);
       setLoading(false);
     });
 }, []);

 const handleSearch = () => {
   if (!search) return;
   setLoading(true);
   fetch(`https://digimon-api.vercel.app/api/digimon/name/${search}`)
     .then((response) => {
       if (!response.ok) {
         throw new Error("Digimon not found!");
       }
       return response.json();
     })
     .then((data) => {
       setDigimons(Array.isArray(data) ? data : [data]);
       setLoading(false);
     })
     .catch((err) => {
       setError(err.message);
       setLoading(false);
     });
 };

 return (
   <div className="adventure-container">
     {/* Digivice Home Section */}
     <div className="digivice-container">
       <div className="digivice-container__cut digivice-container__cut--left-top">
         <div className="wireless"></div>
       </div>
       <div className="digivice-container__cut digivice-container__cut--left-bottom"></div>
       <div className="digivice-container__cut digivice-container__cut--right-top"></div>
       <div className="digivice-container__cut digivice-container__cut--right-bottom"></div>
       <div className="digivice">
         <label className="digivice__button digivice__button--digital" htmlFor="toggle"></label>
         <div className="digivice__button digivice__button--a"></div>
         <div className="digivice__button digivice__button--b"></div>
         <div className="digivice__detail digivice__detail--h digivice__detail--left"></div>
         <div className="digivice__circle">
           <div className="digivice__inner-circle">
             <input type="checkbox" id="toggle" />
             <div className="digivice__screen"></div>
           </div>
         </div>
       </div>
     </div>

     {/* Digimon World Section */}
     <div className="container">
       <h1>Digimon Adventure</h1>
       <div className="search-bar">
         <input
           type="text"
           placeholder="Search Digimon by Name"
           value={search}
           onChange={(e) => setSearch(e.target.value)}
         />
         <button onClick={handleSearch}>Search</button>
       </div>

       {loading && <p className="loading">Loading...</p>}
       {error && <p className="error">{error}</p>}

       <div className="digimon-grid">
         {digimons.map((digimon, index) => (
           <div key={index} className="digimon-card">
             <img src={digimon.img} alt={digimon.name} />
             <h2>{digimon.name}</h2>
             <p>Level: {digimon.level}</p>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default DigimonHome;

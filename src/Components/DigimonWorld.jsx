// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import "/CSS/DigimonWorld.css"

// const DigimonWorld = () => {
//   // Hardcoded Digimon data
//   const [digimons, setDigimons] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch('https://digimon-api.vercel.app/api/digimon')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch Digimon data.");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setDigimons(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleSearch = () => {
//     if (!search) return;
//     setLoading(true);
//     fetch(`https://digimon-api.vercel.app/api/digimon/name/${search}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Digimon not found!");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setDigimons(Array.isArray(data) ? data : [data]);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="container">
//       <h1>Digimon Adventure</h1>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search Digimon by Name"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {loading && <p className="loading">Loading...</p>}
//       {error && <p className="error">{error}</p>}

//       <div className="digimon-grid">
//         {digimons.map((digimon, index) => (
//           <div key={index} className="digimon-card">
//             <img src={digimon.img} alt={digimon.name} />
//             <h2>{digimon.name}</h2>
//             <p>Level: {digimon.level}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default DigimonWorld;

import React from "react";
import { Routes, Route } from "react-router-dom";
import DigimonHeader from "./Components/DigimonHeader";
import DigimonHome from "./Components/DigimonHome";
// import DigimonWorld from "./Components/DigimonWorld";
import DigimonQuiz from "./Components/DigimonQuiz";
import DigimonAdventure from "./Components/DigimonAdventure";
// import Adventure from "./Components/Adventure";
// import Contact from "./Components/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <DigimonHeader />
      <Routes>
        <Route path="/" element={<DigimonHome />} />
        {/* <Route path="/digimonworld" element={<DigimonWorld/>} /> */}
        <Route path="/quiz" element={<DigimonQuiz/>} />
        <Route path="/adventure" element={<DigimonAdventure/>} />
        {/* Add more routes as needed */}
        {/* <Route path="/adventure" element={<Adventure />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};

export default App;

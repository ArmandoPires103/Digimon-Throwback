import React from "react";
import { Routes, Route } from "react-router-dom";
import DigimonHeader from "./Components/DigimonHeader";
import DigimonHome from "./Components/DigimonHome";
import DigimonQuiz from "./Components/DigimonQuiz";
import DigimonAdventure from "./Components/DigimonAdventure";
import "./App.css";

const App = () => {
  return (
    <>
      <DigimonHeader />
      <Routes>
        <Route path="/" element={<DigimonHome />} />
        <Route path="/quiz" element={<DigimonQuiz/>} />
        <Route path="/adventure" element={<DigimonAdventure/>} />
      </Routes>
    </>
  );
};

export default App;

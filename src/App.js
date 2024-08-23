import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DiceGame from "./components/DiceGame";
import DrumKit from "./components/DrumKit";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/dice-game" element={ <DiceGame /> } />
        <Route path="/drum-kit" element={ <DrumKit /> } />
      </Routes>
    </Router>
  );
}

export default App;

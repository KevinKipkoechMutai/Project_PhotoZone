//import logo from './logo.svg';
//import './App.css';
import React from "react";
import Card from './components/Card';
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Card />
    </div>
  );
}

export default App;

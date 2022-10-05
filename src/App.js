//import logo from './logo.svg';
//import './App.css';
import React from "react";
import Card from './components/Card';
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import data from "./components/data";
import Footer from "./components/Footer"


function App() {
  //displaying card information
  const cards = data.map((item) => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <NavBar />
      <HeroSection />
      <section className="cards-section">
        {cards}
      </section>
      
    </div>
  );
}

export default App;

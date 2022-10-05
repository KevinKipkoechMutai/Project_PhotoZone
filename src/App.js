//import logo from './logo.svg';
//import './App.css';
import React from "react";
//import Card from './components/Card';
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
//import data from "./components/data";
import Footer from "./components/Footer"
import PhotosPage from "./components/PhotosPage";


function App() {
  const [photoCollection, setPhotoCollection] = React.useState([]);
  const [checkPhotoCollection, setCheckPhotoCollection] = React.useState(false);

  //setting effects
  React.useEffect(() => {
    fetch("http://localhost:3000/photos")
      .then(res => res.json())
      .then(photos => {
        setPhotoCollection(photos);
      })
  }, [checkPhotoCollection])

  return (
    <div>
      <NavBar />
      <HeroSection />
      <PhotosPage />
      <Footer />
    </div>
  );
}

export default App;

//import logo from './logo.svg';
//import './App.css';
import React from "react";
//import Card from './components/Card';
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PhotosPage from "./components/PhotosPage";
//import data from "./components/data";
import Footer from "./components/Footer"



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
      <PhotosPage 
        photoCollection={photoCollection}
        setPhotoCollection={setPhotoCollection}
        setCheckPhotoCollection={setCheckPhotoCollection}
      />
      <Footer />
    </div>
  );
}

export default App;

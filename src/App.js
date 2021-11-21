import React from 'react';
import './sass/style.scss';
import Navigation from "./components/Navigation";
import Carousels from "./components/Carousels";
import Home from "./components/Home";
import Accordions from "./components/Accordions";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation/>
      <Carousels/>
      <Home />
      <Accordions />
      <Cards />
      <Footer />
    </>
  );
}

export default App;

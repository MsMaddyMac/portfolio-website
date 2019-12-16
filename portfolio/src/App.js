import React from 'react';
import Hero from './components/Hero';
import heroImage from './img/laptop.jpg';
import './App.css';

function App() {
  return (
    <div >
      <img className="hero-image" src={heroImage} alt="laptop" />
      <Hero />
    </div>
  );
}

export default App;

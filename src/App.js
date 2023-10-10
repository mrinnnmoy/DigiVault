import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import User from './components/User';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <User />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  )
};

export default App;
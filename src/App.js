import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Dashboard from './pages/Dashboard';

const App = () => {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
};

export default App;
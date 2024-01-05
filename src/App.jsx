import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Home, About, Services, Contact } from './components/pages';


function App() {
 return (
  <>
   <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  </>
   
 );
}

export default App;
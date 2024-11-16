import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Tugas6 from './tugas6/tugas6';
import Tugas7 from './tugas7/tugas7';
import Tugas8 from './tugas8/tugas8';
import Tugas9 from './tugas9/tugas9';
import Tugas10 from './tugas10/tugas10';
import Tugas11 from './tugas11/tugas11';
import Navbar from './Navbar'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Tugas6 />} />
          <Route path="/tugas7" element={<Tugas7 />} />
          <Route path="/tugas8" element={<Tugas8 />} />
          <Route path="/tugas9" element={<Tugas9 />} />
          <Route path="/tugas10" element={<Tugas10 />} />
          <Route path="/tugas11" element={<Tugas11 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

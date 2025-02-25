import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CaptureImageComponent from './Components/CaptureImageComponent.js';
import CaptureVideoComponent from './Components/CaptureVideoComponent.js';
import SelectMediaComponent from './Components/SelectMediaComponent.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/capture-image" element={<CaptureImageComponent />} />
          <Route path="/capture-video" element={<CaptureVideoComponent />} />
          <Route path="/select-media" element={<SelectMediaComponent />} />
          <Route path="/" element={
            <div className="home-container">
              <button className="home-button">
                <Link to="/capture-image">Capture Image</Link>
              </button>
              <button className="home-button">
                <Link to="/capture-video">Capture Video</Link>
              </button>
              <button className="home-button">
                <Link to="/select-media">Select Media</Link>
              </button>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
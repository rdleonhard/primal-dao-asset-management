import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactUsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

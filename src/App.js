import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <ContactPage />
    </div>
  );
}

export default App;

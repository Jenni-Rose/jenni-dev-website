// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap-icons/font/bootstrap-icons.css';


/**
 * Wraps site and sets up navigation and page routing.
 */
export default function App() {
  return (
    // Overall layout container for the app
    <div className="app-layout">
      {/* Site navigation bar at the top */}
      <NavBar />

      {/* Main content area where routed pages render */}
      <main className="app-content">
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the About page */}
          <Route path="/about" element={<About />} />
          {/* Route for the Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

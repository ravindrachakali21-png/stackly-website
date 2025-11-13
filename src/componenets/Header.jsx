import React, { useState } from "react";
import "../App.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <div className="logo-box">S</div>
          <h1>Stackly</h1>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <button className="btn">Get Started</button>
        </nav>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#help" onClick={toggleMenu}>Help</a>
          <button className="btn" onClick={toggleMenu}>Get Started</button>
        </div>
      )}
    </header>
  );
}

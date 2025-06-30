// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // kendi logo yolunu kullan
import '../styles/components/Navbar.css'; // Navbar için CSS dosyasını ekle

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/apod">Apod</Link>
        <Link to="/mars-photos">Mars Photos</Link>
        <Link to="/asteroids">Asteroids</Link>
        <Link to="/epic-images">Epic Images</Link>
        <Link to="/nasa-search">NASA Search</Link>
        <Link to="/solar-system">Explore</Link>
      </div>
    </nav>
  );
};

export default Navbar;

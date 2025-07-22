import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="hero">
      <nav className="navbar">
        <div className="logo">Balkan Gezi Rehberi</div>
        <ul className="nav-links">
          <li><a href="#countries">Ülkeler</a></li>
          <li><a href="#routes">Rotalar</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </nav>
      <h1>Balkanlar'ı Keşfedin!</h1>
      <p>En iyi seyahat rotaları ve önerilerle dolu rehber.</p>
      <a href="#routes" className="cta-button">Rotaları Keşfet</a>
    </header>
  );
}

export default Header;
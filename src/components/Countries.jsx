import React from 'react';
import './styles/Countries.css';
import ksamil from '../assets/images/ksamil.jpg';
import pristine from '../assets/images/pristine.jpg';
import sofia from '../assets/images/sofia.jpg';
import uskup from '../assets/images/uskup.jpg';


function Countries() {
  const countries = [
    { name: 'Arnavutluk', description: 'Belgrad\'ın tarihi sokaklarında kaybolun.', image: ksamil },
    { name: 'Kosova', description: 'Kotor\'un muhteşem kalesine tırmanın.', image: pristine },
    { name: 'Bulgaristan', description: 'Dubrovnik\'in büyüleyici sahilini keşfedin.', image: sofia },
    { name: 'Makedonya', description: 'Mostar Köprüsü\'nde büyülenin.', image: uskup },
  ];

  return (
    <section id="countries" className="section">
      <h2>Popüler Ülkeler</h2>
      <div className="countries-grid">
        {countries.map((country, index) => (
          <div className="country-card" key={index}>
            <img src={country.image} alt={country.name} className="country-image" />
            <h3>{country.name}</h3>
            <p>{country.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Countries;
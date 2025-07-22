import React from 'react';
import './styles/Routes.css';

function Routes() {
  const routes = [
    '7 Günlük Balkan Turu: Belgrad - Saraybosna - Mostar - Kotor',
    '5 Günlük Kültür Turu: Üsküp - Ohrid - Tiran',
    '3 Günlük Hızlı Kaçış: Selanik - Sofya',
  ];

  return (
    <section id="routes" className="section">
      <h2>Önerilen Rotalar</h2>
      <ul className="routes-list">
        {routes.map((route, index) => (
          <li key={index}>{route}</li>
        ))}
      </ul>
    </section>
  );
}

export default Routes;
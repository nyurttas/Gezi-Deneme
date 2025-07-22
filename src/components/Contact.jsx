import React from 'react';
import './styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>İletişim</h2>
      <p>Sorularınız ve önerileriniz için bize ulaşabilirsiniz.</p>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Adınız" required />
        <input type="email" name="email" placeholder="E-posta" required />
        <textarea name="message" placeholder="Mesajınız" rows="5" required></textarea>
        <button type="submit">Gönder</button>
      </form>
    </section>
  );
}

export default Contact;
import React from 'react';
import './App.css';
import Header from './components/Header';
import Countries from './components/Countries';
import Routes from './components/Routes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Countries />
        <Routes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
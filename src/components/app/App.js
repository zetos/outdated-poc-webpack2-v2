// Dependencies
import React from 'react';

// Components
import Header from '../header/Header.js';
import Content from '../content/Content.js';
import Footer from '../footer/Footer.js';

// Styles
import './App.scss';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

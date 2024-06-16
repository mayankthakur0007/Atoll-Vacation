import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selections from './components/Selections';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Features from './components/features';

const App = () => {
  return (
    <div className="font-['Caveat']">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Features />
      <Selections />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;

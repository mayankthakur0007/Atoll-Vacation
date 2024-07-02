import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selections from './components/Selections';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Features from './components/features';
import SelectionsD from './components/SelectionsD';

const App = () => {
  return (
    <div className="font-['Caveat']">
      <Navbar />
      <Hero />
      <Destinations />
      <Selections />
      <Search />
      <SelectionsD />
      <Features />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;

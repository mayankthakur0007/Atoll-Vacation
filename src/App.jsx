import React, { useState, createContext } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selections from './components/Selections';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Features from './components/features';
import SelectionsD from './components/SelectionsD';
import { PackageContext } from './context';

const App = () => {
  const [selectedPackage,setSelectedLocation] = useState('')
  const setLocation = (e)=>{
    setSelectedLocation(e);
  }

  return (
    <PackageContext.Provider
      value={{
        selectedPackage,
        setLocation,
      }}
    >
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
    </PackageContext.Provider>
  );
};

export default App;

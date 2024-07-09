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
import { AppContext } from './context';
import {Form} from './components/form'

const App = () => {
  const [selectedPackage,setSelectedLocation] = useState('')
  const setPackage=(e)=>{
    console.log(e);
    setSelectedLocation(e);
  }

  return (
    <AppContext.Provider value={{ selectedPackage, setPackage }}>
      <div className="font-['Caveat']">
        <Navbar />

        {selectedPackage ? (
          <Form />
        ) : (
          <>
            <Hero />
            <Destinations />
            <Selections />
            <Search />
            <SelectionsD />
            <Features />
            <Carousel />
          </>
        )}
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;

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

const App = () => {
  const [selectedPackage,setSelectedLocation] = useState('')
  const dispatchUserEvent = (actionType, payload) => {
		switch (actionType) {
			case 'SET':
				setSelectedLocation(payload);
				return;
			default:
				return;
		}
	};

  return (
    <AppContext.Provider>
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
    </AppContext.Provider>
  );
};

export default App;

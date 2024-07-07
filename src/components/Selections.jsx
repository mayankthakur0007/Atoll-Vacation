import React from 'react';

import Selection from './Selection';

import borabora1 from '../assets/bali.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives1 from '../assets/dubai.jpg';
import maldives2 from '../assets/europe.jpg';
import maldives3 from '../assets/maldives3.jpg';
import keywest from '../assets/keywest.jpg';

const Selections = () => {
  return (
    <>
      <div className="px-4 mb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-8 text-center">
          <h2 className="bg-black inline-block text-transparent bg-clip-text text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            {`Go International Destinations`}
          </h2>
        </div>
      </div>

      <section className="container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2">
        <Selection
          figure={borabora1}
          caption="Bali"
          duration="3N/4D"
          price="₹25,999"
        />
        <Selection
          figure={borabora2}
          caption="Maldives"
          duration="3N/4D"
          price="₹65,700"
        />
        <Selection
          figure={maldives1}
          caption="Dubai"
          duration="4N/5D"
          price="₹32,550"
        />
        <Selection
          figure={maldives2}
          caption="Europe"
          duration="2N/3D"
          price="₹59,400"
        />
        <Selection
          figure={maldives3}
          caption="Mauritius"
          duration="4N/5D"
          price="₹32,999"
        />
        <Selection
          figure={keywest}
          caption="Thailand"
          duration="4N/5D"
          price="₹15,999"
        />
      </section>
    </>
  );
};

export default Selections;

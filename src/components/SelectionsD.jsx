import React from 'react';

import Selection from './Selection';
import himachal from '../assets/himachal.jpg';
import rajasthan from '../assets/rajasthan.jpg';
import goa from '../assets/goa.jpg';
import leh from '../assets/leh.jpg';
import Kashmir from '../assets/kashmir.jpg';
import kerela from '../assets/kerela.jpg';

const SelectionsD = () => {
  return (
    <>
      <div class="px-4 mb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="px-8 text-center">
          <h2 class="bg-black inline-block text-transparent bg-clip-text text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            {`Go Domestic Destinations`}
          </h2>
        </div>
      </div>

      <section className="container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2">
        <Selection
          figure={himachal}
          caption="Himachal Pradesh"
          duration="3N/4D"
          price="₹14,999"
        />
        <Selection
          figure={rajasthan}
          caption="Rajasthan"
          duration="3N/4D"
          price="₹28,500"
        />
        <Selection
          figure={kerela}
          caption="Kerela"
          duration="4N/5D"
          price="₹15,500"
        />
        <Selection
          figure={goa}
          caption="Goa"
          duration="3N/4D"
          price="₹15,500"
        />
        <Selection
          figure={leh}
          caption="Leh"
          duration="5N/6D"
          price="₹18,310"
        />
        <Selection
          figure={Kashmir}
          caption="Kashmir"
          duration="4N/5D"
          price="₹14,999"
        />
      </section>
    </>
  );
};

export default SelectionsD;

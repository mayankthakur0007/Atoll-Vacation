import React from 'react';

import Selection from './Selection';

import borabora1 from '../assets/bali.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives1 from '../assets/dubai.jpg';
import maldives2 from '../assets/europe.jpg';
import maldives3 from '../assets/maldives3.jpg';
import keywest from '../assets/keywest.jpg';

const SelectionsD = () => {
  return (
    <>
      <div class="px-4 mb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="px-8 text-center">
          <h2 class="bg-black inline-block text-transparent bg-clip-text text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            {`Go Domestic`}
          </h2>
        </div>
      </div>

      <section className="container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2">
        <Selection
          figure={borabora1}
          caption="Himachal"
          duration="3N/4D"
          price="₹21,000"
        />
        <Selection
          figure={borabora2}
          caption="Rajasthan"
          duration="3N/4D"
          price="₹40,000"
        />
        <Selection
          figure={maldives1}
          caption="Kerela"
          duration="4N/5D"
          price="₹35,000"
        />
        <Selection
          figure={maldives2}
          caption="Goa"
          duration="3N/4D"
          price="₹77,000"
        />
        <Selection
          figure={maldives3}
          caption="Leh"
          duration="3N/4D"
          price="₹22,000"
        />
        <Selection
          figure={keywest}
          caption="Kashmir"
          duration="4N/5D"
          price="₹22,000"
        />
      </section>
    </>
  );
};

export default SelectionsD;

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
    <section className='container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2'>
      <Selection figure={borabora1} caption='Bali' duration="3N/4D" price="₹21,000" />
      <Selection figure={borabora2} caption='Maldives' duration="3N/4D" price="₹40,000"/>
      <Selection figure={maldives1} caption='Dubai' duration="4N/5D" price="₹35,000"/>
      <Selection figure={maldives2} caption='Italy' duration="3N/4D" price="₹77,000"/>
      <Selection figure={maldives3} caption='Mauritius' duration="3N/4D" price="₹22,000"/>
      <Selection figure={keywest} caption='Thailand' duration="4N/5D" price="₹22,000"/>
    </section>
  );
};

export default Selections;

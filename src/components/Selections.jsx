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
      <Selection figure={borabora1} caption='Bali' />
      <Selection figure={borabora2} caption='Maldives' />
      <Selection figure={maldives1} caption='Dubai' />
      <Selection figure={maldives2} caption='Europe' />
      <Selection figure={maldives3} caption='Mauritius' />
      <Selection figure={keywest} caption='Thailand' />
    </section>
  );
};

export default Selections;

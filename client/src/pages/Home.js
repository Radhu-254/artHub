import React from 'react';

// import components
import LatestProducts from '../components/LatestProducts.js';
import Hero from '../components/Hero.js';

const Home = () => {
  return (
    <section className='bg-slate-200'>
      <Hero />
      <LatestProducts/>
    </section>
  );
};

export default Home;

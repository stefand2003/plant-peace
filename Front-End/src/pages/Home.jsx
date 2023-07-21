import React from 'react';

import Hero from '../components/Hero/Hero';
import Grow from '../components/GrowPlants/Grow';
import Popular from '../components/Popular/Popular';
import Trending from '../components/Trending/Trending';
import Garden from '../components/Gardening/Garden';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Grow />
      <Popular />
      <Trending />
      <Garden />
      <Footer />
    </div>
  );
}

import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Putovanja from '../Putovanja';
import Footer from '../Footer';
function Home() {
  return (
    <>
      <HeroSection />
      <Putovanja />
      <Footer />
    </>
  );
}

export default Home;
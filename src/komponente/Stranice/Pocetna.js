import React from 'react';
import '../../App.css';
import VideoSnimak from '../VideoSnimak';
import Putovanja from '../Putovanja';
import Footer from '../Footer';
function Home() {
  return (
    <>
      <VideoSnimak />
      <Putovanja />
      <Footer />
    </>
  );
}

export default Home;
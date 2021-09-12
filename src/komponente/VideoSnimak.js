import React from 'react';
import '../App.css';
import { Button } from './Dugme';
import './VideoSnimak.css';

function VideoSnimak() {
  return (
    <div className='video-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Zelite provod?</h1>
      <p>Havaji su mala beba sta vas ceka u Srbiji!</p>
      <div className='video-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PRIJAVITE SE!
        </Button>
        
      </div>
    </div>
  );
}

export default VideoSnimak;
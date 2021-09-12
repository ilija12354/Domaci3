import React from 'react';
import './Putovanja.css';
import Putovanje from './IndividualnoPutovanje';

function Putovanja() {
  return (
    <div className='putovanje'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='putovanje__container'>
        <div className='putovanje__wrapper'>
          <ul className='putovanje__items'>
            <Putovanje
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <Putovanje
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='putovanje__items'>
            <Putovanje
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <Putovanje
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <Putovanje
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Putovanja;
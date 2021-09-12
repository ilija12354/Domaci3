import React from 'react';
import './Putovanja.css';
import Putovanje from './IndividualnoPutovanje';

function Putovanja() {
  return (
    <div className='putovanje'>
      <h1>Pogledajte fenomenalne lokacije u Srbiji!</h1>
      <div className='putovanje__container'>
        <div className='putovanje__wrapper'>
          <ul className='putovanje__items'>
            <Putovanje
              src='images/img-9.jpg'
              text='Dodjite u Pancevo na svez vazduh'
              label='Pancevo!'
              path='/services'
            />
            <Putovanje
              src='images/img-2.jpg'
              text='Gradski prevoz je odlican!'
              label='Beograd!'
              path='/services'
            />
          </ul>
          <ul className='putovanje__items'>
            <Putovanje
              src='images/img-3.jpg'
              text='Apsolutno nebitan grad!'
              label='Kraljevo'
              path='/services'
            />
            <Putovanje
              src='images/img-4.jpg'
              text='Love fest i nista vise'
              label='Vrnjacka banja'
              path='/products'
            />
            <Putovanje
              src='images/img-8.jpg'
              text='Moje selo lepse od Pariza'
              label='Grdica'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Putovanja;
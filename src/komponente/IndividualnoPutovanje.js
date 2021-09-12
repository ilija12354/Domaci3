import React from 'react';
import { Link } from 'react-router-dom';

function Putovanje(props) {
  return (
    <>
      <li className='putovanje__item'>
        <Link className='putovanje__item__link' to={props.path}>
          <figure className='putovanje__item__pic-wrap' data-category={props.label}>
            <img
              className='putovanje__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='putovanje__item__info'>
            <h5 className='putovanje__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Putovanje;
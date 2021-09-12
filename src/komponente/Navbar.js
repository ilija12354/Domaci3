import React, { useState, useEffect } from 'react';
import { Button } from './Dugme';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const klikStanje = () => setClick(!click);
  const zatvoriMeni = () => setClick(false);

  const prikaziMeni = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    prikaziMeni();
  }, []);

  window.addEventListener('resize', prikaziMeni);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={zatvoriMeni}>
            GrdicaTravel
            <i class="fas fa-swimmer"></i>
          </Link>
          <div className='menu-icon' onClick={klikStanje}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={zatvoriMeni}>
                Pocetna
              </Link>
            </li>

            <li>
              <Link
                to='/prijava'
                className='nav-links-mobile'
                onClick={zatvoriMeni}
              >
                Prijavite se!
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>  Prijavite se!</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
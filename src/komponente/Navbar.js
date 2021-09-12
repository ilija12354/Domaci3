import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Buttom, Button, Dugme } from './Dugme';
function Navbar() {
    const[click,setClick]=useState(false);
    const[button,setButton]=useState(true);

    const funkcija1=()=>setClick(!click);
    const funkcija2=()=>setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener('resize',showButton);
    return (
        <div>
            <navbar className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        Ilija<i className='fab fa-typo3'/>
                    </Link>
                    <div className="manu-ikonica" onClick={funkcija1}>
                        <i className={click ? 'fas fa-times':'fas fa-angle-down'}/>  
                    </div>
                    <ul className={click? 'nav-menu active' : 'nav-manu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={funkcija2}>
                                Nesto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={funkcija2}>
                                Nesto2
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/registrujte-se' className='nav-links-mobile' onClick={funkcija2}>
                                Registrujte se
                            </Link>
                        </li>
                    </ul>
                    {Button && <Button buttonStyle='btn--outline'>Registrujte se</Button>}
                </div>
            </navbar>
        </div>
    )
}

export default Navbar

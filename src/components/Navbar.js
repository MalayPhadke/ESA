import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
// import esa from '../images/AICTE.png';

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false)
    props.setRenderTeam(false);
  };
  const showTeam = () => {
    setClick(false);
    props.setRenderTeam(true);
  }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            EESA
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink to='#home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                to='#about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                to='#events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                to='#contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                to='#team'
                className='nav-links'
                onClick={showTeam}
              >
                Team
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
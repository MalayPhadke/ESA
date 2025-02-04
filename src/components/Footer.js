import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='copyright'>
          &copy; E-ESA SPIT 2022 All rights reserved.
        </div>
        <div className='contact'>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className='credits'>Developed By: <a href="https://www.linkedin.com/in/malay-phadke/">Malay Phadke</a></div>
    </div>
  )
}

export default Footer;
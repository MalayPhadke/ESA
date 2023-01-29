import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Banner.css';
import video from '../images/circuit.mp4';

function Banner() {
  return (
    <section id="home">
    <div className='hero-container'>
      <video src={video} autoPlay loop muted/>
      <p>We Are</p>
      <div class="display">
        <span class="span-1">Electronics</span>&nbsp;<span class="span-2">Student's</span>&nbsp;<span class="span-3">Association</span>
      </div>
      {/* <div class="bulb-hover">
        <div class="bulb-area1"></div>
        <div class="bulb-area2"></div>    
      </div> */}
    </div>
    </section>
  );
}

export default Banner;
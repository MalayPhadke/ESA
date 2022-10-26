import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Banner.css';
import video from '../images/circuit.mp4';

function Banner() {
  return (
    <div className='hero-container' id="home">
      <video src={video} autoPlay loop muted/>
      <h1>We Are Electronics Student's Association</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default Banner;
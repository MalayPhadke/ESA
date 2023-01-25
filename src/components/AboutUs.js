import React from 'react'
import "./AboutUs.css";
import aicte from "../images/AICTE.png";
import spices from "../images/SPICES.png";
import esa from "../images/esa.png"
function AboutUs() {
  return (
    <section id="about">
    <div className='about-container'>
        <h1 className='reveal'>About E-ESA</h1>
          {/* <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span></span> */}
        <div className='content reveal'>
          <p>
          The Electronics Students Association (ESA) organizes a range of activities throughout the year. Its technical paper-presentation contests, sports events and cultural activities are marked by active participation. Guest lectures by eminent personnel from industry are also conducted. Our students from Electronics Department were ranked third at the national level robotics competition in “Robocon 2005″ and they put up a good performance in 2006, 2007 and 2008 as well.
          Students are constantly motivated to take up challenging tasks and engage in practical problem solving. They actively participate in the events conducted by organizations like the IEEE and update their knowledge in the field of their interest
          </p>
        </div>
        <div className='logos reveal'>
          <img src={aicte} alt="AICTE"/>
          <img src={esa} alt="ESA"/>
          <img src={spices} alt="SPICES"/>
        </div>
    </div>
    </section>
  )
}

export default AboutUs;
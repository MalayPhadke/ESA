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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus architecto impedit aperiam a, ex minima distinctio veniam harum voluptates illo vitae natus est obcaecati molestiae mollitia praesentium quos officiis vel.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem animi odit necessitatibus velit corrupti vero, iure quae itaque eius veritatis eaque quibusdam magnam iusto eos amet cumque eligendi et?
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
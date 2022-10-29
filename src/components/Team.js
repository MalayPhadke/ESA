import React from 'react'
import "./Team.css";
import "./Team.scss";
import TeamContainer from './TeamContainer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Team(props) {
  const closeTeam = () => {
    props.setRenderTeam(false);
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='container' id='team'>
        <h1>Team<div className="close-container" onClick={closeTeam}>
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div></h1>
      <div className="img-container">
      <Carousel responsive={responsive}  swipeable={true}  draggable={true} showDots={true}
       infinite={true} removeArrowOnDeviceType={['tablet', 'mobile']}>
        <TeamContainer text={"Chairperson"} info={"Chetan Patil"} num={1}/>
        <TeamContainer text={"Vice Chairperson"} info={"Omkar Lokre"}num={2}/>
        <TeamContainer text={"Technical Head"} info={"Malay Phadke"}num={3}/>
        <TeamContainer text={"Technical Head"} info={"Sonu Sahu"}num={4}/>
        <TeamContainer text={"Technical Head"} info={"Saket Lad"}num={5}/>
        <TeamContainer text={"Finance Head"} info={"Om Patil"}num={6}/>
        <TeamContainer text={"Secretary"} info={"Mayuresh Pitale"}num={7}/>
      </Carousel>
      <div className='swipe'>Swipe for More <i className="fa-solid fa-arrow-right" /></div>
      </div>
      <div className="faculty">
        <h3>Our Faculty Coordinatiors</h3>
        <div className="content">
        </div>
      </div>
    </div>
  )
}

export default Team
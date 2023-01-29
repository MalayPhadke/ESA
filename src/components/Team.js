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
        <TeamContainer text={"Joint Secretary"} info={"Mayuresh Pitale"}num={3}/>
        <TeamContainer text={"Joint Secretary"} info={"Gandhar Kulkarni"}num={4}/>
        <TeamContainer text={"Technical Head"} info={"Malay Phadke"}num={5}/>
        <TeamContainer text={"Technical Head"} info={"Sonu Sahu"}num={6}/>
        <TeamContainer text={"Technical Head"} info={"Saket Lad"}num={7}/>
        <TeamContainer text={"Technical Head"} info={"Soham Kapadi"}num={8}/>
        <TeamContainer text={"Event Head"} info={"Yash Ugale"}num={9}/>
        <TeamContainer text={"Event Head"} info={"Bhavisha Chafekar"}num={10}/>
        <TeamContainer text={"Finance Head"} info={"Om Patil"}num={11}/>
        <TeamContainer text={"Finance Head"} info={"Pratham Gajapure"}num={12}/>
        <TeamContainer text={"Public Relations Head"} info={"Sanchit Patil"}num={13}/>
        <TeamContainer text={"Public Relations Head"} info={"Prathamesh"}num={14}/>
        <TeamContainer text={"Head of Operations"} info={"Meetesh"}num={15}/>
        <TeamContainer text={"Head of Operations"} info={"Varun Vangala"}num={16}/>
        <TeamContainer text={"Head of Marketing"} info={"Malvika Kanady"}num={17}/>
        <TeamContainer text={"Head of Marketing"} info={"Sarvesh Birla"}num={18}/>
        <TeamContainer text={"Subcom Head"} info={"Prathamesh Kapoor"}num={19}/>
        <TeamContainer text={"Subcom Head"} info={"Sridhar Sundar"}num={20}/>
        <TeamContainer text={"Social Media Head"} info={"Jiya Mehta"}num={21}/>


      </Carousel>
      <div className='swipe'>Swipe for More <i className="fa-solid fa-arrow-right" /></div>
      </div>
      {/* <div className="faculty">
        <h3>Our Faculty Coordinatiors</h3>
        <div className="content">
        </div>
      </div> */}
    </div>
  )
}

export default Team
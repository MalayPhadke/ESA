import React from 'react'
import "./Team.css";
import "./Team.scss";
import TeamContainer from './TeamContainer';


function Team(props) {
  const closeTeam = () => {
    props.setRenderTeam(false);
  }
  return (
    <div className='container' id='team'>
        <h1>Team<div className="close-container" onClick={closeTeam}>
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div></h1>
      <div className="img-container">
        <TeamContainer text={"Chairperson"} info={"Chetan Patil"} num={1}/>
        <TeamContainer text={"Vice Chairperson"} info={"Omkar Lokre"}num={2}/>
        <TeamContainer text={"Technical Head"} info={"Malay Phadke"}num={3}/>
        <TeamContainer text={"Technical Head"} info={"Sonu Sahu"}num={4}/>
        <TeamContainer text={"Technical Head"} info={"Saket Lad"}num={5}/>
        <TeamContainer text={"Finance Head"} info={"Om Patil"}num={6}/>
        <TeamContainer text={"Secretary"} info={"Mayuresh Pitale"}num={7}/>
        
      </div>
    </div>
  )
}

export default Team
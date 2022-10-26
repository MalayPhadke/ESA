import React from 'react'
import "./Team.css";
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
        <div className="image-container">
        <TeamContainer src={require("../images/team/chaiperson.jpg")} content="Chairperson" />
        <TeamContainer src={require("../images/team/vice chaiperson.jpg")} content="Vice Chairperson" />
        <TeamContainer src={require("../images/team/tech1.jpg")} content="Technical Head" />
        <TeamContainer src={require("../images/team/tech2.jpg")} content="Technical Head" />
        <TeamContainer src={require("../images/team/tech3.jpg")} content="Technical Head" />
        <TeamContainer src={require("../images/team/finance1.jpg")} content="Finance Head" />
        <TeamContainer src={require("../images/team/secretary1.jpg")} content="Secretary" />
        </div>
      </div>
  )
}

export default Team
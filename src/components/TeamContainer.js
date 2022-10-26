import React from 'react'

function TeamContainer(props) {
  return (
    <div className="info">
          <img src={props.src} alt="team"/>
          <div className="overlay"><div className="text">{props.content}</div></div>
    </div>
  )
}

export default TeamContainer
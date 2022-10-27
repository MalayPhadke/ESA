import React from 'react'

function TeamContainer(props) {

  return (
    <div className={`badge-${props.num} reveal-team`}>
          <div className="text">
            {props.text}
            <p>{props.info}</p>
            <a href='/1'><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div className='info'></div>
    </div>
    
  )
}

export default TeamContainer
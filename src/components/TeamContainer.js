import React from 'react'

function TeamContainer(props) {

  return (
    <div className={`badge-${props.num} slide`}>
          <div className="text">
            {props.text}
            <p>{props.info}</p>
            <a href='#111'><i class="fa-brands fa-linkedin"></i></a>
          </div>
    </div>
    
  )
}

export default TeamContainer
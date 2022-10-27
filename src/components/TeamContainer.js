import React, { useEffect } from 'react'

function TeamContainer(props) {
  const isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight
  const resizeText = ({ element, elements, minSize = 10, maxSize = 512, step = 1, unit = 'px' }) => {
    (elements || [element]).forEach(el => {
    let i = minSize
    let overflow = false
    const parent = el.parentNode
    while (!overflow && i < maxSize) {
        el.style.fontSize = `${i}${unit}`
        overflow = isOverflown(parent)
        if (!overflow) i += step
    }

    // revert to last state where no overflow happened
      el.style.fontSize = `${i - step}${unit}`
    })
  }
  
  return (
    <div className={`badge-${props.num}`}>
          <div className="text">
            {props.text}
            <p>{props.info}</p>
            <a href=''><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div className='info'></div>
    </div>
    
  )
}

export default TeamContainer
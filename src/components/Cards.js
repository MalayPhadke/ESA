import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import event1 from "../images/AICTE.png";
import event2 from "../images/SPICES.png";

function Cards() {
  return (
    <div className='cards' id='events'>
      <h1 className='reveal'>Check out our Upcoming Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items reveal'>
            <CardItem
              src={event1}
              text='Join with your friends for fun day of simulation, testing and troubleshooting'
              label='Tech Hunt'
              path='/events'
            />
            <CardItem
              src={event2}
              text='Think you are have good knowledge of circuit? Compete with others to show them whos best!'
              label='Tech KBC'
              path='/events'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
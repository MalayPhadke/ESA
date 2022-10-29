import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='events'>
      <h1 className='title reveal'>Check out our Upcoming Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items reveal'>
            <CardItem
              src=""
              label="Technical"
              text='Join with your friends for fun day of simulation, testing and troubleshooting'
              title='Tech Hunt'
              path='/events'
            />
            <CardItem
              src=""
              label="Technical"
              text='Think you are have good knowledge of circuit? Compete with others to show them whos best!'
              title='Tech KBC'
              path='/events'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
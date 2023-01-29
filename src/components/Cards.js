import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <section id='events'>
    <div className='cards'>
      <h1 className='title reveal'>Check out our Latest Events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items reveal'>
            <CardItem
              src=""
              label="Technical"
              text='Join with your friends for fun day of simulation, testing and troubleshooting'
              title='Techno Hunt'
              path='/techno-hunt'
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
      <h1 className="title reveal"><a href="/all-events">Show all Events <i className="fa-solid fa-arrow-right" /></a></h1>
    </div>
    </section>
  );
}

export default Cards;
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import innovation from "./innovation.png";

function Cards() {
  return (
    <section id='events'>
    <div className='cards'>
      <h1 className='title reveal'>Check out our Latest Events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items reveal'>
          <CardItem
              src={innovation}
              label="Technical"
              text='A competition dedicated to
              promoting innovation and creativity in hardware design. We invite all
              hardware design enthusiasts, engineers, and makers'
              title="Innovation Cup'23"
              path='/innovation'
            />
            <CardItem
              src=""
              label="Technical"
              text='Join with your friends for fun day of simulation, testing and troubleshooting'
              title='Techno Hunt'
              path='/techno-hunt'
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
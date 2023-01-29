import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Event'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h1 className='cards__item__title'>{props.title}</h1>
            <h5 className='cards__item__text'>{props.text}</h5>
            <button><a href={props.path} className="cards__item__link">Learn More</a></button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
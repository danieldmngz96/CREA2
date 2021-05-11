import React from 'react';
import { Link } from 'react-router-dom';
import { IoLaptopOutline } from 'react-icons/io5';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import '../styles/components/priceCard.css';

const PriceCard = ({ title, price, items }) => {
  return (
    <div className='PriceCard'>
      <header className='PriceCard__header'>
        <div className='PriceCard__header--info'>
          <span><IoLaptopOutline size={25} /></span>
          <p>{title}</p>
        </div>
        <h2>{price} <span>usd</span></h2>
      </header>
      <main className='PriceCard__body'>
        <ul className='PriceCard__body--list'>
          {items?.map((item) => (
            <li key={item}>
              <span><HiOutlineCheckCircle /></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </main>
      <footer className='PriceCard__footer'>
        <Link to='/'>Comprar</Link>
      </footer>
    </div>
  );
}

export default PriceCard;
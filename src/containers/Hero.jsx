import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/hero.png';
import '../styles/containers/hero.css';

const Hero = () => {
  return (
    <section className='Hero'>
      <div className='Hero__container'>
        <h1>Esto es un landing creado con amor</h1>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed dicta modi voluptas culpa autem blanditiis facilis enim voluptatem suscipit eveniet doloremque soluta, minus tempora tempore itaque fuga nulla nisi.</h6>
      </div>
      <div className='Hero__container--links'>
          <Link to='/'>Perzonaliza tu plan</Link>
          <Link to='/'>Iniciar sesión</Link>
        </div>
      <figure className='Hero__image'>
        <img src={Image} alt='' />
      </figure>
      <div className="custom-shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
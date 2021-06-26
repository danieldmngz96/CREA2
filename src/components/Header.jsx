import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/components/header.css';

const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__logo'>
        <figure className='Header__logo--image'>
          <Link to='/'> <img src={Logo} alt='Logo Crea' /></Link>
        </figure>
        <p>CREA</p>
      </div>
      <nav className='Header__nav'>
        <Link to='/'>Inicio</Link>
        <Link to='/'>Precios</Link>
        <Link to='/'>Contacto</Link>
        <Link exact to='/Registry'>Registrate</Link>
      </nav>
      <nav className='Header__links'>
        <Link to='/login'>Iniciar sesión</Link>
      </nav>
    </header>
  );
}

export default Header;
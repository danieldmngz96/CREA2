import React from 'react';
//import PriceCard from '../components/PriceCard';
//import Hero from '../containers/Hero';
import '../styles/pages/planes.css';

const Planes = () => {
    return (
    <div>
   
    <h1 className='title__one'>Solo te falta un Paso <br/> 
    para adquirir tu Plan</h1>

    <section className='box__main' >
    <form className="position__input"> 
    <label>
     <input type="text" placeholder="Nombre"  />
      </label>

      <label>
     <input type="text" placeholder="Usuario"  />
      </label>
      
      <label>
     <input type="password" placeholder="Password"  />
      </label>

      <label>
     <input type="text" />
      </label>
    </form>
    </section>
    </div>
      
    
  
    );
}

export default Planes;
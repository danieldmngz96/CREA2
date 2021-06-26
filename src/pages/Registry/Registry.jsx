import React from 'react';
//import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/pages/Registry/Registry.css';
import Stepper from '../../components/Stepper';
//import WhoYouAre from '../../components/WhoYouAre';

const Registry = () => {
  return (

    <section className='Home__Registry '>
      <div className="Position__Registry--one">
      <div className="Position__Registry--two ">
       <h3 className="title__registry">Bienvendio a Registro</h3>
         <p className="text__registry"> A continuacion selecciona una opcion:</p>
         </div>
      <div className="Position__Registry--three ">
        <div className="Stepper">
          <Stepper ></Stepper>
          
          </div>
       
       
        {/*<Link className="" to="/badges">
        Continuar
        </Link>*/}
          
      </div>
      
         </div>
    
     
    </section>
  );
}

export default Registry;
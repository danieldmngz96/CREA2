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
      <input type="number" placeholder="Numero " min="1" max="5"/>
      </label>


    <section className='main__checkbox'>
      <label>
      <input type="checkbox" value="Pagina Web"/>
      <p> Pagina Web</p></label>

      <label>
      <input type="checkbox" value="Administración Paginas Web"/>
      <p> Administración Paginas Web</p></label>

      <label>
      <input type="checkbox" value="Marketing Digital "/>
      <p> Marketing Digital </p></label>

      <label>
      <input type="checkbox" value="Número de publicaciones"/>
      <p> Número de publicaciones</p></label>

      <label>
      <input type="checkbox" value="Pasarela de pagos (E-commerce)"/>
      <p> Pasarela de pagos (E-commerce)</p></label>

      <label>
      <input type="checkbox" value="Formularios de búsqueda"/>
      <p> Formularios de búsqueda</p></label>
    <button className="boton_comprar">Comprar</button>
    </section>


      <section className='box__value'>
      <h3 className='title__value'>VALOR TOTAL <br/> MENSUAL</h3>
      <div className='position__paragraph'>
        <p className='paragraph__web'>Pagina web - $...</p><br/>
        <p className='paragraph__digital'>Marketing digital - $...</p><br/>
        <p className='paragraph__pagos'>Pasarela de pagos - $...</p><br/>
        </div>
      </section>
    </form>

  </section>
  
</div>
      
    
  
    );
}

export default Planes;
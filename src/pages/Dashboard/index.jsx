import React from 'react';
import '../../styles/pages/Dashboard/index.css';


const Dashboard = () => {
  return (
    <section>
      <h1>Bienvenido a CREA DESARROLLO </h1>
      <div className="container">
        <div className="calendar">
        <p>probando</p>
        </div>
        <div className="pay">
        <a href="https://wa.me/?text=Me%20gustaría%20saber%20más%20sobre%20mi%20proyecto" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
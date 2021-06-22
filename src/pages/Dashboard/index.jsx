import React, { useState } from 'react';
import '../../styles/pages/Dashboard/index.css';
import ProgressBar from '../../components/ProgressBar';
import Calendar from '../../components/Calendar';
import NextPay from '../../components/NextPay';
import TotalPayments from '../../components/TotalPayments';
import PaidStatus from '../../components/PaidStatus';
const Dashboard = () => {
  const [state, setState] = useState({
    fecha: new Date('2020', '11', '18'),
  });

  const onChange = (fecha) => {
    setState({ fecha: fecha });
  };

  const name__user = 'Daniel';

  return (
    <>
      <section>
        <h1>{name__user} Bienvenido a CREA DESARROLLO </h1>
        {/* <div className="container"> */}
        <div className='calendar'>
          <h1 className='calendar__title'>CALENDARIO</h1>
          <div className='position__calendar'>
            <p>{name__user} Agenda tu proxima reunion:</p>
            <Calendar></Calendar>
            <div className='advance'>
              <p>Avance proyecto</p>
              <ProgressBar></ProgressBar>
              <div className='position__pay'>
                <p>Total de pagos</p>
                <TotalPayments></TotalPayments>
              </div>
              <div className='paid__status'>
                <h3>ESTADO DE PAGO</h3>
                <PaidStatus></PaidStatus>
              </div>
            </div>
          </div>
        </div>
        <div className='pay'>
          <p className='text__nextpay'> Info del proyecto</p>
          <NextPay></NextPay>
          <a
            href='https://wa.me/?text=Me%20gustaría%20saber%20más%20sobre%20mi%20proyecto'
            class='whatsapp'
            target='_blank'
          >
            {' '}
            <i class='fa fa-whatsapp whatsapp-icon'></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

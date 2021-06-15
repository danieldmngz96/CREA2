import React from 'react';
import '../../styles/pages/Dashboard/Schedule.css';

const Schedule = () => {
  return (
    <section>
      <h1>Schedule</h1>
      <a
        href='https://wa.me/?text=Me%20gustaría%20saber%20más%20sobre%20mi%20proyecto'
        className='whatsapp'
        target='_blank'
      >
        {' '}
        <i className='fa fa-whatsapp whatsapp-icon'></i>
      </a>
    </section>
  );
};

export default Schedule;

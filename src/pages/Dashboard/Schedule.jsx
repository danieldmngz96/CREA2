import React from 'react';
import '../../styles/pages/Dashboard/Schedule.css';
import CalendarBig from '../../components/CalendarBig';

const Schedule = () => {
  return (
    <section>
      <h1>Calendario</h1>
      <div className="position__CalendarBig">
        <h4>Aqui podras encontrar todas las actividades:</h4>
      <CalendarBig></CalendarBig>
      </div>
      <a href="https://wa.me/?text=Me%20gustaría%20saber%20más%20sobre%20mi%20proyecto" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    </section>
  );
};

export default Schedule;

import React ,{useState} from 'react';
import '../../styles/pages/Dashboard/Schedule.css';


const Schedule = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section >
      <div className="position__CalendarBig">
        <div className="wrapper">
          <main>
          <h1>Calendario</h1>
          <h4>Aqui podras encontrar todas las actividades y reuniones:</h4>
            <div className="toolbar">
            <div className="toggle">
              <div className="toggle__option">Semana</div>
              <div className="toggle__option toggle__option--selected">Mes
              </div>
              <div className="current-month">Diciembre 2020</div>
              <div className="search-input">
              <input type="text" value="¿Que actividad deseas buscar?"/>
               <i className="fa fa-search"></i>
              </div>
             </div> 
             <div className="calendar">
             <div className="calendar__header">
                <div>Lunes</div>
                <div>Martes</div>
                <div>Miercoles</div>
                <div>Jueves</div>
                <div>Viernes</div>
                <div>Sabado</div>
                <div>Domingo</div>
              </div>
              <div className="calendar__week">
                <div className="calendar__day day">1</div>
                <div className="calendar__day day">2</div>
                <div className="calendar__day day">3</div>
                <div className="calendar__day day">4</div>
                <div className="calendar__day day">5</div>
                <div className="calendar__day day">6</div>
                <div className="calendar__day day">7</div>
              </div>
              <div className="calendar__week">
                <div className="calendar__day day">8</div>
                <div className="calendar__day day">9</div>
                <div className="calendar__day day">10</div>
                <div className="calendar__day day">11</div>
                <div className="calendar__day day">12</div>
                <div className="calendar__day day">13</div>
                <div className="calendar__day day">14</div>        
              </div>
              <div className="calendar__week">
                <div className="calendar__day day">15</div>
                <div className="calendar__day day">16</div>
                <div className="calendar__day day">17</div>
                <div className="calendar__day day">18</div>
                <div className="calendar__day day">19</div>
                <div className="calendar__day day">20</div>
                <div className="calendar__day day">21</div>    
              </div>
              <div className="calendar__week">
                <div className="calendar__day day">22</div>
                <div className="calendar__day day">23</div>
                <div className="calendar__day day">24</div>
                <div className="calendar__day day">25</div>
                <div className="calendar__day day">26</div> 
                <div className="calendar__day day">27</div> 
                <div className="calendar__day day">28</div> 
              </div>
              <div className="calendar__week">
                <div className="calendar__day day">29</div>
                <div className="calendar__day day">30</div>
                <div className="calendar__day day">31</div>
                <div className="calendar__day day">1</div>
                <div className="calendar__day day">2</div>
                <div className="calendar__day day">3</div>
                <div className="calendar__day day">4</div>
              </div>


             </div>
            </div>
          </main>
        </div>
      </div>
      <a href="https://wa.me/?text=Me%20gustaría%20saber%20más%20sobre%20mi%20proyecto" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    </section>
  );
};

export default Schedule;

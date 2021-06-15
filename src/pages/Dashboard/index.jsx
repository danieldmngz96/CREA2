import React , {useState} from 'react';
import '../../styles/pages/Dashboard/index.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Dashboard = () => {
  const [state, setState] = useState({
    fecha: new Date("2020","11","18")
  });

  const onChange=fecha=>{
    setState({fecha: fecha});
  }

  return (
    <>
    <section>
      <h1>Bienvenido a CREA DESARROLLO </h1>
      <div className="container">
        <div className="calendar">
        <h1 className="calendar__title">CALENDARIO</h1>
        <p>Aqui podras ver y agendar tu proxima reunion.</p>
          <DatePicker selected={state.fecha} onChange={ (d)=>onChange(d)}/>
        </div>
        <div className="pay">
          <p>Proximo pago</p>
          <p>Avance proyecto</p>
        <a href="https://wa.me/?text=Me%20gustaría%20saber%20más%20sobre%20mi%20proyecto" className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>
        </div>
      </div>
    </section>
    </>
  );
}

export default Dashboard;
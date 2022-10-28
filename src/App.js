import React, {Fragment, useState, useEffect} from 'react'
import { Form } from './components/Form';
import { Appointment } from './components/Appointment';

function App() {

  //citas en el local storage
  /*let appointmentInit = JSON.parse(localStorage.getItem('appointments'));
  if(!appointmentInit) {
    appointmentInit = [];
  } */

  //array de citas
const [appointments, saveAppointment] = useState([]);


//useEfect para realizar ciertas operaciones cuando el state cambia
/*useEffect(() => {
  let appointmentInit = JSON.parse(localStorage.getItem('appointments'));

  if(appointmentInit){
    localStorage.setItem('appointments', JSON.stringify(appointments))
  } else {
    localStorage.setItem('appointments', JSON.stringify([]));
  }
}, [appointments]); */


//funcion que tome las citas actuales y agregue la nueva 
const createAppointment = appointment => {
  saveAppointment([
    ...appointments, 
    appointment
  ]);
}
//funcion que elimina una cita por su id 
const deleteAppointment = id => {
  const newAppointment = appointments.filter(appointment => appointment.id !== id);
  saveAppointment(newAppointment)
}

//mensaje condicional
const title = appointments.length === 0 ? 'no dating' : 'manage your appointments';


  return (
    <Fragment>
      <h1>Medical Appointment Manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
            createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
          <h2>{title}</h2>
          {appointments.map(appointment =>
            <Appointment
            key={appointment.id}
            appointment={appointment}
            deleteAppointment={deleteAppointment}
            />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import React, {Fragment, useState} from 'react'
import { Form } from './components/Form';
import { Appointment } from './components/Appointment';

function App() {

const [appointments, saveAppointment] = useState([]);

const createAppointment = appointment => {
  saveAppointment([
    ...appointments, 
    appointment
  ]);
}

const deleteAppointment = id => {
  const newAppointment = appointments.filter(appointment => appointment.id !== id);
  saveAppointment(newAppointment)
}

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

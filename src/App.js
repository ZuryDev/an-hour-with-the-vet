import React, {Fragment, useState} from 'react'
import { Form } from './components/Form';

function App() {

const [appointments, saveAppointment] = useState([]);

const createAppointment = appointment => {
  saveAppointment([
    ...appointments, 
    appointment
  ]);
}

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
          scheduled appointments
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

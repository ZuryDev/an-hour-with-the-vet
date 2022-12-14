import React from 'react'

export const Appointment = ({appointment, deleteAppointment}) => {
  return (
    <div className='appointment'>
        <p>Pet:<span>{appointment.pet}</span></p>
        <p>Owner:<span>{appointment.owner}</span></p>
        <p>Date:<span>{appointment.date}</span></p>
        <p>Hour:<span>{appointment.hour}</span></p>
        <p>Symptoms:<span>{appointment.symptoms}</span></p>

        <button
        className="button delete u-full-width"
        onClick={ () => deleteAppointment(appointment.id)}
        >Delete &times;</button>
    </div>
  );
}

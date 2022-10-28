import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Form = ({createAppointment}) => {
  const [appointments, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    hour: "",
    symptoms: "",
    id: "",
  });
  const [ error, setError] = useState(false);

  const updateStatus = (e) => {
    setAppointment({
      ...appointments,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, date, hour, symptoms } = appointments;

  const submitAppointment = (e) => {
    e.preventDefault();

    if(pet.trim() === '' ||
       owner.trim() === '' ||
       date.trim() === '' ||
       hour.trim() === '' ||
       symptoms.trim() === '' ){
        setError(true);
        return;
    }

    setError(false);

    appointments.id = uuidv4();

    createAppointment(appointments);
    


  };

  return (
    <Fragment>
      <h2>create appointment</h2>

      {error ? <p className="alert-error">ERROR! <br></br>all data is required</p> :null}

      <form onSubmit={submitAppointment}>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={updateStatus}
          value={pet}
        />
        <label>Pet owner name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Pet owner name"
          onChange={updateStatus}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateStatus}
          value={date}
        />
        <label>Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={updateStatus}
          value={hour}
        />
        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={updateStatus}
          value={symptoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          save appointment
        </button>
      </form>
    </Fragment>
  );
};

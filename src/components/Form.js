import React, {Fragment, useState} from 'react'

export const Form = () => {

  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  });

  const updateStatus = e => {
    setAppointment({
        ...appointment,
        [e.target.name]: e.target.value
    })
  }

  const {pet, owner, date, hour, symptoms} = appointment;

  return (
    <Fragment>
        <h2>create appointment</h2>

        <form>
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

            <button
            type="submit"
            className="u-full-width button-primary"
            >save appointment</button>
        </form>
    </Fragment>
  )
}




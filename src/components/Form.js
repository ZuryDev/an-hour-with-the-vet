import React, {Fragment} from 'react'

export const Form = () => {
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
            />
            <label>Pet owner name</label>
            <input
            type="text"
            name="pet owner"
            className="u-full-width"
            placeholder="Pet owner name"
            />
            <label>Date</label>
            <input
            type="date"
            name="date"
            className="u-full-width"
            />
            <label>Hour</label>
            <input
            type="time"
            name="hour"
            className="u-full-width"
            />
             <label>Symptoms</label>
            <textarea
            className="u-full-width"
            name="symptons"
            ></textarea>

            <button
            type="submit"
            className="u-full-width button-primary"
            >save appointment</button>
        </form>
    </Fragment>
  )
}




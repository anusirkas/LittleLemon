import React, { useState } from "react";
import "./BookingForm.css"; // Optional: Add styles

const BookingForm = ({ availableTimes, dispatch }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation details:", { date, time, guests, occasion });
    alert("Reservation submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-name">Please enter your name</label>
      <input
        type="name"
        id="res-name"
        value={name}
        onChange={handleDateChange}
        required
      />

<label htmlFor="res-mail">Please enter an email</label>
      <input
        type="mail"
        id="res-mail"
        value={mail}
        onChange={handleDateChange}
        required
      />
      
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
